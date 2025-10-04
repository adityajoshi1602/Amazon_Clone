import { products } from "../data/products.js";
import { cart, removeitem,updatedeliverydate } from "../data/cart.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { delivery_options } from "../data/deliveryoptions.js"

let block = '';
function render_order_summary() {
cart.forEach((Element) => {
    let product__id = Element.productid;
    let matchitem;

    let optionid = Element.deliveryid;
    let deliverydetails;
    let day = dayjs();
    let dday;
    delivery_options.forEach((option) => {
        if (option.id===optionid) {
            deliverydetails = option;
            dday= day.add(option.deliverydays,'days');
        }
    });
    let delievrydate=dday.format('dddd, MMMM D');
    products.forEach((element) => {
        if (element.id === product__id) {
            matchitem = element;
        }
    });
    console.log(delievrydate);

    block += `
                            <div class="product1 item${matchitem.id}">
                        <div class="delivery_date">
                            <span>Delivery Date : <span>${delievrydate}</span></span>
                            <br>
                        </div>
                        <div class="p_details">
                            <div class="img">
                                <img src="${matchitem.image}"
                                    style="height:180px ; width: 150px;" alt="">
                            </div>
                            <div class="about">
                                <span>${matchitem.name}</span>
                                <span style="color: brown; ">$ ${(matchitem.price).toFixed(2)}</span>
                                <span class="update">Quantity : <span class="Quant">${Element.quantity}</span> <span
                                        class="update_quantity change">Update</span> <span
                                        class="delete_product change delete" data-deleteid="${matchitem.id}">Delete</span></span>
                            </div>
                            <div class="dates">
                                <div>Choose a delivery option :</div>
                                <div class="delivery_option">
                                    ${update_dates(matchitem, Element)}

                                </div>
                            </div>
                        </div>
                    </div>`

});
document.querySelector('.order_grid').innerHTML = block;

document.querySelectorAll('.delete').forEach((element) => {
    element.addEventListener('click', () => {
        let delete_id = element.dataset.deleteid;
        removeitem(delete_id);
        const container = document.querySelector(`.item${delete_id}`);
        container.remove();

    });
});

function update_dates(product, cartitem) {
    let html = '';
    delivery_options.forEach((option) => {

        let cost = option.cost === 0 ? 'FREE' : `$ ${option.cost}`;
        let day = dayjs();
        let dday = day.add(option.deliverydays, 'days');
        let date = dday.format('dddd, MMMM D');

        let ischecked = Number( option.id )=== Number(cartitem.deliveryid);
        html += `
                                            <div class="opt">
                                        <div style="display: flex; justify-content: center;">
                                            <input ${ischecked ? 'checked' : ''} style="transform: scale(1.5);" type="radio" name="free_delivery${product.id}"
                                                id="free_d2" class="option_btn" data-id="${product.id}" data-option="${option.id}">
                                        </div>
                                        <div style="display: grid; grid-template-rows: 1fr 1fr;">
                                            <span class="label">${date}</span>
                                            <span style="color: gray;">${cost}</span>
                                        </div>
                                    </div>`

    });

    return html;
};

document.querySelectorAll('.option_btn').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const btnid=btn.dataset.id;
        const btnoption=Number(btn.dataset.option);

        updatedeliverydate(btnid,btnoption);
        render_order_summary();
    });
});

};

render_order_summary();