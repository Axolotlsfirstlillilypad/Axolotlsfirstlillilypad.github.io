const input = document.getElementById("search");

if (input) {
  input.addEventListener("keyup", function () {
    const term = input.value.toLowerCase();
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(term) ? "block" : "none";
    });
  });
}
