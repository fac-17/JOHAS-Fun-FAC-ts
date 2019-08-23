const answers = Array.from(document.querySelectorAll(".answer"));
const trueButtons = Array.from(document.querySelectorAll(".button-true"));
const falseButtons = Array.from(document.querySelectorAll(".button-false"));
let scoreContainer = document.querySelector(".score");
let factsLogo = document.querySelector("#facts-logo");
let count = 0;

answers.forEach(answer => {
  answer.style.display = "none";
});

// answerFunction = buttonsArray => {
//   buttonsArray.forEach((btn, ind) => {
//     btn.addEventListener("click", () => {
//       let answerCapital =
//         answers[ind].innerText.charAt(0).toUpperCase() +
//         answers[ind].innerText.slice(1);

//       answers[ind].style.display = "block";
//       answers[ind].innerText = `Answer is: ${answerCapital}`;

//       if (
//         btn.textContent === "True" &&
//         answers[ind].textContent.includes("True")
//       ) {
//         count += 1;
//         scoreContainer.textContent = `Score= ${count}`;
//         btn.style.display = "none";
//         falseButtons[ind].style.display = "none";
//       } else if (
//         btn.textContent === "False" &&
//         answers[ind].textContent.includes("False")
//       ) {
//         count += 1;
//         scoreContainer.textContent = `Score= ${count}`;
//         btn.style.display = "none";
//         trueButtons[ind].style.display = "none";
//       } else {
//         falseButtons[ind].style.display = "none";
//         trueButtons[ind].style.display = "none";
//       }
//     });
//   });
// };

trueButtons.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    let answerCapital =
      answers[ind].innerText.charAt(0).toUpperCase() +
      answers[ind].innerText.slice(1);

    answers[ind].style.display = "block";
    answers[ind].innerText = `Answer is: ${answerCapital}`;
    console.log(answers[ind].textContent);
    if (answers[ind].textContent.includes("True")) {
      count += 1;
      scoreContainer.textContent = `Score= ${count}`;
      btn.style.display = "none";
      falseButtons[ind].style.display = "none";
    } else {
      falseButtons[ind].style.display = "none";
      trueButtons[ind].style.display = "none";
    }
  });
});

falseButtons.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    let answerCapital =
      answers[ind].innerText.charAt(0).toUpperCase() +
      answers[ind].innerText.slice(1);

    answers[ind].style.display = "block";
    answers[ind].innerText = `Answer is: ${answerCapital}`;

    if (answers[ind].textContent === "false") {
      count += 1;
      scoreContainer.textContent = `Score= ${count}`;
      btn.style.display = "none";
      falseButtons[ind].style.display = "none";
    } else {
      falseButtons[ind].style.display = "none";
      trueButtons[ind].style.display = "none";
    }
  });
});

// answerFunction(trueButtons);
// answerFunction(falseButtons);

//Add custom error fields for input

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const statement = document.querySelector("#statement");

  if (name.validity.valueMissing) {
    name.setCustomValidity("Please enter your name, darling!");
  } else if (!name.validity.valueMissing) {
    name.setCustomValidity("");
  }

  if (statement.validity.valueMissing) {
    statement.setCustomValidity("Fill in your fun FACt, don't be a bore!");
  } else if (!name.validity.valueMissing) {
    statement.setCustomValidity("");
  }
});
