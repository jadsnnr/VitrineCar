const modal        = document.querySelector('.modal_dialog');
const modalButtons = document.querySelectorAll('.modal_button');
const brandName    = document.getElementById('brand_name');
const modelName    = document.getElementById('model');
const returnIcon   = document.querySelector('.return_icon');
const sliderSection= document.querySelector('.slider');

modalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Abre o <dialog>
    modal.showModal();

    // Marca / Modelo
    brandName.textContent = btn.dataset.brand || btn.querySelector('.brand_title')?.textContent || '';
    modelName.textContent = btn.dataset.model || btn.querySelector('.model_name')?.textContent || '';

    // Limpa imagens antigas
    sliderSection.innerHTML = '';

    // Recupera e cria novas imagens, se houver
    const imgsAttr = btn.dataset.imgs;
    if (imgsAttr) {
      let imgs = [];
      try { imgs = JSON.parse(imgsAttr); } catch { console.warn('data-imgs inválido'); }
      imgs.forEach(src => {
        console.log("Carregando imagem:", src);
        
        const img = document.createElement('img');
        img.src  = src;
        img.alt  = `${brandName.textContent} ${modelName.textContent}`;
        img.classList.add('img_modal');
        sliderSection.appendChild(img);

        img.onerror = () => console.error("Erro ao carregar:", img.src);
        img.onload = () => console.log("Imagem carregada:", img.src);
      });
    }
  });
});

// Fecha o modal
returnIcon.addEventListener('click', () => modal.close());
