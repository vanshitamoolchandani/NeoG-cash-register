var cashAmount = document.querySelector("#cash-amount");
var billAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");

console.log(billAmount.value);
checkButton.addEventListener("click", () => console.log("clicked"));


// checkButton.addEventListener("click", () => (console.log("clickes")));

// checkButton.addEventListener("click", function checkBillAndCashAmount(){
//     if(cashAmount.value > 0){
//         if(cashAmount.value <= billAmount.value){

//         } 
//         else{
//             printMassage("Invalid Input. Bill amount should be greater that Cash amount");
//         }
//     }
//     else{
//         printMassage("Invalid Input. Cash Amount should be positive.");
//     }
// });


// function printMassage(msg){
//     message.style.display = "block";
//     message.innerText=message;
// }