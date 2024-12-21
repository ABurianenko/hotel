import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.facilities-rooms');

const accordion = new Accordion(container, {
  // accordion options
  showMultiple: false,
  duration: 400,
});

//first question permanently opened
// accordion.open(0);
