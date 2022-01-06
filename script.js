let outcome = 0;
let inputString = '';
let equation = [];
const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const negative = document.querySelector('#negative');
const clear = document.querySelector('#clear');
const percent = document.querySelector('#percent');

numbers.forEach(number => {
    number.onclick = () => setInput(number.innerText);
});

negative.onclick = () => {
    if (inputString == '') {
        inputString = '-'
    } else {
        inputString = String(parseFloat(inputString) * -1)
    }
    screen.innerText = inputString;
};

clear.onclick = () => {
    if (inputString == '') {
        screen.innerText = 0;
        equation = [];
    } else {
        inputString = '';
        screen.innerText = '';
        operators.forEach(x => {
            x.style.backgroundColor = 'white';
            x.style.color = 'black';
        })
    }
};

percent.onclick = () => {
    if (inputString != '') {
        inputString = String(parseFloat(inputString) * .01)
        screen.innerText = inputString;
    }
}

const setInput = (input) => {
    inputString += input;
    screen.innerText = inputString;

    operators.forEach(operator => {
        operator.onclick = () => setOperator(operator)
    })
};

const setOperator = (operator) => {
    equation.push(parseFloat(inputString))
    equation.push(operator.innerText)
    operator.style.backgroundColor = 'grey'
    operator.style.color = 'white';
    inputString = ''
};

const evaluate = () => {
    inputString !== '' && equation.push(parseFloat(inputString))
    if (equation.length == 3) {
        switch (equation[1]) {
            case '+':
                screen.innerText = equation[0] + equation[2]
                break;
            case '-':
                screen.innerText = equation[0] - equation[2]
                break;
            case 'x':
                screen.innerText = equation[0] * equation[2]
                break;
            case '/':
                screen.innerText = equation[0] / equation[2]
                break;
            default:
                console.log('there was a problem');
                break;
        }
        operators.forEach(x => {
            x.style.backgroundColor = 'white';
            x.style.color = 'black';
        })
        equation = [];
        inputString = '';
    }
};

document.querySelector('#equal').onclick = () => evaluate();