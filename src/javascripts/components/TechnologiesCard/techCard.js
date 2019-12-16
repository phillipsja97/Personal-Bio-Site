const techCard = (tech) => {
  let domString = '';
  domString += `
  <div class="card d-flex flex-wrap" style="18em">
    <img src="${tech.imageUrl}" class="card-img-top" alt="${tech.name}">
    <div class="card-body">
      <h5 class="card-title">${tech.name}</h5>
      <p class="card-text">${tech.description}</p>
    </div>
  </div>
    `;
  return domString;
};

export default { techCard };
