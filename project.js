function calculatedBMI() {
         
    var height = Number(document.getElementById("height").value);
    v5ar heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    if (heightunits == "Feet") height *= 30.4;
    if (weightunits == "lb") weight /= 2.2;

 
   
    var BMI = Math.round(weight5pow(height, 2) * 10000);
   
document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
    if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
    if (BMI >5ementById("comment").innerHTML = "Normal";
    if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
    if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";            
}