import { projectData } from "./projectData";

const container = document.getElementById("projectsContainer") as HTMLElement;

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