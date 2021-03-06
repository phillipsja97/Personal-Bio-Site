import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import proj from './components/projectCard/projects';
import technology from './components/TechnologiesCard/tech';

const bio = $('.aboutMe');
const tech = $('#technologiesPage');
const projPage = $('#projectsPage');
const homepage = $('#homepage');
const contactPage = $('#contactMe');
const story = $('#storiesContainer');
const aboutMe = $('#aboutMePhotos');

const onload = () => {
  bio.addClass('hide');
  tech.addClass('hide');
  projPage.addClass('hide');
  contactPage.addClass('hide');
  story.addClass('hide');
  aboutMe.addClass('hide');
};

window.onload = onload;

const listeners = () => {
  $('body').on('click', '#navToTech', () => {
    tech.removeClass('hide');
    bio.addClass('hide');
    projPage.addClass('hide');
    homepage.addClass('hide');
    contactPage.addClass('hide');
  });
  $('body').on('click', '#navToBio', () => {
    bio.removeClass('hide');
    tech.addClass('hide');
    projPage.addClass('hide');
    homepage.addClass('hide');
    contactPage.addClass('hide');
  });
  $('body').on('click', '#navToProj', () => {
    bio.addClass('hide');
    tech.addClass('hide');
    projPage.removeClass('hide');
    proj.createProjectCards();
    homepage.addClass('hide');
    contactPage.addClass('hide');
  });
  $('body').on('click', '#contactButton', () => {
    bio.addClass('hide');
    tech.addClass('hide');
    projPage.addClass('hide');
    homepage.addClass('hide');
    contactPage.removeClass('hide');
  });
  $('body').on('click', '#photoStories', () => {
    $('#storiesContainer').removeClass('hide');
    $('#aboutMePhotos').removeClass('hide');
    $('.background').addClass('hide');
  });
  $('body').on('click', '#backToBioButton', () => {
    $('#storiesContainer').addClass('hide');
    $('#aboutMePhotos').addClass('hide');
    $('.background').removeClass('hide');
  });
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  proj.createProjectCards();
  technology.createTechCards();
  listeners();
};

init();
