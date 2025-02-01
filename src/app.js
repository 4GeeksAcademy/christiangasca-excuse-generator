/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird", "My Avenger"];
  let action = ["ate", "peed", "crushed", "broke", "exploded"];
  let what = ["my homework", "my phone", "the car", "the mall", "the class"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  let randomExcuse =
    who[getRandomIndex(who)] +
    " " +
    action[getRandomIndex(action)] +
    " " +
    what[getRandomIndex(what)] +
    " " +
    when[getRandomIndex(when)];
  let excuseElement = document.querySelector("#excuse");
  excuseElement.innerHTML = randomExcuse;
};
