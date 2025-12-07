const projectData = [
  {
    title: "Fruit Sorting Application",
    tech: "HTML • CSS • JavaScript",
    desc: "Drag-and-drop fruit sorting interface demonstrating DOM manipulation and event handling.",
    github: "https://github.com/PicksN1k/CS601_HW2_Johnson"
  },
  {
    title: "Form Validation",
    tech: "HTML • CSS • JavaScript",
    desc: "Real-time input validation with error detection and visual feedback for required fields.",
    github: "https://github.com/PicksN1k/CS601_HW1_Johnson"
  },
  {
    title: "Country App",
    tech: "TypeScript • DOM Manipulation",
    desc: "Displays country data using TypeScript classes, type safety, and interface enforcement.",
    github: "https://github.com/PicksN1k/CS601_HW4_Johnson"
  },
  {
    title: "React Project",
    tech: "React • TypeScript • Components",
    desc: "Interactive React UI demonstrating reusable components and state-driven rendering.",
    github: "https://github.com/PicksN1k/CS601_HW5_Johnson"
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