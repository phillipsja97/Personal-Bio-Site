// import $ from 'jquery';
import techCard from './techCard';
import technologiesData from '../../helpers/data/technologiesData';
import utilities from '../../helpers/utilities/utilities';

const createTechCards = () => {
  technologiesData.getTech()
    .then((technologies) => {
      let domString = '';
      technologies.forEach((tech) => {
        domString += techCard.techCard(tech);
      });
      utilities.printToDom('technologiesPage', domString);
    })
    .catch((error) => console.error(error));
};

export default { createTechCards };
