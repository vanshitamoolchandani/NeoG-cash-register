const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");



const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", 
function validateBillAndCashAmount() {

  hideMessage();

  if (billAmount.value > 0) 
  {
    if ( (Number(billAmount.value)) != (Number(cashGiven.value))) 
    {
      if (Number(cashGiven.value) >= Number(billAmount.value)) 
      {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
      } 
      else 
      {
        showMessage("Cash Given should not be less than Bill Amount");
      }
    }
    else
    {
      showMessage("No change to be returned");
    }
   
  } else {
    showMessage("Bill Amount should not be less than zero");
  }
}
);

function calculateChange(amountToBeReturned)
 {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = "Error: " + msg;
}