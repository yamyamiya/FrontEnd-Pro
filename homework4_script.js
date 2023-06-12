// Task1
// В программе задан массив, передающий строковые элементы. 
// Напишите программу, которая которая ответит на вопрос: 
// присутствует ли в массиве элемент, чей корень длины возвращает целое число? 
// В качестве ответа необходимо вывести булевый тип true, false.

const array = ['Велосипед','Торт','Тенис','Pакетка','Город'];
const res1 = array.some(elem => elem.length**0.5%1===0)
console.log(res1);

// Task2
// В программе задан массив, передающий числовые элементы. 
// Напишите программу, которая сформирует новый массив из отрицательных чисел
//  заданного массива.
const array2 = [1,2,3,-4,5,-6,7,-8,9,10]
const res2 = array2.filter(elem => elem<0)
console.log(res2);

// Task3
// В программе задана переменная numbers, которая хранит массив из чисел.
//  Определите, какое максимальное количество элементов массива numbers
//  (в порядке, который реализован в массиве) можно сложить, 
//  чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
let numbers = [10, 20, 33, 55, 100] 

// 1-ое решение
let counter=0
const res3 = numbers.reduce((acc, val) =>{
    acc=acc+val
    if(acc<50){
       counter++
    } 
    return acc
},0)
console.log(counter);


// 2-ое решение
function findNumberOfElem(array){
    let sum=0
    let counter=0
for (let index = 0; index < array.length; index++) {
        sum+=array[index]
        if(sum<50){
        counter++
    }
}
return counter;
}

console.log(findNumberOfElem(numbers));

// Task4
// В программе задана переменная values, которая хранит массив из строк. 
// Определите математическую сумму всех элементов, которые при 
// преобразовании в число не вернут значение NaN. 
// Результат выведите в консоль. 

let values = ["100", "30", "Не число", "20", "Тоже не число"] 

// 1-ое решение
let res4 = values.reduce((acc, val) => {
    if(!isNaN(Number(val))){
        acc=acc+Number(val)
    }
    return acc
},0)

console.log(res4);  

// 2-ое решение
function findSum(array){
    let sum=0
    for (let index = 0; index < array.length; index++) {
         if(!isNaN(Number(array[index]))){
            sum+=Number(array[index])
         }     
    }
    return sum
}
console.log(findSum(values));



// Task5
//В программе заданы два массива array_1 и array_2, элементы которого являются числами.
//  Значения внутри одного массива уникальные. Реализуйте функцию intersection, 
//  которая принимает в качестве аргументов два массива и возвращает новый массив. 
//  Он должен содержать значения, которые встречаются в обоих массивах-аргументах, 
//  и быть отсортирован по убыванию. 

let array_1 = [1, 4, 7, 8, 2] 
let array_2 = [1, 5, 11, 6, 2]
function intersection(array1, array2){
    let array3 = []
    for (let index = 0; index < array1.length; index++) {
        if(array2.includes(array1[index])){
           array3.push(array1[index]) 
        }
    }
    array3.sort((a,b)=> b-a)
    return array3;
}

console.log(intersection(array_1, array_2));



