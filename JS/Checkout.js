import { products } from "../data/products.js";
import { cart,removeitem } from "../data/cart.js";

let block = '';
cart.forEach((Element)=>{
    let product__id=Element.productid;
let matchitem;
products.forEach((element) => {
    if (element.id === product__id) {
        matchitem = element;
    }
});


        console.log(matchitem);

        block += `
                            <div class="product1 item${matchitem.id}">
                        <div class="delivery_date">
                            <span>Delivery Date : Tuesday, June 21</span>
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
                                    <div class="opt">
                                        <div style="display: flex; justify-content: center;">
                                            <input style="transform: scale(1.5);" type="radio" name="free_delivery${matchitem.id}"
                                                id="free_d1">
                                        </div>
                                        <div style="display: grid; grid-template-rows: 1fr 1fr;">
                                            <span class="label">Tuesday, 21 June</span>
                                            <span style="color: gray;">FREE Delivery</span>
                                        </div>
                                    </div>

                                    <div class="opt">
                                        <div style="display: flex; justify-content: center;">
                                            <input style="transform: scale(1.5);" type="radio" name="free_delivery${matchitem.id}"
                                                id="free_d2">
                                        </div>
                                        <div style="display: grid; grid-template-rows: 1fr 1fr;">
                                            <span class="label">Wednesday, 15 June</span>
                                            <span style="color: gray;">FREE Delivery</span>
                                        </div>
                                    </div>

                                    <div class="opt" style="border-bottom: 0px;">
                                        <div style="display: flex; justify-content: center;">
                                            <input style="transform: scale(1.5);" type="radio" name="free_delivery${matchitem.id}"
                                                id="free_d3">
                                        </div>
                                        <div style="display: grid; grid-template-rows: 1fr 1fr;">
                                            <span class="label">Monday, 13 June</span>
                                            <span style="color: gray;">FREE Delivery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`

});
document.querySelector('.order_grid').innerHTML=block;

document.querySelectorAll('.delete').forEach((element)=>{
    element.addEventListener('click',()=>{
            let delete_id=element.dataset.deleteid;
            console.log(delete_id);
            removeitem(delete_id);
            const container =  document.querySelector(`.item${delete_id}`);
            console.log(container);
            container.remove();

    });
    });