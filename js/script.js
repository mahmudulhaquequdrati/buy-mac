//memory Click
function memoryCost(mcost) {
  var memoryExtraCostText = document.getElementById("memory-cost");
  var memoryExtraCost = memoryExtraCostText.innerText;
  memoryExtraCostText.innerText = parseInt(mcost);
}

// storage click
function storageCost(scost) {
  var storageExtraCostText = document.getElementById("storage-cost");
  var storageExtraCost = storageExtraCostText.innerText;
  storageExtraCostText.innerText = parseInt(scost);
}

// delivery charge
function deliveryCost(dcost) {
  var deliveryCostText = document.getElementById("delivery-cost");
  var deliveryCostTotal = deliveryCostText.innerText;
  deliveryCostText.innerText = parseInt(dcost);
}

// calculate total
// function totalCalculation(){

// }
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
