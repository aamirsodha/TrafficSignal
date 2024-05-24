var trafficSignal = document.querySelector('.traffic-signal');
var lights = document.querySelectorAll('.light');
var road = document.getElementById('main');
var carposition = 45;
var car = document.getElementById('mycar');
var signalGreen = false;



function move(type){
    
    if(type === "right")
        {
            if(carposition <= 70)
                {
                    carposition += 2;
                    car.style.left = carposition+"%";
                }
        }
    else if(type === "left")
        {
            if(carposition >= 20)
                {
                    carposition -= 2;
                    car.style.left = carposition+"%";
                }
        }
}
function movecar(event){
    if(signalGreen === true)
        {
            if(event.key === "ArrowRight")
                {
                    move("right")
                }
            else if(event.key === "ArrowLeft")
                {
                    move("left")
                }
        }
}
window.addEventListener('keydown',movecar)
trafficSignal.addEventListener('click', (e) => {
    if (e.target.classList.contains('light')) {
        lights.forEach(light => light.classList.remove('active'));
        e.target.classList.add('active');
        
        if (e.target.classList.contains('green')) {
            road.style.backgroundImage = "url(background-moving.gif)";
            signalGreen = true;
        } else {
            road.style.backgroundImage = "url(background.jpg)";
            signalGreen = false;
        }
    }
});
