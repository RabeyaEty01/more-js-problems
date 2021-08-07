//finding max element from an array
function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;

}

const firstMax = largestElement([2, 7, 90, 78, 89, 345, 675, 23]);
console.log('Max element is: ' , firstMax);




//finding even elements type-1

function evenElement() {
    let number=[90,23,22,45,66,78,45,98];
    console.log('Even elements are:');
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
           console.log(number[i]);
        }
    }
   

}

evenElement();

 
//finding even elements type-2
function evenValue(num) {
    let even = num[0];
    console.log('Even numbers are:');
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            even = num[i];
            console.log(even);
        }
    }
}
evenValue([2, 7, 90, 22222,78, 89, 345, 675, 23, 88, 34, 79, 55, 09, 22, 96, 202, 356,9995,986758]);
 
//finding odd elements type-2
function oddValue(number) {
    let odd = number[0];
    console.log('Odd numbers are:');
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            odd = number[i];
            console.log(odd);
        }
    }
}
oddValue([2, 7, 90,78, 89, 345, 675, 23, 88, 34, 79, 55, 09, 22, 96, 202, 356,9995,986758]);
