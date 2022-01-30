let showTicket = document.getElementById("show_ticket");
showTicket.style.display = "none";
let alertData = document.getElementById("alert_data");
alertData.style.display = "none";
let alertName = document.getElementById("alert_name");
alertName.style.display = "none";
let alertSurname = document.getElementById("alert_surname");
alertSurname.style.display = "none";
let alertKm = document.getElementById("alert_km");
alertKm.style.display = "none";
let alertAge = document.getElementById("alert_age");
alertAge.style.display = "none";

let segnaposto = document.getElementById("segnaposto");

let inputName = document.getElementById("name");
inputName.addEventListener("click", function () {
    alertData.style.display = "none";
    alertName.style.display = "none";
    if (showTicket.style.display == "block")
    segnaposto.style.display = "block";
    showTicket.style.display = "none";
});

let inputSurname = document.getElementById("surname");
inputSurname.addEventListener("click", function () {
    alertData.style.display = "none";
    alertSurname.style.display = "none";
    if (showTicket.style.display == "block")
    segnaposto.style.display = "block";
    showTicket.style.display = "none";
});

let inputKm = document.getElementById("km");
inputKm.addEventListener("click", function () {
    alertData.style.display = "none";
    alertKm.style.display = "none";
    if (showTicket.style.display == "block")
    segnaposto.style.display = "block";
    showTicket.style.display = "none";
});

let inputAge = document.getElementById("age");
inputAge.addEventListener("click", function () {
    alertData.style.display = "none";
    alertAge.style.display = "none";
    if (showTicket.style.display == "block")
    segnaposto.style.display = "block";
    showTicket.style.display = "none";
});

function getPassenger() { 
   
    let passenger = document.getElementById("name").value;
    let passegereName = passenger.charAt(0).toUpperCase() + passenger.slice(1);
    let ticketName = document.getElementById("passegerName");
    ticketName.innerHTML = passegereName;

    let passengerS = document.getElementById("surname").value;
    let passegerSurname = passengerS.charAt(0).toUpperCase() + passengerS.slice(1);
    let ticketSurame = document.getElementById("passegerSurname");
    ticketSurame.innerHTML = passegerSurname;

    let km = document.getElementById("km").value;
    let ticketKm = document.getElementById("passegerKm");
    ticketKm.innerHTML = km;

    let age = document.getElementById("age").value;
    let ticketAge = document.getElementById("passegerAge");
    ticketAge.innerHTML = age;

    if (passenger == "" || passengerS == "" || km == "" || age == "") {
        alertData.style.display = "block";
    } else {
        if (!isNaN(passenger) && !isNaN(passengerS)) {
            alertName.style.display = "block";
            alertSurname.style.display = "block";
        } else if (!isNaN(passenger)) {
            alertName.style.display = "block";
        } else if (!isNaN(passengerS)) { 
            alertSurname.style.display = "block";
        } else if (isNaN(km) && isNaN(age)) {
            alertKm.style.display = "block";
            alertAge.style.display = "block"; 
        } else if (isNaN(km)) {
            alertKm.style.display = "block"; 
        } else if (isNaN(age)) {
            alertAge.style.display = "block";
        } else {
            if (km > 0) {
                let ticketPrice = 0.11 * km;
                let underDiscount = (ticketPrice * 20) / 100;
                let overDiscount= (ticketPrice * 40) / 100;
                if (age < 18) {
                    ticketPrice = ticketPrice - underDiscount;
                    document.getElementById("ticketPrice").innerHTML = "Your ticket price is: " + ticketPrice.toFixed(2) + "$, with a discount of 20% because your age is under 18 years old";
                } else if (age >= 18 && age < 65) {
                    document.getElementById("ticketPrice").innerHTML = "Your ticket price is: " + ticketPrice.toFixed(2) + "$; this is the full price because your age is between 18 and 65";
                } else if (age >= 65) {
                    ticketPrice = ticketPrice - overDiscount;
                    document.getElementById("ticketPrice").innerHTML = "Your ticket price is: " + ticketPrice.toFixed(2) + "$, with a discount of 40% because your age is over 65 years old";
                }
                segnaposto.style.display = "none";
                showTicket.style.display = "block";
            } else {
                alert("Your travel can't start with 0 km...");
            }
        }
    }
}




































