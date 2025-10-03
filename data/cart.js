
export let cart =JSON.parse(localStorage.getItem('cart'));

if(!cart){ cart=
[{
    productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productid: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];
};
function savetostorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(product_id) {
    let match_item;
    cart.forEach((element) => {
        if (element.productid === product_id) {
            match_item = element;
        }
    });

    if (match_item) {
        match_item.quantity += 1;
    } else {
        cart.push({
            productid: product_id,
            quantity: 1
        });
    }

    savetostorage();
};

export function removeitem(id) {
    const newproduct = [];
    cart.forEach((element) => {
        if (id !== element.productid)
            newproduct.push(element);
    });
    cart = newproduct;

    savetostorage();
}