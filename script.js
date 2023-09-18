//! Сделайте из него массив, состоящий из квадратов этих чисел.
/* let arr = [1, 3, 8, 5, 6]

arr = arr.map(elem => {
    return elem **2
})
console.log(arr); */
//! Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
/* let arr = [1, 2, 2, 3, 5, 5];

let set = new Set(arr);
arr = [...set]
console.log(arr); */
//! Проверьте то, что все элементы в массиве больше нуля (результат - true/false).
/* let arr = [1, 2, 2, 3, 5, 5];
let isZero = true

for(let elem of arr){
     elem > 0 ? isZero = true 
    : isZero = false;
}
console.log(isZero); */
//! Оставьте в массиве только отрицательные числа
/* let arr = [1, 2, -2, 3, -5, 5];

arr = arr.filter(elem => elem < 0)
console.log(arr); */
//! Найдите сумму элементов массива.
/* let arr = [1, 2, -2, 3, -5, 5];

let sum = 0;
arr.map(elem => sum += elem)
console.log(sum); */
//! Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}]). Оставьте в нем только подмассивы.
/* let arr = [1, 2, [3, 4], 5, {a: 7}]
arr = arr.filter(Array.isArray)
console.log(arr); */
//! Верните количество слов в строке, длина которых больше 4 символов.
/* let str = 'jgjgjgj gkgkkg jhj khkh';

let arr = str.split(' ')
arr = arr.filter(elem => elem.length > 4 )*/
//! Если в строке имеется шестизначное число(ни больше, ни меньше) - верните его, как результат функции. Число может быть не отделено от других символов пробелами. Кейсы (строка - результат):
/* let str =  'abcef12345678ghi654321klm';
let isFound = true

function func(value){
    let result = value.match(/\d+/g)
    return result
};
function func1(result){
    for(let elem of result){
        if(elem.length == 6){
            isFound = true
            return elem
        }
        isFound = false
    }
}

const resultArray = func(str)
const result = func1(resultArray)

console.log(result === undefined ? isFound : result); */