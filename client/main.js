import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Jobs } from '../imports/api/jobs.js'

import './main.html';
mJobs = Jobs;
Template.newshipment.onCreated(function helloOnCreated() {

});

Template.body.helpers({
  storedJobs(){ 
    return Jobs.find({}).count();
  },
});

Template.newshipment.events({
  'submit'(event) {
  	event.preventDefault();
    const from = event.target[0].value;
    const to = event.target[1].value;
    const width = event.target[2].value;
    const length = event.target[3].value;
    const height = event.target[4].value;
    const weight = event.target[5].value;
    const date = event.target[6].value;
    console.log(
      Jobs.insert({
          userName: Meteor.user().emails[0].address,
          user: Meteor.userId(),
          createdAt: new Date(),
          from: from,
          to: to,
          width: width,
          length: length,
          height: height,
          weight: weight,
          date: date,
      })
    );
    event.target.reset();
  },
});
