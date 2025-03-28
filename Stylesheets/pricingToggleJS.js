document.addEventListener("DOMContentLoaded", function () {
  // Get toggle elements
  const toggleSwitch = document.getElementById("pricing-toggle");
  const standardLabel = document.getElementById("standard-label");
  const monthlyLabel = document.getElementById("monthly-label");
  const pricingCards = document.querySelectorAll(".package-cards");

  // Add event listener to toggle switch
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", function () {
      // Update active label
      if (this.checked) {
        monthlyLabel.classList.add("active");
        standardLabel.classList.remove("active");

        // Show monthly prices
        pricingCards.forEach((card) => {
          card.classList.add("show-monthly");
        });
      } else {
        standardLabel.classList.add("active");
        monthlyLabel.classList.remove("active");

        // Show standard prices
        pricingCards.forEach((card) => {
          card.classList.remove("show-monthly");
        });
      }
    });

    // Set initial state
    standardLabel.classList.add("active");
  } else {
    console.error("Pricing toggle element not found");
  }
});
