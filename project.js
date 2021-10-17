function calculatedBMI() {
         
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;

 
    var BMI = weight / Math.pow(height, 2);
    var BMI = Math.round(weight / Math.pow(height, 2) * 10000);
   
document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
    if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
    if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
    if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
    if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";            
}