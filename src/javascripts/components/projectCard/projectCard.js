import './projectCard.scss';

const projectCard = (project) => {
  let domString = '';
  domString += `
  <div class="media" id="projCard">
    <img src="${project.screenshot}" id="projImage" class="align-self-center mr-3" alt="${project.title}">
      <div class="media-body text-center">
        <h5 class="mt-0" id="cardTitle">${project.title}</h5>
          <div class="cardInfo"><p>${project.description}</p></div>
          <button class="btn btn-outline-primary" id="demoButton">Live Demo</button>
          <button class="btn btn-outline-primary" id="gitButton">GitHub</button>
      </div>
  </div>
    `;
  return domString;
};

export default { projectCard };

/* <div class="projCard">
<div class="card" style="width: 18rem;">
<img src="${project.screenshot}" class="card-img-top" alt="${project.title}">
<div class="card-body">
  <h5 class="card-title">${project.title}</h5>
  <p class="card-text">${project.description}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div> */
