import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  // counter() {
  //   return Template.instance().counter.get();
  // },
});

Template.hello.events({
  'submit'(event) {
  	event.preventDefault();
    console.log("Submited!");
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});
