/* 1. Создать массив «Список покупок».
 Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
  Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список.
 Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

 */
let shoppingList = [
    { product: "banana",
      qty: 5,
      purchased: true,
    },
    { product: "pineapple",
      qty: 10,
      purchased: false,
    },
    { product: "apple",
      qty: 3,
      purchased: true,
    },
    { product: "meat",
      qty: 1,
      purchased: false,
    },
    { product: "bread",
      qty: 1,
      purchased: true,
    },
    { product: "potato",
      qty: 5,
      purchased: true,
    },
]

shoppingList.sort(function(a, b) { 
    return b.purchased - a.purchased; 
});
console.log(shoppingList);

function addToList () {
    shoppingList.push(
        { product: "as", 
         qty: 2,
         purchased: true,
        },)

};

addToList();
console.log(shoppingList);

function adds() {
    let addTest = prompt("add");
    if (addTest === null ) {
        console.log("false");
    } else {
        console.log("add");
    }
}

adds();