// all button hanling function
function buttonClick(buttonName, changePrice, pricingValue) {
  document.getElementById(buttonName).addEventListener("click", function () {
    document.getElementById(changePrice).innerText = pricingValue;
    subTotalAndTotalCost();
  });
}
buttonClick("standard-memory", "extra-memory-cost", 0);
buttonClick("premium-memory", "extra-memory-cost", 180);
buttonClick("basic-storage", "extra-storage-cost", 0);
buttonClick("standard-storage", "extra-storage-cost", 100);
buttonClick("premium-storage", "extra-storage-cost", 180);
buttonClick("without-cost", "delivery-charge", 0);
buttonClick("with-cost", "delivery-charge", 20);
// function of sub-total and total cost
function subTotalAndTotalCost() {
  const bestPrice = document.getElementById("best-price").innerText;
  const extraMemoryCost =
    document.getElementById("extra-memory-cost").innerText;
  const extraStorageCost =
    document.getElementById("extra-storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-charge").innerText;
  document.getElementById("sub-total").innerText =
    parseInt(bestPrice) +
    parseInt(extraMemoryCost) +
    parseInt(extraStorageCost) +
    parseInt(deliveryCost);
  document.getElementById("total").innerText =
    parseInt(bestPrice) +
    parseInt(extraMemoryCost) +
    parseInt(extraStorageCost) +
    parseInt(deliveryCost);
}
// function of promo code and discount twenty percent
function discountByPromoCode() {
  if (document.getElementById("promo-code").value == "stevekaku") {
    document.getElementById("total").innerText =
      parseInt(document.getElementById("sub-total").innerText) * 0.8;
    document.getElementById("promo-code").value = [];
  }
}
document
  .getElementById("discount-button")
  .addEventListener("click", function () {
    discountByPromoCode();
  });
