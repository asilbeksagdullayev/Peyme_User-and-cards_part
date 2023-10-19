import * as yup from "yup";

const userInput:HTMLInputElement = document.querySelector(".first")!;
const error1:HTMLParagraphElement = document.querySelector(".error1")!;
const btn:HTMLButtonElement = document.querySelector(".btn")!;



const schema = yup.object().shape({
 input: yup.number().required(),
// userName: yup.string(),
// email: yup.string().email().required(),
// password: yup.string().required().min(8),
});

btn.addEventListener("click", () => {
 const formData = {
// email: emailInput.value,
//    password: passwordInput.value,
input:userInput.value
 };
 schema
 .validate(formData)
 .then(() => {
   // console.log(formData);
   // error1.innerText = "Please wait...";
   // stop.style.display ="block";
   // emailInput.value = "";
   // passwordInput.value = "";
   // setTimeout(() => {
   //   stop.style.display ="none";
   //   second_page.style.display ='block';
   // }, 3000);


 })
 ///Al_Dicooo
 .catch((error) => {
   userInput.value ="";
   error1.innerText = "Error";
   error1.style.display = "block";


   setTimeout(() => {
       error1.style.display = "none";



     }, 2000);
     

     console.log(error);

     // const hacer = formData;

    });
   });