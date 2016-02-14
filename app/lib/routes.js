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
  name: 'CreateCorpform',
  controller: 'CorpformsController',
  action: 'create',
  where: 'client'
});

Router.route('/corpforms', {
  name: 'ListCorpforms',
  controller: 'CorpformsController',
  action: 'list',
  where: 'client'
});

Router.route('/corpform/:_id', {
  name: 'EditCorpform',
  controller: 'CorpformsController',
  action: 'edit',
  where: 'client'
});
