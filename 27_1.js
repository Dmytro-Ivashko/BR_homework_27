/* 1. Создать массив «Список покупок».
 Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
  Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список.
 Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

 */
let shoppingList = [
  { product: "banana", qty: 5, purchased: true },
  { product: "pineapple", qty: 10, purchased: false },
  { product: "apple", qty: 3, purchased: true },
  { product: "meat", qty: 1, purchased: false },
  { product: "bread", qty: 1, purchased: true },
  { product: "potato", qty: 5, purchased: true }
];

shoppingList.sort(function(a, b) {
  return b.purchased - a.purchased;
});
console.log(shoppingList);

function addToList(p, q) {
  shoppingList.push({ product: p, qty: q, purchased: true });
}

function toMyShoppingList() {
  let addProduct = prompt("add Product");
  let addQty = parseInt(prompt("add Qty"));
  const isInShoppingList = element => element.product == addProduct;
  let i = shoppingList.findIndex(isInShoppingList);
  if (i > 0) {
    shoppingList[i].qty += addQty;
  } else {
    addToList(addProduct, addQty);
  }
}
toMyShoppingList();
console.log("--------add-------");
console.log(shoppingList);
