console.log("this is the js");

const answers = Array.from(document.querySelectorAll(".answer"));
const trueButtons = Array.from(document.querySelectorAll(".button-true"));
const falseButtons = Array.from(document.querySelectorAll(".button-true"));

answers.forEach(answer => {
  answer.style.display = "none";
});
