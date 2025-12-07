const projectData = [
  {
    title: "Portfolio Website",
    tech: "HTML, CSS, JavaScript",
    desc: "A personal portfolio to showcase my software development work.",
  },
  {
    title: "Contact Form Validation",
    tech: "JavaScript DOM",
    desc: "Real-time form validation with interactive user feedback.",
  },
  {
    title: "Country Management System",
    tech: "TypeScript",
    desc: "Interactive application demonstrating TypeScript interfaces and classes.",
  },
];

const container = document.getElementById("projectsContainer");

projectData.forEach((p) => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${p.title}</h3>
    <p class="tech">${p.tech}</p>
    <p>${p.desc}</p>
  `;

  container.appendChild(card);
});