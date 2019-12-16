import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import proj from './components/projectCard/projects';
import technology from './components/TechnologiesCard/tech';

const bio = $('#bioPage');
const tech = $('#technologiesPage');
const projPage = $('#projectsPage');

const onload = () => {
  bio.addClass('hide');
  tech.addClass('hide');
  projPage.addClass('hide');
};

window.onload = onload;

const listeners = () => {
  $('body').on('click', '#navToTech', () => {
    tech.removeClass('hide');
    bio.addClass('hide');
    projPage.addClass('hide');
  });
  $('body').on('click', '#navToBio', () => {
    bio.removeClass('hide');
    tech.addClass('hide');
    projPage.addClass('hide');
  });
  $('body').on('click', '#navToProj', () => {
    bio.addClass('hide');
    tech.addClass('hide');
    projPage.removeClass('hide');
    proj.createProjectCards();
  });
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  proj.createProjectCards();
  technology.createTechCards();
  listeners();
};

init();
