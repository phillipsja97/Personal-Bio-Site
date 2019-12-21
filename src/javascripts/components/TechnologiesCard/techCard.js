import './techCard.scss';

const techCard = (tech) => {
  let domString = '';
  domString += `
  <div class="techImage">
    <img src="${tech.imageUrl}" class="card-img-top" alt="${tech.name}">
  </div>
    `;
  return domString;
};

export default { techCard };

// <div class="d-flex flex-wrap justify-content-between">
//   <div class="card">
//     <img src="${tech.imageUrl}" class="card-img-top" alt="${tech.name}">
//     <div class="card-body">
//       <h5 class="card-title text-center">${tech.name}</h5>
//         <p class="card-text text-center">${tech.description}</p>
//     </div>
//   </div>
// </div>
