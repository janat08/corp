/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.EditCar.events({
});

/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.EditCar.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete Corp: "' + doc.brand + " " + doc.model + '"?')) {
        //taken from car guide car.brand
        this.remove();
        Router.go('corpformsList');
      }
    };
  }
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCar.onCreated(function () {
});

Template.EditCar.onRendered(function () {
});

Template.EditCar.onDestroyed(function () {
});
