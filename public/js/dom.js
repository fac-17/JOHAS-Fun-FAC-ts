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




//Add custom error fields for input

const submit = document.querySelector("#submit");


submit.addEventListener('click', () => {
  const name = document.querySelector('#name');
  const statement= document.querySelector('#statement');

  console.log(name.validity.valueMissing);

  if(name.validity.valueMissing){
    name.setCustomValidity('Please enter your name, darling!');
} else if(!name.validity.valueMissing) {
 name.setCustomValidity("");
};

if(statement.validity.valueMissing){
  statement.setCustomValidity("Fill in your fun FACt, don't be a bore!");
} else if(!name.validity.valueMissing){
  statement.setCustomValidity("");
};

});
