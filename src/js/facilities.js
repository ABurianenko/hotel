import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.facilities-rooms');

const accordion = new Accordion(container, {
  // accordion options
  showMultiple: false,
  duration: 400,
  onOpen: function (el) {
    console.log('Accordion opened:', el);
  },
  onClose: function (el) {
    console.log('Accordion closed:', el);
  },
});

//first question permanently opened
// accordion.open(0);
