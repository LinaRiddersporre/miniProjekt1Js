//hämta body
const body = document.querySelector('body');
body.style.textAlign = 'center';
let font = 0.5;
// skapa en loop som går 5 gånger
for(let i=0; i < 5; i++){
    //h1 text inuti som ändras vid varje interaktion i färgen blå
    const h1 = document.createElement('h1');
    body.appendChild(h1);
    h1.innerText = `Rad ${i+1}`;
    h1.style.fontSize = `${font}rem`;
    font = font+0.5;

    h1.style.backgroundColor = `hsl(${145+(12*i)}, 90%, 85%)`;
    h1.style.color = 'hsl(240, 90%, 70%)';
    //varje ruta ska även ha en board  samt text som ökar i storlek efter varje interaktion

}

const container = document.createElement('div'); 
body.appendChild(container);
container.style.display = `flex`;
container.style.border = `solid 1px black`;
container.style.justifyContent = 'space-around';
container.style.paddingTop = `45px`;
container.style.paddingBottom = `45px`;

const box1 = document.createElement('div');
container.appendChild(box1);
box1.style.height = `auto`;
box1.style.width = `auto`;
box1.style.border = `solid 8px hsl(240, 71%, 80%)`;


const box2 = document.createElement('div');
container.appendChild(box2);
box2.style.height = `auto`;
box2.style.width = `auto`;
box2.style.border = `solid 8px hsl(240, 71%, 80%)`;

const box3 = document.createElement('div');
container.appendChild(box3);
box3.style.height = `auto`;
box3.style.width = `auto`;
box3.style.border = `solid 8px hsl(240, 71%, 80%)`;


for(let i = 0; i<10; i++){
    const ul = document.createElement('ul');
    box1.appendChild(ul);
    const li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = i;
    ul.style.margin = 0;
    ul.style.paddingLeft = 0;
    li.style.paddingRight = '30px';
    li.style.listStyle = 'none';
    li.style.textAlign = 'left';
    box1.style.marginLeft = '20px';
    

    if(i === 4) {
        li.style.backgroundColor = 'hsl(240, 71%, 80%)';
        li.style.color = 'white';
    }
    else if(i%2 === 0) {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
    }
}

for(let i = 9; i>-1; i--){
    const ul = document.createElement('ul');
    box2.appendChild(ul);
    const li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = i;
    ul.style.margin = 0;
    ul.style.paddingLeft = 0;
    li.style.paddingRight = '17px';
    li.style.paddingLeft = '17px';
    li.style.listStyle = 'none';
    // li.style.textAlign = 'center';

    if(i === 8) {
        li.style.backgroundColor = 'hsl(240, 71%, 80%)';
        li.style.color = 'white';
    }
    else if(i%2 === 0) {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
    }
}

const number = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for(let i = 0; i<number.length; i++){
    const ul = document.createElement('ul');
    box3.appendChild(ul);
    const li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = number[i];
    ul.style.margin = 0;
    ul.style.paddingLeft = 0;
    li.style.paddingLeft = '15px';
    li.style.listStyle = 'none';
    box3.style.marginRight = '20px';
    

    if(i === 5) {
        li.style.backgroundColor = 'hsl(240, 71%, 80%)';  
    }
    else if(i%2 === 0) {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
    }
}


//en flexbox med border


//spacearound

//en div med border med siffror 0-9, vänsterställt

//en div med border med siffror 9-0, centrerat

//en div med border med string ett - tio, högerställt