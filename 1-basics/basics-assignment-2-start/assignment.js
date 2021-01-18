const task3Element = document.getElementById('task-3');

function showHello() {
    console.log('hello');
}

function showMyText(text) {
    console.log(text);
}

function showThreeStrings(text1, text2, text3) {
    console.log(`${text1} ${text2} ${text3}`);
}

// showHello()
showMyText('hello 2')
showThreeStrings('How', 'are', 'you?')

task3Element.addEventListener('click', showHello);