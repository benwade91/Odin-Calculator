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
        operators.forEach(x => {
            x.style.backgroundColor = '#FF9500';
            x.style.color = 'white';
        })
    } else {
        inputString = '';
        screen.innerText = '';
        clear.innerText = 'AC'
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
    clear.innerText = 'C'
    operators.forEach(operator => {
        operator.onclick = () => setOperator(operator)
    })
};

const setOperator = (operator) => {
    equation.push(parseFloat(inputString))
    equation.push(operator.innerText)
    operator.style.backgroundColor = 'white'
    operator.style.color = '#FF9500';
    inputString = ''
};

const evaluate = () => {
    inputString !== '' && equation.push(parseFloat(inputString))
    if (equation.length == 3) {
        switch (equation[1]) {
            case '+':
                inputString = String(equation[0] + equation[2])
                break;
            case '—':
                inputString = String(equation[0] - equation[2])
                break;
            case 'x':
                inputString = String(equation[0] * equation[2])
                break;
            case '÷':
                inputString = String(equation[0] / equation[2])
                break;
            default:
                console.log('there was a problem');
                break;
        }
        operators.forEach(x => {
            x.style.backgroundColor = '#FF9500';
            x.style.color = 'white';
        })
        equation = [];
        screen.innerText = inputString
    }
};

document.querySelector('#equal').onclick = () => evaluate();
document.querySelector('#date').innerText = (new Date()).getFullYear();