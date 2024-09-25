
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <style>
     .container{
        background-image: url("https://static.vecteezy.com/system/resources/previews/008/311/935/non_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg");
        width: 100vw;
        height: 100vh;
        background-color:gray;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;

     }
     .clock{
        height: 100px;
        width: 100px;
        display: flex;
        text-align: center;
        justify-content: center;
        background-color: orangered;
        border: 4px solid black;
        color: wheat;
        font-size: larger;
        font-weight: bolder;
     }


    </style>
</head>
<body>

    <div class="container">

        <div class="clock" id="clock"> </div>
    </div>


    <script>

        const clock = document.getElementById('clock');
        setInterval(function(){
         let time = new Date();
         console.log(time);
         clock.innerHTML = time.toLocaleTimeString();
          
        },1000)
    </script>
    
</body>
</html>
