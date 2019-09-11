const projects = [
    {
    title: 'Cool Project', 
    screenshot: 'https://artofcoolproject.org/wordpress/wp-content/uploads/2019/06/Screen-Shot-2019-06-16-at-6.55.23-PMnew.jpg', 
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
},

{
    title: 'Cool Project #2', 
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg', 
    description: 'This is the second-best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
},

{
    title: 'Pet Adoption Cards',
    screenshot: 'https://repository-images.githubusercontent.com/205031249/83047f80-d490-11e9-8965-36ebd8a93c4c',
    description: 'Create a pet adoption website that will sort through different types of animals. Have each button be able to pull up only that specific animal.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github.',
    available: true,
    url: 'https://github.com/phillipsja97/pet-adoption',
    githubUrl: 'https://github.com/phillipsja97/pet-adoption',
},

];


const bio = document.getElementById('bioPage');
    const tech = document.getElementById('technologiesPage');
    const projPage = document.getElementById('projectsPage');
    
    window.onload = () => {
        bio.style.display = '';
        tech.style.display = 'none';
        projPage.style.display = 'none';
      };


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const createProjectCards = (projectsArr) => {
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