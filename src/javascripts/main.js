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
const homepage = $('.contain');
const contactPage = $('#contactMe');
const phone = $('#phoneText');
const email = $('#emailText');

const onload = () => {
  bio.addClass('hide');
  tech.addClass('hide');
  projPage.addClass('hide');
  contactPage.addClass('hide');
  phone.addClass('hide');
  email.addClass('hide');
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
  $('body').on('click', '#navToCont', () => {
    bio.addClass('hide');
    tech.addClass('hide');
    projPage.addClass('hide');
    homepage.addClass('hide');
    contactPage.removeClass('hide');
  });
};

const contactHovers = () => {
  $('.linkContactImage').mouseenter(() => {
    $('.linkContactImage').css('opacity', '1');
  });
  $('.linkContactImage').mouseleave(() => {
    $('.linkContactImage').css('opacity', '0.5');
  });
  $('.gitContactImage').mouseenter(() => {
    $('.gitContactImage').css('opacity', '1');
  });
  $('.gitContactImage').mouseleave(() => {
    $('.gitContactImage').css('opacity', '0.5');
  });
  $('#emailQuad').mouseenter(() => {
    $('.emailContactImage').hide();
    $('#emailText').removeClass('hide');
  });
  $('#emailQuad').mouseleave(() => {
    $('.emailContactImage').show();
    $('#emailQuad').css('background-color', 'transparent');
    $('#emailText').addClass('hide');
  });
  $('#phoneQuad').mouseenter(() => {
    $('.cellContactImage').hide();
    $('#phoneText').removeClass('hide');
  });
  $('#phoneQuad').mouseleave(() => {
    $('.cellContactImage').show();
    $('#phoneText').css('background-color', 'transparent');
    $('#phoneText').addClass('hide');
  });
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  proj.createProjectCards();
  technology.createTechCards();
  listeners();
  contactHovers();
};

init();
