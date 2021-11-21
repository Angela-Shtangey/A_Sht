'use strict';
// eslint-disable-next-line prefer-const
let productName = 'Кресло';
// eslint-disable-next-line prefer-const
let productPrice = 12000;
// eslint-disable-next-line prefer-const
let productString = `${productName}, цена ${productPrice} рублей.`;
alert(productString);
// eslint-disable-next-line prefer-const
let first = prompt('Введите первое значение');
// eslint-disable-next-line prefer-const
let second = prompt('Введите второе значение');
function RandomGenerate (first, second) {
  return Math.round(+first + Math.random() * (second - first));
// унарный плюс перед first преобразовывает переданный стринг в int
// также сразу решена проблема когда min=max
// и нет разницы какое число пользователь считает минимальным, какое максимальным
}
// eslint-disable-next-line
console.log(RandomGenerate (first, second));
