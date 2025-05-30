var typed=new Typed(".text",{
    strings:[" Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
 const technicalSkills = [
      { name: "HTML", desc: "Markup language for web development" },
      { name: "CSS", desc: "Styling and layout for web pages" },
      { name: "JavaScript", desc: "Interactive behavior in web pages" },
      { name: "React JS", desc: "Component-based JavaScript library" },
      { name: "Java", desc: "Object-oriented programming language" },
      { name: "Python", desc: "High-level programming for various applications" },
      { name: "C", desc: "Structured programming language for systems" }
];
    const professionalSkills = [
      { name: "Communication", desc: "Clear written and verbal communication" },
      { name: "Teamwork", desc: "Effective collaboration in groups" },
      { name: "Problem Solving", desc: "Analytical and debugging skills" },
      { name: "Time Management", desc: "Efficient task prioritization" },
      { name: "Adaptability", desc: "Quick learner in changing environments" },
      { name: "Goal Oriented", desc: "Focused on achieving results" }
];
function createCard(skill) {
      return `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">${skill.name}</div>
            <div class="card-back">${skill.desc}</div>
          </div>
        </div>
      `;
}
document.getElementById("technical-skills").innerHTML = technicalSkills.map(createCard).join("");
document.getElementById("professional-skills").innerHTML = professionalSkills.map(createCard).join("");

const boxes = document.querySelectorAll('.certificate-box');
const modal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');
const closeBtn = document.getElementById('closeBtn');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    certImage.src = box.getAttribute('data-cert');
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});