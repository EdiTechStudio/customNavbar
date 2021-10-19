let click = 1;
function navbarToggler(){
    if(click==1){
        document.getElementById("bars_times").className = "fas fa-times"; // Change Bars to Times
        document.getElementById("toggleItems").style.display = "block"    // Display Navbar
        click++;
    }
    else{
        document.getElementById("bars_times").className = "fas fa-bars"; // Change Times to Bars
        document.getElementById("toggleItems").style.display = "none"    // Hide the Navbar
        click--;
    }
}