//////////////////////////////
//
//	notifications template
//
//////////////////////////////
Template.notifications.helpers({
	// List of unread notifications for this user.
	notifications : function() {
		return Notifications.find({userId: Meteor.userId(), read:false});
	},
	// Number of unread notifications for this user.
	notificationCount : function() {
		return Notifications.find({userId: Meteor.userId(), read:false})
							.count();
	}

});



//////////////////////////////
//
//	notificationItem template
//
//////////////////////////////
Template.notificationItem.helpers({
	// Return path to the page for the notification
	notificationPostPath : function() {
		return this.postId;
		return Router.routes.postPage.path({_id: this.postId});
	}
});

Template.notificationItem.events({
	"click a" : function() {
		Notifications.update(this._id, {$set: {read:true}});
	}

});
