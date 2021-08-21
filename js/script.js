//memory Click
function memoryCost(mcost) {
  var memoryExtraCostText = document.getElementById("memory-cost");
  var memoryExtraCost = memoryExtraCostText.innerText;
  memoryExtraCostText.innerText = mcost;
  totalCost();
  finalTotal();
}

// storage click
function storageCost(scost) {
  var storageExtraCostText = document.getElementById("storage-cost");
  var storageExtraCost = storageExtraCostText.innerText;
  storageExtraCostText.innerText = scost;
  totalCost();
  finalTotal();
}

// delivery charge
function deliveryCost(dcost) {
  var deliveryCostText = document.getElementById("delivery-cost");
  var deliveryCostTotal = deliveryCostText.innerText;
  deliveryCostText.innerText = dcost;
  totalCost();
  finalTotal();
}
//getting input
function getInputValue(priceId) {
  var bestPriceText = document.getElementById(priceId);
  var bestPrice = parseInt(bestPriceText.innerText);
  return bestPrice;
}

//calculate total
function totalCost() {
  var bestPriceTotal = getInputValue("best-price");
  var mCostTotal = getInputValue("memory-cost");
  var sCostTotal = getInputValue("storage-cost");
  var dCostTotal = getInputValue("delivery-cost");

  var total = bestPriceTotal + mCostTotal + sCostTotal + dCostTotal;
  //show
  document.getElementById("total-cost").innerText = total;

  return total;
}
// final value
function finalTotal() {
  let finalTotal = document.getElementById("final-value");
  finalTotal.innerText = totalCost();

  // cupon
}
//
document.getElementById("promo-btn").addEventListener("click", function () {
  var cuponInputText = document.getElementById("promo-input");
  var cuponInput = cuponInputText.value;
  if (cuponInput == "stevekaku") {
    var cupon = document.getElementById("total-cost");
    var cuponDiscount =
      parseFloat(cupon.innerText) - parseFloat(cupon.innerText) * 0.2;

    document.getElementById("final-value").innerText = cuponDiscount;
  }
  cuponInputText.value = "";
});
// 8gb memory btn click
document.getElementById("8gb-memory").addEventListener("click", function () {
  memoryCost(0);
});
// 16gb memory btn click
document.getElementById("16gb-memory").addEventListener("click", function () {
  memoryCost(180);
});
// 256gb storage
document.getElementById("256gb-storage").addEventListener("click", function () {
  storageCost(0);
});
// 512gb storage
document.getElementById("512gb-storage").addEventListener("click", function () {
  storageCost(100);
});
// 1tb storage
document.getElementById("1tb-storage").addEventListener("click", function () {
  storageCost(180);
});

// prime delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  deliveryCost(0);
});

// cost delivery
document
  .getElementById("charge-delivery")
  .addEventListener("click", function () {
    deliveryCost(20);
  });
