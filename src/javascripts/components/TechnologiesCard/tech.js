// import $ from 'jquery';
import techCard from './techCard';
import technologiesData from '../../helpers/data/technologiesData';
import utilities from '../../helpers/utilities/utilities';

const createTechCards = () => {
  technologiesData.getTech()
    .then((technologies) => {
      let domString = '';
      domString += '<div><h1 id="techTitle">Technologies</h1></div><br>';
      domString += '<hr>';
      domString += '<div class="techArea">';
      technologies.forEach((tech) => {
        domString += techCard.techCard(tech);
      });
      domString += '</div>';
      utilities.printToDom('technologiesPage', domString);
    })
    .catch((error) => console.error(error));
};

export default { createTechCards };
