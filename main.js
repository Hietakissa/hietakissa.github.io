import { projects } from "./projects.js";

const list = document.querySelector("#project-list");


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
        <article class="project-card" data-project-id="${project.id}">
            ${renderThumbnail(project)}
            <div class="project-body">
                <div class="project-meta">
                    <p>${project.type}</p>
                    <p>${project.year}</p>
                </div>

                <h3>${project.title}</h3>
                <p class="description">${project.short}</p>
            </div>
        </article>
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