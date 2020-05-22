//Declaring the variables
function calculate() {

//Getting the elements from html
var serviceType = document.getElementById('serviceQuality').value;
var billAmount = document.getElementById('billAmount').value;
var Calculate = document.getElementById('Calculate');
var totalPeople = document.getElementById('totalPeople').value;
document.getElementById('Calculate').style.display = "none";

//Creating a function for calculating tipAmount
var tipAmount = [(billAmount/totalPeople)*serviceType]/100;
//Calculate.innerText = tipAmount;

//Handling of Calculate & tip null amount


  if (billAmount == "" || serviceType == 0) {
    alert("Please enter values");
    return;
  }
  //display the tipAmount
  document.getElementById('Calculate').style.display = "block";
  document.getElementById("tip").innerHTML = tipAmount;
  //Check to see if this input is empty or less than or equal to 1
  if (totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }




}

//callback when document is loaded
window.onload = function() {
  //Hide the tip amount on load
  // document.getElementById('Calculate').style.display = "none";
  // document.getElementById('each').style.display = "none";

  //click to call the function
  document.getElementById('Calculate').onclick= function(){
      calculate();
  };
}
