const answers = Array.from(document.querySelectorAll(".answer"));
const trueButtons = Array.from(document.querySelectorAll(".button-true"));
const falseButtons = Array.from(document.querySelectorAll(".button-false"));
let scoreContainer = document.querySelector(".score");
let count = 0;

answers.forEach(answer => {
  answer.style.display = "none";
});

answerFunction = buttonsArray => {
  buttonsArray.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
      let answerCapital =
        answers[ind].innerText.charAt(0).toUpperCase() +
        answers[ind].innerText.slice(1);

      answers[ind].style.display = "block";
      answers[ind].innerText = `Answer is: ${answerCapital}`;
      if (btn.textContent === "True" && answers[ind].innerText === "true") {
        count += 1;
        scoreContainer.textContent = `Score= ${count}`;
        btn.style.display = "none";
        falseButtons[ind].style.display = "none";
      } else if (
        btn.textContent === "False" &&
        answers[ind].textContent === "false"
      ) {
        count += 1;
        scoreContainer.textContent = `Score= ${count}`;
        btn.style.display = "none";
        trueButtons[ind].style.display = "none";
      } else {
        // btn.style.display = "none";
        falseButtons[ind].style.display = "none";
        trueButtons[ind].style.display = "none";
      }
    });
  });
};

answerFunction(trueButtons);
answerFunction(falseButtons);
