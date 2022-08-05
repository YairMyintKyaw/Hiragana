const imageElement = document.querySelector("img.image");
const randomButton =  document.querySelector("button.randomBtn");
const clickButton = document.querySelector(".inputContainer button")
const inputContainer= document.querySelector(".inputContainer");
const input1 = document.querySelectorAll(".inputContainer>input")[0];
const input2 = document.querySelectorAll(".inputContainer>input")[1];
const imageLink = [];
let totalImage = 46;
let startValue=1;
let endValue;
for(let i=0;i<totalImage;i++){
    imageLink.push("AkariHiragana/Slide"+(i+2)+".JPG");
}   

let temp=-1;
let index=-1;
randomButton.addEventListener("click",()=>{  
    index=Math.floor(Math.random()*totalImage)
    if(totalImage==0){
        imageElement.src="image/1.jpg";
    }else{
        imageElement.src=imageLink[index];
        imageLink.splice(index,1);
        totalImage--;
    }
    
})

input1.addEventListener("keyup",(e)=>{
    startValue = e.target.value;
    console.log(startValue)
})

input2.addEventListener("keyup",(e)=>{
    endValue = e.target.value
    console.log(endValue)
})

clickButton.addEventListener("click",()=>{
    if(isNaN(endValue) || isNaN(startValue)){
        console.log("lkj")
        window.navigator.vibrate(200);
        return;
    }
    window.navigator.vibrate(2000);
    totalImage=endValue-startValue+1;
    imageLink.splice(0,imageLink.length)
    for(let i=parseInt(startValue);i<=parseInt(endValue);i++){
        const link = "AkariHiragana/Slide"+(i+1)+".JPG"
        imageLink.push(link);
        console.log(link)
    }
    imageElement.src="image/Slide1.JPG";
})
