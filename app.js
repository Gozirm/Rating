"use strict";

let buttons = document.querySelectorAll(".num");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
  });
});

let rates = document.querySelectorAll('[id^="rate"]');
let btn = document.querySelector("button");
let select = document.querySelector("#select");
let selectedRate = null;

// Add an event listener to each p tag to track the selected rate
rates.forEach((rate) => {
  rate.addEventListener("click", (event) => {
    selectedRate = event.target.textContent;
  });
});

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedRate = urlParams.get('rate');
        document.querySelector("#select").textContent = `You rate us ${selectedRate} out of 5`;
      }
  });
  btn.addEventListener("click", () => {
    if (selectedRate !== null) {
      let url = `Thanks.html?rate=${selectedRate}`;
      window.location.href = url;
    } else {
      console.log(`No Input was made`);
    }
  });
// On the Thanks.html page, update the #select element
