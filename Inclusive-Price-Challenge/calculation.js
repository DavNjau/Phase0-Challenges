/*
exclusivePrice
taxRate 
inclusivePrice

inclusivePrice = exclusivePrice  + (taxRate *exclusivePrice)
*/


const pressButton = document.getElementById("press");
const taxRate = 0.16;
const exclusivePriceInput = document.getElementById("input-field")
const result = document.getElementById("result-container")

function inclusivePrice(exclusivePrice, taxRate){
   const price = exclusivePrice + (exclusivePrice * taxRate);
   return price;
}

pressButton.addEventListener("click", () => {
   const exclusiveValue = parseFloat(exclusivePriceInput.value);
   if (isNaN(exclusiveValue)) {
      result.textContent = "Please enter a valid number.";
      return;
   }
   const total = inclusivePrice(exclusiveValue, taxRate);
   result.textContent = `Inclusive Price: ${total.toFixed(2)}`;
});
