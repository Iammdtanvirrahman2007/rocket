/* ==========================================================
   Rocket Builder Simulator
   Developed by Md Tanvir Rahman
========================================================== */

console.clear();

console.log(`
========================================

🚀 Rocket Builder Simulator

Developed by

Md Tanvir Rahman

========================================
`);

/* ==========================================
        Floating Rocket Animation
========================================== */

const rocket = document.querySelector(".rocket-preview");

let time = 0;

function animateRocket(){

    time += 0.02;

    const y = Math.sin(time) * 15;

    const rotate = Math.sin(time * .6) * 3;

    rocket.style.transform =
        `translateY(${y}px) rotate(${rotate}deg)`;

    requestAnimationFrame(animateRocket);

}

animateRocket();

/* ==========================================
        Dashboard Counter Animation
========================================== */

const counters = document.querySelectorAll(".card span");

function animateCounter(el,target){

    let value = 0;

    const speed = Math.max(1,Math.ceil(target/60));

    function update(){

        value += speed;

        if(value >= target){

            value = target;

        }

        if(el.innerText.includes("m")){

            el.innerText = value + " m";

        }

        else{

            el.innerText = value;

        }

        if(value < target){

            requestAnimationFrame(update);

        }

    }

    update();

}

const counterValues=[

12,

3560,

5,

2

];

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            counters.forEach((c,i)=>{

                animateCounter(c,counterValues[i]);

            });

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".dashboard"));

/* ==========================================
            Card Hover Glow
========================================== */

const cards=document.querySelectorAll(".card,.quick-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=`
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(76,201,255,.18),
        rgba(12,22,40,.75) 60%
        )`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(12,22,40,.65)";

    });

});

/* ==========================================
        Button Ripple Effect
========================================== */

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.clientX-rect.left-size/2+"px";

circle.style.top=e.clientY-rect.top-size/2+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});

/* ==========================================
        Navbar Active Button
========================================== */

const navButtons=document.querySelectorAll(".nav-btn");

navButtons.forEach(btn=>{

btn.onclick=()=>{

navButtons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

};

});

/* ==========================================
            Hero Fade Animation
========================================== */

const hero=document.querySelector(".hero");

hero.style.opacity=0;

hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity=1;

hero.style.transform="translateY(0px)";

},300);

/* ==========================================
            Mouse Parallax
========================================== */

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

rocket.parentElement.style.transform=
`translate(${x}px,${y}px)`;

});

/* ==========================================
        Temporary Button Actions
========================================== */

document.querySelector(".primary-btn").onclick=()=>{

alert("🚀 Hangar Page Coming Next");

};

document.querySelector(".secondary-btn").onclick=()=>{

alert("📁 No Saved Rocket Yet");

};

console.log("Home Page Loaded Successfully");
