Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/corpforms/create', {
  name: 'createCorpform',
  controller: 'CorpformController',
  action: 'create',
  where: 'client'
});

Router.route('/corpform', {
  name: 'corpformList',
  controller: 'CorpformsController',
  action: 'list',
  where: 'client'
});

Router.route('/corpform/:_id', {
  name: 'editCorpform',
  controller: 'CorpformController',
  action: 'edit',
  where: 'client'
});
