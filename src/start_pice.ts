import * as yup from "yup";

const first_page: HTMLDivElement = document.querySelector(".container")!;
const second_page: HTMLDivElement = document.querySelector(".second_page")!;
const userInput: HTMLInputElement = document.querySelector(".first")!;
const cardInput: HTMLInputElement = document.querySelector(".secondmn")!;
const error1: HTMLParagraphElement = document.querySelector(".error1")!;
const error2: HTMLParagraphElement = document.querySelector(".second")!;
const btn: HTMLButtonElement = document.querySelector(".btn")!;

let inputMessage: string = ""; // Declare the variables outside the event listener function
let cardMessage: string = "";

const schema = yup.object().shape({
  input: yup.number().required(),
  inputSecond: yup.number().required(),
  // userName: yup.string(),
  // email: yup.string().email().required(),
  // password: yup.string().required().min(8),
});

btn.addEventListener("click", () => {
  const formData = {
    input: userInput.value,
    inputSecond: cardInput.value,
  };

  schema
    .validate(formData)
    .then(() => {
      console.log(formData);
      // central();

    })
    .catch((error) => {
      userInput.value = "";
      cardInput.value = "";
      error1.innerText = "Error";
      error2.innerText = "Error";
      error1.style.display = "block";
      error2.style.display = "block";

      setTimeout(() => {
        error1.style.display = "none";
        error2.style.display = "none";
      }, 2000);

      console.log(error);


    });

  inputMessage = formData.input; // Assign the values to the variables
  cardMessage = formData.inputSecond;
});

// function central() {
//   first_page.style.display = "none";
// }

// function create_container() {
//   const table = document.createElement('div');
//   for (let i = 0; i < inputMessage; i++) {
//     const row = document.createElement('div');

//     for (let j = 0; j < cardMessage; j++) {
//       const cell = document.createElement('div');
//       // Set the content of each cell, e.g., cell.textContent = 'Cell Content';
//       row.appendChild(cell);
//     }

//     table.appendChild(row);
//   }
// }