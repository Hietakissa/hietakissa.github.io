import { projects } from "./projects.js";

let selectedId = 0;

const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogTitle = document.querySelector("#project-dialog-title");
const list = document.querySelector("#project-list");
const cursor = document.querySelector("#custom-cursor");


// Project card click
list.addEventListener("click", event => {
  const button = event.target.closest("[data-project-id]");
  if (!button) return;

  const project = getProject(button.dataset.projectId);
  if (!project) return;

  selectedId = project.id;

  dialogTitle.innerHTML = project.title;
  dialogContent.innerHTML = renderDetail(project);
  dialog.showModal();
  dialog.appendChild(cursor);
});


// Dialog stuff
document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  // Close when clicking the backdrop, not the dialog content.
  if (event.target === dialog) {
    dialog.close();
    document.body.appendChild(cursor);
  }
});


// Project cards render
render();


function render(){
    if (projects.length == 0) {
        list.innerHTML = "<h3>No projects found.</h3>";
        return;
    }

    const listHTML = projects.map(renderCard).join("");
    list.innerHTML = listHTML;
}

function renderCard(project){
    return `
        <button class="project-card" data-project-id="${project.id}">
            ${renderThumbnail(project)}
            <div class="project-body">
                <div class="project-meta">
                    <p>${project.type}</p>
                    <p>${project.year}</p>
                </div>

                <h3>${project.title}</h3>
                <p class="project-short">${project.short}</p>
            </div>
        </button>
    `;
}

function renderThumbnail(project){
    return `
        <img class="project-thumb" 
        src="images/${project.thumbnail}" 
        alt="${project.title}"
        onerror="this.onerror=null; this.src='images/placeholder.avif';">
    `;
}

function renderLinks(links = []) {
	return links.map(link => {
		const url = safeURL(link.url);
		if (!url) return "";

		const external = /^https?:/.test(url);

		return `
        <a href="${url}"
            ${external ? 'target="_blank" rel="noreferrer"' : ""}>
            ${link.label}
        </a>
    `;
	}).join("<span>|</span>");
}


function renderDetail(project){
    /*return `
      <div class="detail-placeholder">
        Select a project to explore its details.
      </div>
    `;*/
    return `
    ${renderThumbnail(project)}
    <p class="dialog-content-meta">
        ${project.type} / ${project.year}
    </p>
    <p>${project.description}</p>
    ${renderContributions(project)}
    
      ${project.links.length ? `
        <div class="detail-links">
          ${renderLinks(project.links)}
        </div>
      ` : ""}
    `;
}

function renderContributions(project){
    if (project.contributions == null || project.contributions.length == 0) return ``;
    
    return `
    <div>
        <h2>My contributions</h2>
        <ul class="contribution">
        ${project.contributions.map(item =>`<li>${item}</li>`).join("")}
        </ul>
    </div>
    `;
}


function getProject(id) {
    return projects.find(project => project.id === id);
}



function safeURL(value) {
	try {
		const url = new URL(value, window.location.href);

		if (["https:", "http:", "mailto:"].includes(url.protocol)) {
			return url.href;
		}
	} catch {
		// Ignore invalid URLs.
	}

	return null;
}