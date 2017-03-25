FlowRouter.route('/', {
  name: 'newshipment',
  action(params, queryParams) {
    BlazeLayout.render('newshipment');
  }
});
FlowRouter.route('/job/_id', {
  name: 'showJob',
  action(params, queryParams) {
    BlazeLayout.render('showJob');
  }
});