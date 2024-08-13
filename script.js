document.addEventListener("DOMContentLoaded", () => {
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
        total += quantity * unitPrice;
      });
      document.querySelector(".total").textContent = total + " $";
    };
  
    document.querySelectorAll(".fa-plus-circle").forEach((button) => {
      button.addEventListener("click", (event) => {
        const quantitySpan = event.target.nextElementSibling;
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fa-minus-circle").forEach((button) => {
      button.addEventListener("click", (event) => {
        const quantitySpan = event.target.previousElementSibling;
        if (parseInt(quantitySpan.textContent) > 0) {
          quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
          updateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll(".fa-trash-alt").forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest(".card-body");
        card.remove();
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fa-heart").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.target.classList.toggle("liked");
      });
    });
  
    updateTotalPrice();
  });
  