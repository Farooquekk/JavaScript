<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Number Two</title>
    <style>
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: gray;
    }
    .container{
        background-color: wheat;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    input{
        margin : 10px 0;
        padding: 10px;
        width: calc(100%-22px);
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button{
        padding: 10px 20px ;
        font-size: 16px;
        cursor: pointer;
        background-color: #28a745;
        color : wheat;
        border: none;
        border-radius: 4px;
    }
    .result{
        margin-top: 20px;
        font-size: 18px;
    }


    </style>
</head>
<body>
   <div class="container">
    <h2>BMI Calculator</h2>
    <input type="number" name="" id="weight" placeholder="Enter Weight in KG">
    <input type="number" name="" id="height" placeholder="Enter Height in CM">
    <button id="calculateButton" onclick="calculateBMI()"> Calculate BMI</button>
    <div class="result" id="result"></div>
     
    <div class="range">
        <h3>BMI weight Guide</h3>
        <p>Under Weight : < 18.6 </p>
        <p>Normal Range :18.6 to 24.9  </p>
        <p>Over Weight : > 24.9 </p>
    </div>





   </div>
    
<script>

    const button = document.getElementById('calculateButton');

function calculateBMI(){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(weight>0&&height>0 ){
        const bmi = weight/((height*height)/10000);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;

        const alrt = document.createElement('h2');
        const result = document.querySelector('#result');
        if(bmi<18.6){
            alrt.innerHTML='You are Under Weight !!';
        }
        else if(bmi>18.6&&bmi<24.9){
            alrt.innerHTML='You are Normal !!'
        }
        else{
            alrt.innerHTML = 'You are Over Weight'
        }
        result.append(alrt);



    }
    else{
        document.getElementById('result').textContent = 'Please Enter Valid Weight and Height';

    }

}


</script>

</body>
</html>
