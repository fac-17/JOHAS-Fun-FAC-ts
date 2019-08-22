const answers = Array.from(document.querySelectorAll(".answer"));
const trueButtons = Array.from(document.querySelectorAll(".button-true"));
const falseButtons = Array.from(document.querySelectorAll(".button-false"));
let scoreContainer = document.querySelector(".score");
let count = 0;

answers.forEach(answer => {
  answer.style.display = "none";
});

trueButtons.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    answers[ind].style.display = "block";
    if (answers[ind].innerText === "true") {
      count += 1;
      scoreContainer.textContent = `Score= ${count}`;
    }
  });
});

falseButtons.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    console.log(ind);
    answers[ind].style.display = "block";
    if (answers[ind].innerText !== "true") {
      count += 1;
      scoreContainer.textContent = `Score= ${count}`;
    }
  });
});
