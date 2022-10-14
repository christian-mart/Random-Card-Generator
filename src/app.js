/* eslint-disable */
import "./style.css";

let randomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let randomSuit = () => {
  let suits = ["&#9829", "&#9827", "&#9824", "&#9830"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
let icon = randomSuit();
if (icon === "&#9829" || icon === "&#9830") {
  document.querySelector("#top-suit").style.color = "red";
  document.querySelector("#bottom-suit").style.color = "red";
}
window.onload = function() {
  //write your code here
  document.querySelector("#number").innerHTML = randomNumber();
  document.querySelector("#top-suit").innerHTML = icon;
  document.querySelector("#bottom-suit").innerHTML = icon;
};
