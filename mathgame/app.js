function randomNum() {
    let num = Math.floor(Math.random() * 5) + 1;
    return num;
}

function randomExp() {
    let exp = ['*', '/', '+', '-'];
    return exp[Math.floor(Math.random() * exp.length)];
}


let num1, num2, num3, num4, num5;
let exp1, exp2, exp3, exp4;
let result;
let expression

function genNum() {
    num2 = randomNum();
    num1 = randomNum();
    num3 = randomNum();
    num4 = randomNum();
    num5 = randomNum();

    exp1 = randomExp();
    exp2 = randomExp();
    exp3 = randomExp();
    exp4 = randomExp();

    expression = `${num1} ${exp1} ${num2} ${exp2} ${num3} ${exp3} ${num4} ${exp4} ${num5}`;
    console.log(expression);


    try {
        result = eval(expression);
        result = Math.floor(result);
        console.log("Result:", result);


    } catch (error) {
        result = Math.round(result);
        console.log("Invalid expression:", error);
    }

}

function replaceNum() {
    expression1.innerHTML = num1;
    expression2.innerHTML = num2;
    expression3.innerHTML = num3;
    expression4.innerHTML = num4;
    expression5.innerHTML = num5;

    operator1.innerHTML = exp1;
    operator2.innerHTML = exp2;
    operator3.innerHTML = exp3;
    operator4.innerHTML = exp4;
}

genNum();
// console.log(`${num1} ${exp1} ${num2} ${exp2} ${num3} ${exp3} ${num4} ${exp4} ${num5}`);








let expression1 = document.querySelector(".expression1");
let expression2 = document.querySelector(".expression2");
let expression3 = document.querySelector(".expression3");
let expression4 = document.querySelector(".expression4");
let expression5 = document.querySelector(".expression5");



let operator1 = document.querySelector(".operator1");
let operator2 = document.querySelector(".operator2");
let operator3 = document.querySelector(".operator3");
let operator4 = document.querySelector(".operator4");




let start = document.querySelector("#start");
let done = document.querySelector(".btn");
let warning = document.querySelector(".warning");
let level = document.querySelector(".level");

let answer;
let form = document.querySelector(".form");
let ans = document.querySelector(".answer");
let mainBox = document.querySelector(".mainBox");
let lvl = 0;
let highScr;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    answer = ans.value
    
    

    if (ans.value) {
        if (answer == result) {
            console.log("Correct");
            warning.innerHTML = "";
            lvl++;
            ans.value = "";
            level.innerHTML = `Level : ${lvl}`;

            setTimeout(() => {
                mainBox.style.backgroundColor = 'green';
            }, 0);

            setTimeout(() => {
                mainBox.style.backgroundColor = 'blue';
            }, 800);

            genNum();
            replaceNum();

        }
        else {

            setTimeout(() => {
                mainBox.style.backgroundColor = 'red';
            }, 0);
            done.innerHTML = "Try Again";
            warning.innerHTML = `Wronge Answer!! Your Level is ${lvl}`;
            highScr = lvl;


            done.addEventListener("click", ()=> {
                reset();
            });
            

        }
    } else {
        warning.innerHTML = "Input Your Result";
    }

});





start.addEventListener("click", () => {
    replaceNum();
    start.style.display = "none";
    done.style.display = "inline";
});


function reset() {
    lvl = 0;
    level.innerHTML = `Level : ${lvl}`;
    warning.innerHTML = "ye";
    warning.innerHTML = `Highest Score : ${highScr}`;
    genNum();
    replaceNum();
}





// done.addEventListener("click", ()=> {
//     level = 0;
//     console.log("Level is : ",level);
//     level.innerHTML = `Level : ${lvl}`;
//     warning.innerHTML = "";
//     genNum();
//     replaceNum();
// });