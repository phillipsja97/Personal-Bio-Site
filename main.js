const projects = [
    {
    title: "Cool Project", 
    screenshot: 'https://artofcoolproject.org/wordpress/wp-content/uploads/2019/06/Screen-Shot-2019-06-16-at-6.55.23-PMnew.jpg', 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},

{
    title: "Cool Project #2", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the second-best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}];

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
        <h2> ${projects.title} </h2>
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

