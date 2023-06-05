let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]

//  1. Отфильтруйте массив таким образом, 
//  чтобы там оказались элементы с четным значением ID
let arrayWithEvenID = goods.filter(elem => elem.id%2===0)
console.log(arrayWithEvenID);

// 2. Посчитайте сумму всех товаров, учитывая их количество
const initialValue = 0;
let sum = goods.reduce(
  (accumulator, elem) => accumulator + elem.count*elem.price,
  initialValue
);

console.log(sum);

// 3. Найдите значение элемента массива (продукта), цена которого будет кратна 5.
let res3 = goods.filter(elem => elem.price%5===0)
console.log(res3);

// 4. Найдите индекс элемента, count которого будет больше 11.
let res4 = goods.findIndex(elem => elem.count>11)
console.log(res4);

// 5. Посчитайте количество элементов, count которых является нечетным числом
let res5 = goods.filter(elem => elem.count%2!==0)
console.log(res5.length);

// 6. Посчитайте количество элементов, имя которых начинается на “Т”
let res6 = goods.filter(elem => elem.title[0]==="Т")
console.log(res6.length);

// 7. Создайте новый массив, элементы которого будут хранить значение 
// цен всех товаров с 35-процентной скидкой (только цены)
let res7 =[]
goods.forEach(elem => {
    res7.push(elem.price*(1-0.35))
    
});
console.log(res7);

// 8.Создайте новый массив, изменив только 1 сво-во count 
// на значение 0 для всех элементов (учитывая другие сво-ва)

 let res8 = goods.map(elem => ({...elem,count:0}))
 console.log(res8)

let res8_2 =[]
goods.forEach(elem => {
    elem.count=0
    res8_2.push(elem)
    
});
console.log(res8_2);


// 9. Отфильтруйте массив по сво-ву title
let res9 = goods.filter(elem => elem.title.length>7)
console.log(res9);
