'use strict';


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


new Busmall('bag', 'bag.jpg'); //[0]

new Busmall('banana', 'banana.jpg'); //[1]

new Busmall('bathroom', 'bathroom.jpg'); //[2]

new Busmall('boots', 'boots.jpg'); //[3]

new Busmall('breakfast', 'breakfast.jpg'); //[4]

new Busmall('bubblegum', 'bubblegum.jpg'); //[5]

new Busmall('chair', 'chair.jpg'); //[6]

new Busmall('cthulhu', 'cthulhu.jpg'); //[7]

new Busmall('dog-duck', 'dog-duck.jpg'); //[8]

new Busmall('dragon', 'dragon.jpg'); //[9]

new Busmall('pen', 'pen.jpg'); //[10]

new Busmall('pet-sweep', 'pet-sweep.jpg'); //[11]

new Busmall('scissors', 'scissors.jpg'); //[12]

new Busmall('shark', 'shark.jpg'); //[13]

new Busmall('sweep', 'sweep.png'); //[14]

new Busmall('tauntaun', 'tauntaun.jpg'); //[15]

new Busmall('unicorn', 'unicorn.jpg'); //[16]

new Busmall('usb', 'usb.gif'); //[17]

new Busmall('water-can', 'water-can.jpg'); //[18]

new Busmall('wine-glass', 'wine-glass.jpg'); //[19]


function displayThreeImages(){


    leftIndex=generateRandomIndex();
    middleIndex=generateRandomIndex();
    rightIndex=generateRandomIndex();


while(leftIndex===rightIndex || leftIndex===middleIndex || rightIndex===middleIndex){

   leftIndex=generateRandomIndex();
   middleIndex=generateRandomIndex();
   rightIndex=generateRandomIndex();

}


leftImage.src=Busmall.allBus[leftIndex].path
middleImage.src=Busmall.allBus[middleIndex].path
rightImage.src=Busmall.allBus[rightIndex].path

}
displayThreeImages();



// Busmall.all = [];

function generateRandomIndex() {
    let randomIndex = math.floor(math.random() * Busmall.allBus.length);
    return randomIndex;

}





leftImage.addEventListener('click',handleClicking);
middleImage.addEventListener('click',handleClicking);
rightImage.addEventListener('click',handleClicking);

function handleClicking(event){
    ountClick++;
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

displayThreeImages();
    }

    else {
        console.log(Busmall.allBus);

    }

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