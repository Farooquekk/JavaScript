<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sixth Project</title>
    <style>
     body{
        background-color: #212121;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
     }
     #insert{
        height: 150px;
        width: 150px;
        
        background-color: greenyellow;
        color: black;
        border: 4px solid white;
        
     }

    </style>
</head>
<body>
    <div id="insert"></div>
    
</body>
<script>

const insert = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    
    <div class = 'color'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
                </tr>

                <tr>
                    <td>${e.key===''?'Space':e.key }</td>
                    <td>${ e.keyCode }</td>
                    <td>${ e.code }</td>
                    </tr>

                    </table>
                    </div>

    
    
    
    
    `;
})


</script>
</html>
