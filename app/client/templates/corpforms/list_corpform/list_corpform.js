/*****************************************************************************/
/* ListCorpform: Event Handlers */
/*****************************************************************************/
Template.ListCorpform.events({
});

/*****************************************************************************/
/* ListCorpform: Helpers */
/*****************************************************************************/
Template.ListCorpform.helpers({
  corpforms: function() {
    return Corpforms.find();
}});

/*****************************************************************************/
/* ListCorpform: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCorpform.onCreated(function () {
});

Template.ListCorpform.onRendered(function () {
});

Template.ListCorpform.onDestroyed(function () {
});
