'use strict';

let container = document.getElementById('container');
let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');

let rounds = 25;
let countClick = 0;

let leftIndex;
let middleIndex;
let rightIndex;


function Busmall(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.shown = 0;
    Busmall.allBus.push(this);
   
}

Busmall.allBus=[];


new Busmall('bag', 'img/bag.jpg'); //[0]

new Busmall('banana', 'img/banana.jpg'); //[1]

new Busmall('bathroom', 'img/bathroom.jpg'); //[2]

new Busmall('boots', 'img/boots.jpg'); //[3]

new Busmall('breakfast', 'img/breakfast.jpg'); //[4]

new Busmall('bubblegum', 'img/bubblegum.jpg'); //[5]

new Busmall('chair', 'img/chair.jpg'); //[6]

new Busmall('cthulhu', 'img/cthulhu.jpg'); //[7]

new Busmall('dog-duck', 'img/dog-duck.jpg'); //[8]

new Busmall('dragon', 'img/dragon.jpg'); //[9]

new Busmall('pen', 'img/pen.jpg'); //[10]

new Busmall('pet-sweep', 'img/pet-sweep.jpg'); //[11]

new Busmall('scissors', 'img/scissors.jpg'); //[12]

new Busmall('shark', 'img/shark.jpg'); //[13]

new Busmall('sweep', 'img/sweep.png'); //[14]

new Busmall('tauntaun', 'img/tauntaun.jpg'); //[15]

new Busmall('unicorn', 'img/unicorn.jpg'); //[16]

new Busmall('usb', 'img/usb.gif'); //[17]

new Busmall('water-can', 'img/water-can.jpg'); //[18]

new Busmall('wine-glass', 'img/wine-glass.jpg'); //[19]


function displayThreeImages(){

    leftIndex=generateRandomIndex();
    middleIndex=generateRandomIndex();
    rightIndex=generateRandomIndex();


while(leftIndex===rightIndex || leftIndex===middleIndex || rightIndex===middleIndex){

   leftIndex=generateRandomIndex();
   middleIndex=generateRandomIndex();
//    rightIndex=generateRandomIndex();

}


leftImage.setAttribute('src',Busmall.allBus[leftIndex].path);
Busmall.allBus[leftIndex].shown++;
middleImage.setAttribute('src',Busmall.allBus[middleIndex].path);
Busmall.allBus[middleIndex].shown++;

rightImage.setAttribute('src',Busmall.allBus[rightIndex].path);
Busmall.allBus[rightIndex].shown++;

// Busmall.allBus[leftIndex].path
}
displayThreeImages();



// Busmall.all = [];

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * Busmall.allBus.length);
    return randomIndex;

}





leftImage.addEventListener('click',handleClicking);
middleImage.addEventListener('click',handleClicking);
rightImage.addEventListener('click',handleClicking);

container.addEventListener('click',handleClicking);
let btnEl;
function handleClicking(event){
    countClick++;
    console.log(event.target.id);

    if (rounds >= countClick ){

if (event.target.id==='left-image'){

Busmall.allBus[leftIndex].votes++ ; 

}
else if (event.target.id==='middle-image'){

    Busmall.allBus[middleIndex].votes++;   
}

else if (event.target.id==='right-image'){
    Busmall.allBus[rightImage].votes++;  

}
else {
    return;
}


displayThreeImages();
    }

    else {
        console.log(Busmall.allBus);
btnEl = document.getElementById('btn');
btnEl.addEventListener('click',handleShowing); 

container.removeEventListener('click',handleClicking);
    }

}

function handleShowing(){

    gettingList();
    btnEl.removeEventListener('click',handleShowing); 
}

function gettingList(){
let ul = document.getElementById('unList');
for(let i = 0 ; i <Busmall.allBus.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Busmall.allBus[i].name} has ${Busmall.allBus[i].votes} Votes`;

}
}

// THEEND