let price = 150000;
let quantity = 1;
let price2 = 180000;
let quantity2 = 1;

function TotalPrice(quantity, price) {
    return quantity * price;
}

const calc = quantity * price;
console.log(calc)



function TotalPrice2(quantity2, price2) {
    return quantity2 * price2;
}

const calc2 = quantity2 * price2;
console.log(calc2)

function calculateTotalPrice() {
    const sum = calc + calc2;
    alert('Стоимость покупки ' + sum + ' рублей');
    let result = document.getElementById('result');
    result.textContent = ('Стоимость покупки ' + sum + ' рублей');
}

function getElement(a) {
    console.log(a);
}

getElement(result);

