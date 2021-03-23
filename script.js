// задача 1
let output = '';
for (let i = 10; i <= 20; i++) {
    output += i + ' , ';
}
console.log(output);
console.log('');

// задача 2
let result = '';
for (let i = 10; i <= 20; i++) {
    for (k = 2; k < 3; k++) {
        console.log(i ** k);
    }
}
console.log(result);

// задача 3
for (let i = 7; i < 8; i++) {
    for (k = 1; k < 10; k++) {
        console.log(`${i}*${k}=${i * k}`);
    }
}
console.log('');

// задача 4
let sum = 0;
for (let i = 0; i <= 15; i++) {
    sum += i;
}
console.log(sum);
console.log('');

// задача 5
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(mult);
console.log('');

// задача 6
let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
}
console.log(sum1 / 500);
console.log('');

// задача 7
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);
console.log('');

// задача 8 
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log('');

// задача 9 
let n = 6;
let i = 0;
let sum3 = 0;
let count = 0;

for (i = 0; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

for (i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) {
        sum3 += i;
    }

}
console.log('Сумма четных делителей =' + ' ' + sum3);

for (i = 0; i <= n; i++) {
    if ((n / i) % 2 === 0) {
        count += 1;
    }
}
console.log('Количество четных делителей =' + ' ' + count);
console.log('');

// задача 10
for (i = 1; i <= 10; i++) {
    for (k = 1; k <= 10; k++) {
        console.log(i + '*' + k + '=' + i * k);

    }
    console.log('');
}

// задача 11
confirm('Привет, я загадал число от 1 до 10, попробуй угадать');
let number = Math.ceil(Math.random() * 10);
let guess = parseInt(prompt('Какое число я загадал?'));
let numberofGuesses = 0;

for (i = 1; i <= 10; i++) {
    numberofGuesses += 1;
    if (guess === null) {
        confirm("Приходи еще");
        break
    }
    else if (guess != number) {
        if (guess > number) {
            guess = prompt("Много. Попробуй еще раз");
        }
        else if (guess < number) {
            guess = prompt("Мало. Попробуй еще раз");
        }
    }
    else {
        confirm('Ты угадал! Это число ' + number + ' Тебе понадобилось ' + numberofGuesses + ' попыток');
        break
    }
}





















































