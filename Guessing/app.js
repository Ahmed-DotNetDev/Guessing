let guess = 0;
let numberOfGuessing = 0;
let answer = Math.floor(Math.random() * 10 + 1);
document.getElementById("btn").onclick = function () {
    guess = document.getElementById("inpt").value;
    numberOfGuessing++;
    if (guess == "") {
        alert("Type a number");
    }
    else if (guess < answer) {
        alert("Too small");

    }
    else if (guess > answer) {
        alert("Too large");
    }
    else {
        alert(`Succes with ${numberOfGuessing} trying`);
        document.getElementById("inpt").value = "";
    }
}