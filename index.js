// question 1. Write a loop that prints the numbers from 1 to 10 in the console
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// question 2. write a loo[p to calculate the sum pf all numbers from 1 to 100. print the result
let add = 0;
for (let i = 1; i <= 100; i++){
    add += i;
}
console.log(add);

// question 3. Write a for loop that print all the even no between 1 to 20
for (let i = 1; i <= 20; i++){
    if (i % 20 === 0){
        console.log(i);
    }
}

// question 4. write a for loop that prints the numbers from 10 dowm to 1
for (let i = 1; i >= 10; i++){
    console.log(i);
}

// question 5. write a for loop that prinnts the multiplication table of 5(from 5*1 to 5*10)
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// question 6. Given an arrey const fruits = ["apple", "banana", "orange", "grape"], use a for loop to print each fruit in the console.
const fruits = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// question 7. write a for loop to calculate the fatorial of a given number n (eg, 5! = 5*4*3*2*1)
function factorial(n) {
    let result = 1;
    for (let i = 2; 1 <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// question 8. Given and array const numbers = [5,10,15,20,25], use a for loop to find the sum of all elements in the array
const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// question 9. Write a for loop to reverse a string. eg, reverse "hello" to "olleh"
function reverseString(str){
    let reversed = "";
    for (let i = str.length - i; i >= 0; i--){
        reversed += str[i];
    }
    return reversed
}
console.log(reverseString("hello"));

// question 10. Write a for loop to count the number of vowels in a given string. for example, count the vowels in the string "javascript"
function countVowels(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if ("aeiou".includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));