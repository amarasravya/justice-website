const container1=document.querySelector(".container");
const careers=['frontend developer','web developer','freelancer','instructor'];
let careerindex=0;
let characterindex=0;
update();
function update(){
    container1.innerHTML=`<h1>I  am a ${careers[careerindex].slice(0,characterindex)}</h1>`;
    characterindex++;
    if (characterindex===careers[careerindex].length){
        characterindex++;
        careerindex++;
        characterindex=0;

    }
    if (careerindex===careers.length){
        careerindex=0
   
    }
    setTimeout(update,400);
    
}
