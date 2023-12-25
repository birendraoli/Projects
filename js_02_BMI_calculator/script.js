const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // this is used to stop default action

    const height = parseInt(document.getElementById("height").value); // parseInt is used to change fi string value is present convert it in intiger
    const weight = parseInt(document.getElementById("weight").value);
    const output = document.getElementById("result");

    if (height === "" || height <= 0 || isNaN(height)) {
        output.innerHTML = `Please Enter Valid Height`;
    }
    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        output.innerHTML = `Please enter a valid weight`
    } else {
        const calculatetBmi = (weight / ((height * height) / 10000)).toFixed(2)
        //output.innerHTML = calculatetBmi;
        if (calculatetBmi < 18.6) {
            output.innerHTML = `Under Weight : BMI is - ${calculatetBmi}`
            output.style.color = "red"
        }
        if (calculatetBmi >= 18.7 && calculatetBmi <= 24.9) {
            output.innerHTML = `Normal : BMI is - ${calculatetBmi}`
            output.style.color = "green"
        }
        if (calculatetBmi >= 25) {
            output.innerHTML = `Over Weight : BMI is - ${calculatetBmi}`
            output.style.color = "red"
        }
    }
})


