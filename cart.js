// Function to update the total price
function updateTotalPrice() {
    let total = 0;
    const subtotals = document.querySelectorAll('tr[id^="item-"] td:last-child'); // Select all subtotal cells
    subtotals.forEach(subtotal => {
        total += parseFloat(subtotal.textContent.replace('₹', '').replace(',', ''));
    });
  
    const totalElement = document.querySelector('.total-price td:last-child');
    totalElement.textContent = `₹${total.toFixed(2)}`;
  }
  
  // Attach event listeners to quantity inputs
  document.querySelectorAll('tr[id^="item-"] input[type="number"]').forEach(input => {
    input.addEventListener('input', updateSubtotal);
  });
  
  // Initial subtotal calculation
  updateSubtotal();
  
  // Hamburger menu toggle
  const hamburer = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  
  if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
  }
  
  // Popup
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".popup-close");
  
  if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });
  
  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
  }
  
  // Function to simulate typing animation
  function typeText(element, text, delay) {
  let i = 0;
  const typingInterval = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval); // Stop the typing animation
    }
  }, delay);
  }
  
  // Trigger the typing animation when the page loads
  document.addEventListener("DOMContentLoaded", function () {
  const typedNameElement = document.getElementById("typed-name");
  const nameToType = "Jammu & Kashmir - Place where heaven touches the Earth."; // Your text to type
  
  typeText(typedNameElement, nameToType, 100); // Adjust the delay (100ms) for typing speed
  });