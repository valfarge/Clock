const hourEl = document.querySelector(".hour") //const pour hour
const minuteEl = document.querySelector(".minute") //const pour minute
const secondEl = document.querySelector(".second") //const pour second

function updateClock(){ //creation fonction 
    const currentDate = new Date(); //const avec ne date
    setTimeout(updateClock, 1000); //le setTimout avec la fonction et les 1000sec
    const hour = currentDate.getHours(); // la const avec le currentdate .getHours
    const minute = currentDate.getMinutes(); // la const avec le currentdate .getminute
    const second = currentDate.getSeconds(); // la const avec le currentdate .getSecond

    const hourDeg =(hour / 12) * 360; // creation const = hour /12 car 12 nombre X360jours
    hourEl.style.transform = `rotate(${hourDeg}deg)`; //hourEl style transform 'rotate' de ma variable hourDeg

    const minuteDeg =(minute/ 60) * 360;// creation const = hour /12 car 12 nombre X360jours
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg =(second / 60) * 360; // creation const = hour /12 car 12 nombre X360jours
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();