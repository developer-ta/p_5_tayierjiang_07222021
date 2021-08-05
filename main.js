let teddies__data = [];
const images_products = document.createElement('div');
images_products.className = "image_product";
document.querySelector('.affichang_products').appendChild(images_products);
const description_products = document.createElement('div');
description_products.className = "description";
document.querySelector('.affichang_products').appendChild(description_products);
const btn_select = document.createElement('div');
btn_select.className = "btn_select";
document.querySelector('.affichang_products').appendChild(btn_select);

async function get_json() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();


        afichage_teddies(data);
    } else {
        alert('Error');
    }


}
get_json();

function afichage_teddies(data) {
    let teddies = {};
    let images = '';
    let p = '';
    let affisher = '';


    data.forEach(function (item) {
        console.log('item: ', item);
        let description = item.description;
        let image = item.imageUrl;

        affisher += '<button class="btn" type="submit">add-panier</button><button class="btn" type="submit">favorite</button>'

        console.log('item: ', item.imageUrl);
        images += `<a href="${image}" target="_black"><img src="${image}"></a>`

        p += `<div><strong>description:</strong>${description}<br>colors: <br> price:</div>`
    });



    document.querySelector('.image_product').innerHTML = images;
    document.querySelector('.description').innerHTML = p;
    document.querySelector('.btn_select').innerHTML = affisher;




}