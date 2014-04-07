TicTacToe.GamesController = Ember.ObjectController.extend ({
	actions: {
	  save: function() {
	    this.content.save().then(function() {
	      this.transitionToRoute('index');
	    },
	};
};
});