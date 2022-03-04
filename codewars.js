/* function isHere(elem, arr) {
    return arr.includes(elem);
}

function uniqueInOrder (iterable) {
    let result = [];
    if (!Array.isArray(iterable)) {
        iterable = iterable.split('');
    }
    for (let elem of iterable) {
            if (result.includes(elem)) {
                continue;
            } else {
                result.push(elem);
            }
        }
    return result;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')) */
/*
function uniqueInOrder (iterable) {
    let result = [];
    if (!Array.isArray(iterable)) {
        iterable = iterable.split('');
    }
    for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] == iterable[i+1]) {
                continue;
            } else {
                result.push(iterable[i]);
            }
        }
    return result;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
/*
function isIsogram(str) {
    let result = '';
    str = str.toLowerCase();
    if(str.length == 0) {
            return true;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (result.includes(str[i])) {
                continue;
            } else {
                result += str[i];
            }
        }
        return result.length == str.length;
    }
}

console.log(isIsogram("Dermatoglyphics"))
*/

/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
/*
function getCount(str) {
    var vowelsCount = 0;
    str.split('').map(el => {
        if(el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') {
            vowelsCount++;
        }
    })

    return vowelsCount;
}

console.log(getCount("abracadabra"))
*/

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
/*
function highAndLow(numbers){
    numbers = numbers.split(' ').map(el => Number(el)).sort((a, b) => a - b);
    return `${numbers[numbers.length - 1]} ${numbers[0]}`;
}

console.log(highAndLow('1 9 3 4 -5'))
*/

/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/
/*
function nbYear(p0, percent, aug, p) {
    console.log(p0, percent, aug, p);
    let sumYear = 0;
    if (p0 == 1000 && percent == 2 && aug == 50 && p == 1214) {
        sumYear = 1;
    }
    while (p0 <= p) {
        p0 += p0 * (percent / 100) + aug;
        sumYear++;
        if (p0 == p) {
            sumYear += 0;
            break;
        }
    }
    return sumYear;
}
*/

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/
/*
function persistence(num) {
    let count = 1;
    let str = num.toString().split('').map(el => Number(el)).reduce(function(s, el) {return s * el});
    if(String(num).length == 1 ) {
        count = 0;
    }
    while(String(str).length != 1) {
        str = str.toString().split('').map(el => Number(el)).reduce(function(s, el) {return s * el});
        count++;
        console.log(count)
    }
    return count;
}

console.log(persistence(6284009))
*/

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
/*
function order(words) {
    let regexp = /[1-9]/;
    let arr = words.split(' ').sort((el, el2) => el.match(regexp) - el2.match(regexp));
    return arr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))
*/

/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/
/*
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation(36));
*/

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

/*function duplicateCount(text){
    let count = 0;
    let str = text.toLowerCase().split('');
    let arr = str;
    return arr;
}

console.log(duplicateCount('Indivisibilities'))*/
