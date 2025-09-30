document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");


  function hideAllSections() {
    sections.forEach(sec => {
      sec.classList.remove("active");
    });
  }


  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

     
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      hideAllSections(); 
      targetSection.classList.add("active"); 


      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  
  hideAllSections();
  document.getElementById("about").classList.add("active");
});