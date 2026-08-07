const inputColor=document.querySelectorAll("input")
let range=0
const color=document.querySelectorAll(".item-color")
const span=document.querySelectorAll("span")
const colorBox=document.querySelector(".rgba-box")
const colorRgba=document.querySelectorAll(".allcolor")




for(let i=0; i<color.length; i++){
    color[0].style.backgroundColor="rgb(128,0,0)"
    color[1].style.backgroundColor="rgb(0,128,0)"
    color[2].style.backgroundColor="rgb(0,0,128)"
    color[3].style.backgroundColor="rgba(0,0,0,.5)"
}

for(let i=0; i<colorRgba.length; i++){
    colorRgba[i].textContent="128"
    colorRgba[3].textContent=".5"
}
for(let i=0; i<span.length; i++){
    span[i].textContent="128"
    span[3].textContent=".5"
}


colorBox.style.backgroundColor="rgba(128,128,128,.5)"



for(let i=0; i<inputColor.length; i++){
        inputColor[0].addEventListener("input",function(){
        colorChange1()
        
    })

    inputColor[1].addEventListener("input",function(){
        colorChange2()
       
    })



      inputColor[2].addEventListener("input",function(){
        colorChange3()
       
    })


        inputColor[3].addEventListener("input",function(){
        colorChange4()
        
    })
    
}

function colorChange1(){
    for(let i=0; i<color.length; i++){
            color[0].style.backgroundColor=`rgb(${inputColor[0].value},${range},${range})`
        }
        for(let i=0; i<span.length; i++){
            span[0].textContent=inputColor[0].value
        }
          for(let i=0; i<colorRgba.length; i++){
            colorRgba[0].textContent=inputColor[0].value
           sectionColor() 
        }
}

function colorChange2(){
    for(let i=0; i<color.length; i++){
            color[1].style.backgroundColor=`rgb(${range},${inputColor[1].value},${range})`
        }
          for(let i=0; i<span.length; i++){
            span[1].textContent=inputColor[1].value
        }
            for(let i=0; i<colorRgba.length; i++){
            colorRgba[1].textContent=inputColor[1].value
             sectionColor()
            
        }
}

function colorChange3(){
    for(let i=0; i<color.length; i++){
            color[2].style.backgroundColor=`rgb(${range},${range},${inputColor[2].value})`
        }
          for(let i=0; i<span.length; i++){
            span[2].textContent=inputColor[2].value
        }
            for(let i=0; i<colorRgba.length; i++){
            colorRgba[2].textContent=inputColor[2].value
            sectionColor()
        }
}

function colorChange4(){
    for(let i=0; i<color.length; i++){
            color[3].style.backgroundColor=`rgba(${range},${range},${range},${inputColor[3].value})`
        }
          for(let i=0; i<span.length; i++){
            span[3].textContent=inputColor[3].value
        }
            for(let i=0; i<colorRgba.length; i++){
            colorRgba[3].textContent=inputColor[3].value
          sectionColor()
        }
}
function sectionColor(){
    colorBox.style.backgroundColor=`rgba(${inputColor[0].value},${inputColor[1].value},${inputColor[2].value},${inputColor[3].value})`
    }
