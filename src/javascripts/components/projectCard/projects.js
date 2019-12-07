// import $ from 'jquery';
import projectCard from './projectCard';
import projectsData from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities/utilities';

const createProjectCards = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<div>';
      domString += '<div><h1 class="text-center">Projects I have created</h1></div>';
      projects.forEach((project) => {
        domString += projectCard.projectCard(project);
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
