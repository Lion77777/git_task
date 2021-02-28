function getRandomLetter() {
    const randCharCode = Math.floor(Math.random() * 255);

    return String.fromCharCode(randCharCode);
}


console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());
console.log(getRandomLetter());
