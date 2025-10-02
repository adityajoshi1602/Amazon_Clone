console.log('hello')

//making copy of product data to add new products
const product = [{
    image: 'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        starts: 4.5,
        count: 87
    },
    price: 10.90
},
{
    image: 'https://supersimple.dev/projects/amazon/images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        starts: 4.5,
        count: 95
    },
    price: 20.95
},
{
    image: 'https://supersimple.dev/projects/amazon/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        starts: 4.5,
        count: 56
    },
    price: 7.99
}];

let products_html='';

product.forEach((product) => {
    products_html += `            <div class="product1">
                <div class="img">
                    <img src="${product.image}"
                        alt="sock" style="height: 166.15px; width: 140px;">
                </div>
                <div class="name">
                    <span>${product.name}</span>
                </div>
                <div class="rating" style="font-size: 14px; padding: 2px 20px;">
                    <span>⭐⭐⭐⭐✨ <span class="rate">${product.rating.count}</span></span>
                </div>
                <div class="price_quantity" style="padding: 10px 20px;">
                    <span>Price : $ ${product.price}</span>
                    <br>
                    <select style="border-radius: 5px;" name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div class="adto_cart" style="display:flex;justify-content: center;align-items: center;">
                    <button
                        style="padding: 10px 70px; font-weight: 600; border-radius: 10px; background-color: goldenrod; cursor: pointer;">Add
                        To Cart</button>
                </div>
            </div>`

});
console.log(products_html);

document.querySelector('.products').innerHTML= products_html;