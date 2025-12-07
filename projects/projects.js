export const projectData = [
  {
    title: "Contact Form + Validation",
    tech: "HTML • CSS • JavaScript",
    desc: "Live inline form validation using DOM scripting and error handling.",
    github: "https://github.com/PicksN1k/CS601_HW2_Johnson"
  },
  {
    title: "Country Management System",
    tech: "TypeScript • DOM",
    desc: "Object-oriented country information manager built with TypeScript.",
    github: "https://github.com/PicksN1k/CS601_HW1_Johnson"
  }
];

const container = document.getElementById("projectsContainer");

projectData.forEach((p) => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
  <h3>${p.title}</h3>
  <p class="tech">${p.tech}</p>
  <p>${p.desc}</p>
  <a href="${p.github}" target="_blank" class="btn-primary">View on GitHub</a>
`;

  container.appendChild(card);
});