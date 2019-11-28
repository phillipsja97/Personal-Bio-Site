import $ from 'jquery';

const bio = $('#bioPage');
const tech = $('#technologiesPage');
const projPage = $('#projectsPage');

window.onload = () => {
  bio.style.display = '';
  tech.style.display = 'none';
  projPage.style.display = 'none';
};

const createProjectCards = (projectsArr) => {
    projectsData.getProjects().then().catch()
    let domString = '';
    for (let i = 0; i < projectsArr.length; i++) {
        let projects = projectsArr[i]
    if (projects.available) {
        domString +=
         `<div class="projectsCard">
        <h1> ${projects.title} </h1>
        <h2> ${projects.screenshot}</h2>
        <h2>${projects.description}</h2>
        <h2>${projects.technologiesUsed}</h2>
        <h2>${projects.url}</h2>
        <h2>${projects.githubUrl}</h2>
        </div>`}
    }
    printToDom(domString, 'projectsPage');
    };

    createProjectCards(projects);

    


const eventButtons = () => {
    const buttons = document.getElementsByTagName('button');
    for (i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            const buttonType = event.target.id;
            event.preventDefault();
            if (buttonType === 'navToBio') {
                bio.style.display = '';
                tech.style.display = 'none';
                projPage.style.display = 'none';
            } else if (buttonType === 'navToTech') {
                bio.style.display = 'none';
                tech.style.display = '';
                projPage.style.display = 'none';
            } else if (buttonType === 'navToProjects') {
                bio.style.display = 'none';
                tech.style.display = 'none';
                projPage.style.display = '';
                createProjectCards(projects);
            }
        })
        }
    };

    window.addEventListener('click', eventButtons);