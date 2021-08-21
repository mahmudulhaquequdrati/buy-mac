//memory Click
function productCost(product, price) {
  document.getElementById(product + "-cost").innerText = price;
  totalCost();
  finalTotal();
}
//getting input
function getInputValue(priceId) {
  var bestPrice = document.getElementById(priceId);
  var bestPriceValue = parseInt(bestPrice.innerText);
  return bestPriceValue;
}
//calculate total
function totalCost() {
  var bestPriceTotal = getInputValue("best-price");
  var totalMemoryPrice = getInputValue("memory-cost");
  var totalStoragePrice = getInputValue("storage-cost");
  var totalDeliveryPrice = getInputValue("delivery-cost");
  var totalPrice =
    bestPriceTotal + totalMemoryPrice + totalStoragePrice + totalDeliveryPrice;
  document.getElementById("total-cost").innerText = totalPrice;
  return totalPrice;
}
// final value
function finalTotal() {
  let finalBalance = document.getElementById("final-value");
  finalBalance.innerText = totalCost();
}
// promo code part
document.getElementById("promo-btn").addEventListener("click", function () {
  var cuponInputField = document.getElementById("promo-input");
  var cuponInput = cuponInputField.value;
  if (cuponInput == "stevekaku") {
    var cupon = document.getElementById("total-cost");
    var cuponDiscount =
      parseFloat(cupon.innerText) - parseFloat(cupon.innerText) * 0.2;
    document.getElementById("final-value").innerText = cuponDiscount;
  }
  cuponInputField.value = "";
});
// 8gb memory btn click
document.getElementById("8gb-memory").addEventListener("click", function () {
  productCost("memory", 0);
});
// 16gb memory btn click
document.getElementById("16gb-memory").addEventListener("click", function () {
  productCost("memory", 180);
});
// 256gb storage
document.getElementById("256gb-storage").addEventListener("click", function () {
  productCost("storage", 0);
});
// 512gb storage
document.getElementById("512gb-storage").addEventListener("click", function () {
  productCost("storage", 100);
});
// 1tb storage
document.getElementById("1tb-storage").addEventListener("click", function () {
  productCost("storage", 180);
});
// prime delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  productCost("delivery", 0);
});
// cost delivery
document
  .getElementById("charge-delivery")
  .addEventListener("click", function () {
    productCost("delivery", 20);
  });
