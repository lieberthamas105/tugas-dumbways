let projects = [];

function getData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let technologies = [];

  document
    .querySelectorAll(".checkbox-grid input[type='checkbox']:checked")
    .forEach((checkbox) => {
      technologies.push(checkbox.value);
    });

  let image = document.getElementById("project-image").files[0];
  let imageURL = image ? URL.createObjectURL(image) : "";

  let project = {
    name,
    startDate,
    endDate,
    description,
    technologies,
    imageURL,
  };

  projects.push(project);
  renderProjects();
}

function renderProjects() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    content.innerHTML += `
      <div class="card mb-3" style="width: 60vw;">
        <img src="${projects[i].imageURL}" class="card-img-top" alt="${projects[i].name}">
        <div class="card-body">
          <h3 class="card-title">${projects[i].name}</h3>
          <p class="card-text"><strong>${projects[i].startDate}</strong> - <strong>${projects[i].endDate}</strong></p>
          <p class="card-text">${projects[i].description}</p>
          <p class="card-text">Tech: ${projects[i].technologies.join(", ")}</p>
        </div>
      </div>
    `;
  }
}
