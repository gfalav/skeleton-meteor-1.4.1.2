FlowRouter.route('/', {
	name: "home",
  	action: function() {
    	BlazeLayout.render("mainLayoutTemplate", {content: "homeTemplate"});
  	}
});

AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultTemplate: 'accounts',
    defaultLayout: 'mainLayoutTemplate',
    defaultLayoutRegions: { },
    defaultContentRegion: 'content'
});