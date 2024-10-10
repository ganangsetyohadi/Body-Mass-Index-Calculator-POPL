function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    if (!weight || !heightCm) {
      document.getElementById("result").innerHTML =
        "Harap masukkan berat dan tinggi badan yang valid.";
      return;
    }
  
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let bmiCategory = "";
  
    if (bmi < 16) {
      bmiCategory = "Severe Thinness";
    } else if (bmi < 17) {
      bmiCategory = "Moderate Thinness";
    } else if (bmi < 18.5) {
      bmiCategory = "Mild Thinness";
    } else if (bmi < 25) {
      bmiCategory = "Normal";
    } else if (bmi < 30) {
      bmiCategory = "Overweight";
    } else if (bmi < 35) {
      bmiCategory = "Obese Class I";
    } else if (bmi < 40) {
      bmiCategory = "Obese Class II";
    } else {
      bmiCategory = "Obese Class III";
    }
  
    document.getElementById("result").innerHTML =
      "BMI Anda: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
  }
  