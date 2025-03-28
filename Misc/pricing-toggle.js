// Pricing Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
  const pricingToggle = document.getElementById('pricing-toggle');
  const standardLabel = document.getElementById('standard-label');
  const monthlyLabel = document.getElementById('monthly-label');
  const pricingContainers = document.querySelectorAll('.pricing-packages');
  
  // Initialize with standard pricing
  standardLabel.classList.add('active');
  
  pricingToggle.addEventListener('change', function() {
    if (this.checked) {
      // Monthly pricing
      pricingContainers.forEach(container => {
        container.classList.add('show-monthly');
      });
      monthlyLabel.classList.add('active');
      standardLabel.classList.remove('active');
    } else {
      // Standard pricing
      pricingContainers.forEach(container => {
        container.classList.remove('show-monthly');
      });
      standardLabel.classList.add('active');
      monthlyLabel.classList.remove('active');
    }
  });
});
