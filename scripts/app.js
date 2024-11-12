let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");
let btnChange11 = document.getElementById("btnChange11");
let btnChange12 = document.getElementById("btnChange12");

let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5");
let affectMe6 = document.getElementById("affectMe6");
let affectMe7 = document.getElementById("affectMe7");
let affectMe8 = document.getElementById("affectMe8");
let affectMe9 = document.getElementById("affectMe9");
let affectMe10 = document.getElementById("affectMe10");
let affectMe11 = document.getElementById("affectMe11");
let affectMe12 = document.getElementById("affectMe12");


btnChange1.addEventListener("click", function(event){
    //alert("Button Clicked!");
    affectMe1.innerText = "Hi there!";
});

btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "You're just gonna click these buttons?";
    affectMe2.className = "firststyle " + "fadeIn";
})

btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "WE ALL FLOAT DOWN HERE!!!!!!";
    affectMe3.className = "floater";
})

btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "You think Isaiah could read this?";
    affectMe4.className = "secondstyle " + "spinner";
})

btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "BIG TEXT";
    affectMe5.className = "thirdstyle " + "wiggle";
})

btnChange6.addEventListener("click", function(event){
    affectMe6.innerText = "You clicked teh button";
    affectMe6.className = "zoomer " + "fourthstyle";
})

btnChange7.addEventListener("click", function(event){
    affectMe7.innerText = "This is like a heartbeat.";
    affectMe7.className = "fifthstyle " + "heartbeat";
})

btnChange8.addEventListener("click", function(event){
    affectMe8.innerText = "You're at rock bottom";
    affectMe8.className = "sixthstyle " + "slideDown";
})

btnChange9.addEventListener("click", function(event){
    affectMe9.innerText = "Slide to the right!";
    affectMe9.className = "seventhstyle " + "slideRight";
})

btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "Get Rolled";
    affectMe10.className = "rotateInRight";
})

btnChange11.addEventListener("click", function(event){
    affectMe11.innerText = "This is getting messy now...";
    affectMe11.className = "slideLeft " + "eighthstyle";
})

btnChange12.addEventListener("click", function(event){
    affectMe12.innerText = "It's actually called an Aileron Roll";
    affectMe12.className = "ninthstyle " + "barrelRoll";
})