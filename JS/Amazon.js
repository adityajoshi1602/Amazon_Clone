console.log('hello')

//making copy of product data to add new products
let products_html = '';
products.forEach((products) => {
    products_html += `            <div class="product1">
                <div class="img">
                    <img src="${products.image}"
                        alt="sock" style="height: 170px; width: 150px;">
                </div>
                <div class="name">
                    <span>${products.name}</span>
                </div>
                <div class="rating" style="font-size: 14px; padding: 2px 20px;">
                    <span>⭐⭐⭐⭐✨ <span class="rate">${products.rating.count}</span></span>
                </div>
                <div class="price_quantity" style="padding: 10px 20px;">
                    <span>Price : $ ${(products.price).toFixed(2)}</span>
                    <br>
                    <select style="border-radius: 5px;" name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div class="added" style="color:green;font-weight:600; margin-left:20px; margin-bottom:5px; "></div>

                <div class="add_to_cart" style="display:flex;justify-content: center;align-items: center;">
                    <button class="add" data-id="${products.id}"
                        style="padding: 10px 70px; font-weight: 600; border-radius: 10px; background-color: goldenrod; cursor: pointer;">Add
                        To Cart</button>
                </div>
            </div>`

});
console.log(products_html);
document.querySelector('.products').innerHTML = products_html;

document.querySelectorAll('.add').forEach((button)=>{
    button.addEventListener('click',()=>{
        const product_id=button.dataset.id;
        let match_item;
        cart.forEach((element)=>
        {
            if(element.productid===product_id){
                match_item=element;
            }
        });

        if (match_item) {
            match_item.quantity +=1;
        }else{
            cart.push({
                productid:product_id,
                quantity:1
            });
        }
        console.log(cart);
    });
});