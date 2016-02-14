Corpforms = new Mongo.Collection('corpforms');




  Corpforms.attachSchema(new SimpleSchema({

/// depending on what category is chosen some forms should hide/appear

category: {
type: String,



  allowedValues: [ 'High Security 1.0-0.6 ',
   'Low Security 0.5-0.1 ',
   'Null Security 0.0-negative ',
   'Wormhole Space ',
]
}
,

security: {
type: String,
label: "Security policy: ",


  allowedValues: [ 'Spies Welcome ',
   'Risk Tolerant ',
   'Risk Intolerant ',
   'Strict Security ',

]}
,

activityattitude: {
type: String,
label: "Commitment attitude: ",


  allowedValues: [ 'Life Comes First ',
   'Moderate ',
   'Duty Bound ',
   'Indifferent ',

]}
,

pvpgearing: {
type: String,
label: "Gearing towards Player vs. Player: ",


  allowedValues: [ 'Suicidal ',
   'Risk Averse ',
   'KB Oriented ',
   'Uninterested ',

]}
,



primarytz: {
type: String,
label: "Primary TZ: ",


  allowedValues: [ 'US ',
   'EU ',
   'AU ',
   'RU/Asia ',

]}
,

//secondary,etc tz meant for WH corps with form enabling recruits
//to grasp level of activity while recognizing WH corps interest
//should include checkboxes or something for recruitment status

secondarytz: {
type: String,
label: "Secondary TZ: ",


  allowedValues: [ 'US ',
   'EU ',
   'AU ',
   'RU/Asia ',

]}
,

tertiarytz: {
type: String,
label: "Tertiary TZ: ",


  allowedValues: [ 'US ',
   'EU ',
   'AU ',
   'RU/Asia ',

]}
,

quaternarytz: {
type: String,
label: "Quaternary TZ: ",


  allowedValues: [ 'US ',
   'EU ',
   'AU ',
   'RU/Asia ',

]}
,

usrecruitment: {
type: String,
label: "US Recruitment Status: ",


  allowedValues: [ 'Wanting ',
   'Sensitive to TZ/Interested ',
   'Casual ',
   'Averse ',
   'Closed ',

]}
,

rurecruitment: {
type: String,



  allowedValues: [ 'Wanting ',
   'Sensitive to TZ/Interested ',
   'Casual ',
   'Averse ',
   'Closed ',

]}
,

eurecruitment: {
type: String,
label: "EU Recruitment Status/Interested: ",


  allowedValues: [  'Wanting ',
   'Sensitive to TZ/Interested ',
   'Casual ',
   'Averse ',
   'Closed ',
 ]},


aurecruitment: {
type: String,
label: "AU Recruitment Status: ",


  allowedValues: [ 'Wanting ',
   'Sensitive to TZ/Interested ',
   'Casual ',
   'Averse ',
   'Closed ',

]}
,

//SRP checkboxes for full ]}t), doctrinal

srpnonop: {
type: String,
label: "SRP for non-ops: ",


  allowedValues: [ 'Logisti]}cs ',
   'Doctrine ',
   'General ',
   'None ',

]},

srpop: {
  type: String,
  label: "SRP for ops: ",


    allowedValues: [ 'Logistics ',
     'Doctrine ',
     'General ',
     'None ',

  ]}
,

opsattitude: {
  type: String,
  label: "Ops stature: ",

  allowedValues: [
   'Voluntery ',
   'Obligatory ',
    '100% tax ',
   'Disciplinary Awoxing ',
 ]},

incometax: {
  type: String,
  label: "Member taxation to further corporate wallet (not game engine taxation specific ai. taxing loot), indicates corporate sponsoring- SRP/Logistics/Infrastructure: ",


    allowedValues: [ 'Unappetizing taxation ',
     'Amicable corporate taxation ',
     'Helpful/civic levels of taxation ',
     'Nonexistent player subsistence of corp  ',

  ]}
,

//checkboxes for capitals and supercapital attitude

incomegeneration: {
  type: String,
  label: "Degree of corporate programs or attitude towards carebearing: ",


    allowedValues: [ 'Nurturing sponsorship of members ',
     'Yielding to member subsistence ',
     'Lukeworm to members ',
     'Uninterested ',

  ]}
}));

if (Meteor.isServer) {
  Corpforms.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
