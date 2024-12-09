
// console.log(document.getElementsByClassName('frontItemClass')[0]);

let size = document.getElementById("size");
let planetName = document.getElementById("name");
let distance = document.getElementById("distance");

function showPlanet(){
    let planet = $(".frontItemClass").attr("alt");
    switch(planet){
        case "mercury": console.log("mercury info");
            updateInfo(0);
        break;
        case "venus": console.log("venus info");
            updateInfo(1);
            break;
        case "earth": console.log("earth info");
            updateInfo(2);
        break;
        case "mars": console.log("mars info");
            updateInfo(3);
        break;
        case "jupiter": console.log("jupiter info");
            updateInfo(4);
        break;
        case "saturn": console.log("saturn info");
            updateInfo(5);
        break;
        case "uranus": console.log("uranus info");
            updateInfo(6);
        break;
        case "neptune": console.log("neptune info");
            updateInfo(7);
        break;
        case "pluto": console.log("pluto info");
            updateInfo(8);
        break;
        default: console.log("didn't work");
    }
}

let planetArray = [
    {"name":"Mercury", 
        "distance":"36 million miles",
        "size":"3,032 mile diameter"},
    {"name":"Venus", 
        "distance":"26 million miles",
        "size":"7,521 mile diameter"},
    {"name":"Earth", 
        "distance":"93 million miles",
        "size":"7,926 mile diameter"},
    {"name":"Mars", 
        "distance":"49 million miles",
        "size":"4,221 mile diameter"},
    {"name":"Jupiter", 
        "distance":"483.7 million miles",
        "size":"142,984 mile diameter"},
    {"name":"Saturn", 
        "distance":"889.8 million miles",
        "size":"74,898 mile diameter"},
    {"name":"Uranus", 
        "distance":"1.8 billion miles",
        "size":"31,763 mile diameter"},
    {"name":"Neptune", 
        "distance":"2.8 billion miles",
        "size":"30,775 mile diameter"},
    {"name":"Pluto", 
        "distance":"3.67 billion miles",
        "size":"1,477 mile diameter"}

]

function updateInfo(place){
    planetName.innerHTML = planetArray[place].name;
    distance.innerHTML = planetArray[place].distance;
    size.innerHTML = planetArray[place].size;
}

function spin(index){
    $("#carousel").data("carousel").goTo( index );
}