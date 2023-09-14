var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var BMI, height, weight;

function myFunction() {
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    alert("BMI ideal kamu adalah :" + BMI);
}