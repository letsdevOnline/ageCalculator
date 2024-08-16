const arrow = document.querySelector(".arrow");
const dayInput = document.querySelector("#dd");
const monthInput = document.querySelector("#mm");
const yearInput = document.querySelector("#yy");
const empty = document.querySelectorAll(".empty");
const allInputs = document.querySelectorAll(".input");
const label = document.querySelectorAll("label");
const small = document.querySelectorAll("small");
const yearsresult = document.querySelector(".yearsLived");
const monthsresult = document.querySelector(".monthsLived");
const daysresult = document.querySelector(".daysLived");

function onClickArrow() {
   const day = Math.abs(dayInput.value);
   const month = Math.abs(monthInput.value);
   const year = Math.abs(yearInput.value);

   // ------------------ if the form is empty

   if (day == "" || month == "" || year == "") {
      empty.forEach((e) => {
         e.style.display = "block";
         allInputs.forEach((event) => {
            event.style.border = "1px solid red";
         });
         label.forEach((e) => {
            e.style.color = "red";
         });
         return;
      });
   } else {
      empty.forEach((e) => {
         e.style.display = "none";
         allInputs.forEach((event) => {
            event.style.border = "1px solid hsl(0, 0%, 86%)";
         });
         label.forEach((e) => {
            e.style.color = "hsl(0, 1%, 44%)";
         });
      });
   }

   //------------------------------------ calculation of age----------
   const pastDate = new Date(year, month - 1, day);
   const date = new Date();
   const totalDays = (date - pastDate) / (1000 * 60 * 60 * 24);

   // calcule years lived
   const yearsLived = Math.floor(totalDays / 365.25);
   const remainingDaysAfterYears = totalDays - yearsLived * 365.25;

   // calcule Months
   const monthsLived = Math.floor(remainingDaysAfterYears / 30);
   const remainingDaysAftermonths = remainingDaysAfterYears - monthsLived * 30;

   // calcule days
   const daysLived = Math.floor(remainingDaysAftermonths);

   // -----------if month and year are invalid

   if (day > 31 || month > 12 || year > 2024) {
      small.forEach((e) => {
         e.style.display = "block";
         return;
      });
   } else {
      small.forEach((e) => {
         e.style.display = "none";
         yearsresult.innerHTML = `${yearsLived}`;
         monthsresult.innerHTML = `${monthsLived}`;
         daysresult.innerHTML = `${daysLived}`;
      });
   }
}
arrow.addEventListener("click", onClickArrow);
