const projectCard = (project) => {
  let domString = '';
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="${project.screenshot}" class="card-img-top" alt="${project.title}">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
    `;
  return domString;
};

export default { projectCard };
