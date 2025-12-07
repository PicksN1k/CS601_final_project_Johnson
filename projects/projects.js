export const projectData = [
  {
    title: "Smart Inventory Dashboard",
    tech: "HTML, CSS & JavaScript",
    desc: "Inventory management app with dynamic UI updates.",
    link: "./Smart Inventory Dashboard/index.html"
  },
  {
    title: "Contact Form Validation",
    tech: "JavaScript DOM",
    desc: "Real-time validation with interactive user feedback.",
    link: "./Form Validation Project/index.html"
  },
  {
    title: "Country Management System",
    tech: "TypeScript (Compiled to JS)",
    desc: "Interactive OOP-based country info display.",
    link: "./country-app/index.html"
  },
  {
    title: "React Component Gallery",
    tech: "React + TypeScript",
    desc: "Reusable and scalable component rendering.",
    link: "./React Project/index.html"
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
  <a href="${p.link}" target="_blank" class="btn-primary">View Project</a>
`;

  container.appendChild(card);
});