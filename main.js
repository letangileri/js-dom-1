let buttonSwitchLamp = document.getElementById("switch-lamp");

// buttonSwitchLamp.addEventListener ('click', function (){
//     let lampOff = document.getElementById('lamp');
//     // console.log(lampOff.src);
//     // console.log(lampOff.src);
//     // console.log(buttonSwitchLamp.innerText);
//     let buttonText = buttonSwitchLamp.innerText;
//     // console.log(typeof buttonText);
    
//     if(buttonText.includes("Accendi")){
//         lampOff.src = "./img/yellow_lamp.png"    
//         // console.log(buttonText);
//         // console.log(buttonSwitchLamp.textContent = "Spegni");  
  
//         buttonSwitchLamp.textContent = "Spegni";     
//     } else {
//         buttonSwitchLamp.textContent = "Accendi";     
//         lampOff.src = "./img/white_lamp.png";
//     }

// })


//il corpo della funzione è uguale -- funzione di callback anonima
function getSwitch () {
    let lampOff = document.getElementById('lamp');
    // console.log(lampOff.src);
    lampOff.src = "./img/yellow_lamp.png"    
    // console.log(lampOff.src);
    // console.log(buttonSwitchLamp.innerText);
    let buttonText = buttonSwitchLamp.innerText;
    // console.log(typeof buttonText);
    
    if(buttonText.includes("Accendi")){
        lampOff.src = "./img/yellow_lamp.png"    
        // console.log(buttonText);
        // console.log(buttonSwitchLamp.textContent = "Spegni");  
  
        buttonSwitchLamp.textContent = "Spegni";     
    } else {
        buttonSwitchLamp.textContent = "Accendi";     
        lampOff.src = "./img/white_lamp.png";
    }
}

buttonSwitchLamp.addEventListener('click', getSwitch);