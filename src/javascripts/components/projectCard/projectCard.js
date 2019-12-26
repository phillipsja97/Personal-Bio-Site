import './projectCard.scss';

const projectCard = (project) => {
  let domString = '';
  domString += `
  <div class="media" id="projCard">
    <img src="${project.screenshot}" id="projImage" class="align-self-center mr-3" alt="${project.title}">
      <div class="media-body text-center">
        <h5 class="mt-0" id="cardTitle">${project.title}</h5>
          <div class="cardInfo"><p>${project.description}</p></div>
            <div id="lowerCard" class="d-flex flex-wrap justify-content-center">
              <div class="d-flex flex-wrap" id="techIcons">
                <p id="techNames">Technologies Used: ${project.technologiesUsed}</p>
              </div>
              </div>
              </div>
              <div id="footer">
                </div class="d-flex flex-wrap" id="projButtons">
                  <a id="demoButton" href="${project.url}" target="_blank" rel="nofollow noopener">Live Demo</a>
                  <a href="${project.githubUrl}" id="gitButton">GitHub</a>
                </div>
              </div>
  </div>
    `;
  return domString;
};

const techUsedCard = (project) => {
  let domString2 = '';
  domString2 += `
  <div id="lowerCard" class="d-flex flex-wrap justify-content-center">
    <div class="d-flex flex-wrap" id="techIcons">
      <p>Technologies Used:</p>
        <img src="${project.technologiesUsed}" class="techUsed">
    </div>
  </div>
  `;
  return domString2;
};

export default { projectCard, techUsedCard };

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
