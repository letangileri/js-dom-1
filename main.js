const switchLamp = document.getElementById("switch-lamp");

switchLamp.addEventListener ('click', function (){
    let lampOff = document.getElementById('lamp');
    console.log(lampOff.src);
    lampOff.src = "../img/yellow_lamp.png"    
    console.log(lampOff.src);

})