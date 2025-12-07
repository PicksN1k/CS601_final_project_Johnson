import { projectData } from "./projectData.ts";

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