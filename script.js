document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("skillcard");
  // O JavaScript agora vai buscar pela classe exata do seu CSS
  const skillsSection = document.querySelector(".card-skills");

  if (card && skillsSection) {
    card.addEventListener("click", () => {
      // Alterna entre oculto e visível usando as regras que já estão no seu CSS
      if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        skillsSection.classList.add("show");
      } else {
        skillsSection.classList.remove("show");
        skillsSection.classList.add("hidden");
      }
    });
  }
});
