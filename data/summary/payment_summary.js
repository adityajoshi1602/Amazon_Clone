import { cart } from "../cart.js";
import { products } from "../products.js";
import { delivery_options } from "../deliveryoptions.js";


export function render_payment_summary() {
    let product_price = 0;
    let deliverycost=0;


    console.log('working');
    cart.forEach((item) => {
        let matchitem;
        let deliveryoption=Number(item.deliveryid);

        products.forEach((product) => {
            if (item.productid === product.id) {
                console.log(product.id);
                matchitem = product;
                product_price += Number(matchitem.price) * Number(item.quantity);

                delivery_options.forEach((option) => {
                    if(Number(option.id)===deliveryoption){
                        deliverycost+=Number(option.cost) ;
                    }
                });

            };
        });

    });
    console.log(deliverycost);
    console.log(product_price);

    const totalbeforeTax= deliverycost + product_price;
    console.log(totalbeforeTax.toFixed(2));
    const afterTax = (totalbeforeTax + (totalbeforeTax/10)).toFixed(2);
    console.log(afterTax);

    let paymentsummary=0;

    paymentsummary=`<div class="items_handling">
                        <div class="i_h">
                            <span style="font-weight: 400;">Items(<span>3</span>) :</span>
                            <span style="font-weight: 400;">Shipping & Handling :</span>
                        </div>
                        <div class="price">
                            <span class="payment_summary_money">$ ${product_price}</span>
                            <span class="payment_summary_money">$ ${deliverycost}</span>

                        </div>
                    </div>
                    <div class="tax">
                        <div class="tax_per">
                            <span style="font-weight: 400;">Total Before Tax :</span>
                            <span style="font-weight: 400;">Estimated Tax(10%) :</span>
                        </div>
                        <div class="payment_price">
                            <span class="payment_summary_money">$ ${(totalbeforeTax).toFixed(2)}</span>
                            <span class="payment_summary_money">$ ${(totalbeforeTax/10).toFixed(2)}</span>

                        </div>
                    </div>
                    <div class="final_price">
                        <div class="order_total">Order Total :</div>
                        <div class="total_price">$ ${afterTax}</div>
                    </div>`

                    console.log(paymentsummary);


                    document.querySelector('.x').innerHTML=paymentsummary;

};