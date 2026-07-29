import { rocketParts } from "./partsData.js";

const rocket=[];

export function addPart(type){

    rocket.push(rocketParts[type]);

    renderRocket();

    updateStats();

}

function renderRocket(){

    const holder=document.getElementById("rocketBuilder");

    if(!holder) return;

    let html="<svg viewBox='0 0 140 700'>";

    let y=650;

    [...rocket].reverse().forEach(part=>{

        y-=part.height;

        html+=`<g transform="translate(0,${y})">

        ${part.svg}

        </g>`;

    });

    html+="</svg>";

    holder.innerHTML=html;

}

function updateStats(){

    let mass=0;

    let fuel=0;

    let thrust=0;

    let height=0;

    let cost=0;

    rocket.forEach(part=>{

        mass+=part.mass;

        fuel+=part.fuel;

        thrust+=part.thrust;

        height+=part.height;

        cost+=part.cost;

    });

    document.getElementById("heightValue").textContent=height+" cm";

    document.getElementById("massValue").textContent=mass+" kg";

    document.getElementById("fuelValue").textContent=fuel+" L";

    document.getElementById("thrustValue").textContent=thrust+" kN";

    document.getElementById("budgetValue").textContent="$"+cost;

    const twr=(mass===0)?0:(thrust/(mass*9.81)).toFixed(2);

    document.getElementById("twrValue").textContent=twr;

}
