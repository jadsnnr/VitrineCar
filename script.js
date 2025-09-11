const modal = document.querySelector('.modal_dialog');
const modalAction = document.querySelectorAll('.modal_button');
const title = document.querySelector('brand_title')
const brandName = document.getElementById('brand_name');
const modelName = document.getElementById('model');

modalAction.forEach(item => {
    item.addEventListener("click", () => {
        modal.showModal();
        brandName.innerText = item.querySelector('.brand_title').innerText;
        modelName.innerText = item.querySelector('.model_name').innerText;
    })
})