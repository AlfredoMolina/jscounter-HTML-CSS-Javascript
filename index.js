
// Declaration
var data = 0;
document.getElementById("counting").innerText = data;

// Increment + Function 
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

// Decrement - Function
function decrement() {
    data = data - 1;
document.getElementById("counting").innerText = data;
}