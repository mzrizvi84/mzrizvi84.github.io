var billamt = document.querySelector("#billamt");
var calbutton = document.querySelector("#calculate");
var numpeople = document.querySelector("#numpeople");
var servquality = document.querySelector("#serviceQuality")

document.querySelector("#totaltip").style.display = "none";
document.querySelector("#each").style.display = "none";

document.querySelector("#totalbill").style.display = "none";
document.querySelector("#each-bill").style.display = "none";

function showText() {

    if (billamt.value === " " || servquality.value === 0) {
        alert("Please enter a valid value!");
        return;
    
    }

    if (numpeople.value < 1) {
        alert("Please enter a valid value");
        return;
    }
    
    var tipamt = Number(billamt.value) * servquality.value;
    // var total = Number(billamt.value) + tipamt;
    var eachamt = tipamt/numpeople.value;
    // console.log(total);

    eachbillamt = billamt.value / numpeople.value;
    
    document.querySelector("#totaltip").style.display = "block";
    document.querySelector("#each").style.display = "block";
    
    document.querySelector("#tip").innerHTML = eachamt.toFixed(2);
    console.log(eachamt);

    document.querySelector("#totalbill").style.display = "block";
    document.querySelector("#each-bill").style.display = "block";
    
    document.querySelector("#bill").innerHTML = eachbillamt.toFixed(2);
    console.log(eachamt);

        
}
if (calbutton){
    calbutton.addEventListener("click", showText)

 }

