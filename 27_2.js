/* 2. Создать массив, описывающий чек в магазине.
Каждый элемент массива состоит из названия товара,
 количества и цены за единицу товара. Написать следующие
  функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */


let myCheck = [
  {
    element: "banana",
    price: 125,
  },
  {
    element: "chocolate",
    price: 58,
  },
  {
    element: "pasta",
    price: 47,
  },
  {
    element: "watermelon",
    price: 40,
  },
  {
    element: "salmon",
    price: 500,
  },
  {
    element: "powder",
    price: 150,
  },
]
function printCheck() {
  for (let i = 0; i < myCheck.length; i++) {
    console.log(`Goods: ${myCheck[i].element} --> ${myCheck[i].price} UAH `)
  }
};
function allSum() {
  let sum = 0; 
  for (let i = 0; i < myCheck.length; i++) {
    sum = sum + myCheck[i].price;
  }
  console.log(`-------------- Amount to be paid: ${sum} UAH`);
};


console.log("------- Print check ----")
printCheck();
allSum();
