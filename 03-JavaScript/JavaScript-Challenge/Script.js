//Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = number => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

//Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = days => {
    let age = days/365;
    age = Math.floor(age);
    return age;
};
console.log(convertDaysToAge(3668));
console.log(convertDaysToAge(6570));

//Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (numberOne, numberTwo, numberThree) => {
    var tempArray = [numberOne, numberTwo, numberThree];
    var largestNumber = tempArray.sort((a, b) => a - b);
    console.log(largestNumber)
    return largestNumber[2];
};

console.log(getLargestNumber(2 ,1, 4));
console.log(getLargestNumber(6,2,3));

//Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = names => {
    const lastName = names.length - 1;
    return names[lastName]
};

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash","Stu"]));

//Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1) {
            return false;
        };
    };
    return true;
};

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));