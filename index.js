const score = document.querySelectorAll(".score");
const update_value = document.querySelector(".live-score");
const thank_you_card = document.querySelector("#card");
const rate = document.querySelectorAll(".rate");
const btn = document.querySelector(".btn");



score[0].addEventListener("click", function () {
    update_value.innerText = "you rate 1 out of 5";
    score[0].style.backgroundColor = "hsl(25, 97%, 53%)";
    rate[0].style.color = "#fff";
})
score[1].addEventListener("click", function () {
    update_value.innerText = "you rate 2 out of 5";
    score[1].style.backgroundColor = "hsl(25, 97%, 53%)";
    rate[1].style.color = "#fff";
}) 
score[2].addEventListener("click", function () {
    update_value.innerText = "you rate 3 out of 5";
    score[2].style.backgroundColor = "hsl(25, 97%, 53%)";
    rate[2].style.color = "#fff";
}) 
score[3].addEventListener("click", function () {
    update_value.innerText = "you rate 4 out of 5";
    score[3].style.backgroundColor = "hsl(25, 97%, 53%)";
    rate[3].style.color = "#fff";
}) 
score[4].addEventListener("click", function () {
    update_value.innerText = "you rate 5 out of 5";
    score[4].style.backgroundColor = "hsl(25, 97%, 53%)";
    rate[4].style.color = "#fff";
})

btn.addEventListener("click", function () {
    thank_you_card.style.visibility = "visible";
})
