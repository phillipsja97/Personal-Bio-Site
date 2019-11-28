// import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import proj from './components/projectCard/projects';

// // const bio = $('#bioPage');
// const tech = $('#technologiesPage');
// const projPage = $('#projectsPage');

// window.onload = () => {
//   tech.addClass('hide');
//   projPage.addClass('hide');
//   $('body').on('click', '#navToProjects', proj.createProjectCards);
// };

// const listeners = () => {
//   $('body').on('click', '#navToProjects', proj.createProjectCards);
// };

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  proj.createProjectCards();
  // listeners();
};

// const eventButtons = () => {
//     const buttons = document.getElementsByTagName('button');
//     for (i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', (event) => {
//             const buttonType = event.target.id;
//             event.preventDefault();
//             if (buttonType === 'navToBio') {
//                 bio.style.display = '';
//                 tech.style.display = 'none';
//                 projPage.style.display = 'none';
//             } else if (buttonType === 'navToTech') {
//                 bio.style.display = 'none';
//                 tech.style.display = '';
//                 projPage.style.display = 'none';
//             } else if (buttonType === 'navToProjects') {
//                 bio.style.display = 'none';
//                 tech.style.display = 'none';
//                 projPage.style.display = '';
//                 createProjectCards(projects);
//             }
//         })
//         }
//     };

// window.addEventListener('click', eventButtons);

init();
