export const cart =JSON.parse(localStorage.getItem('cart')) ||  [
        {
            productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryid: 2
        }, {
            productid: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryid: 2
        }]  ;


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
        match_item.push({
            productid: product_id,
            quantity: 1,
            deliveryid: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

};

export function removeitem(id) {
    const newproduct = [];
    cart.forEach((element) => {
        if (id !== element.productid) {
            newproduct.push(element);
        }
    });
    cart = newproduct;

    localStorage.setItem('cart', JSON.stringify(cart));

};


export function updatedeliverydate(product_id, option_id) {
    let matchitem;
    cart.forEach((element) => {
        if (element.productid === product_id) {
            matchitem = element;
        }

    });

    if(matchitem) {
        matchitem.deliveryid = Number(option_id);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

};