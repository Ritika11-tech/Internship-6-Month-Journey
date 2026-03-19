
const projectSection = document.querySelector("#projects");
const typingCard = document.querySelector("#typing").closest(".projects-card");
const calculatorCard = document.querySelector("#ac");

window.addEventListener("scroll", () => {
  const sectionTop = projectSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(sectionTop < screenHeight - 100){
    typingCard.classList.add("show-left");
    calculatorCard.classList.add("show-right");
  }
   else {
    
    typingCard.classList.remove("show-left");
    calculatorCard.classList.remove("show-right");
  }
});