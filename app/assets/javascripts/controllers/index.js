TicTacToe.IndexController = Ember.ArrayController.extend({
  winners: [[0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]],

 
  //Builds the grid          
  emptyBoxes: function() {
      return ["","","","","","","","",""].map(function(){
      return TicTacToe.Box.create();
    });
  },

  clear: function() {
    this.set('model', this.emptyBoxes());
  },

  //Defines an available square to move to
  openSquare: function() {
    return this.get('content').rejectProperty('selected');
  }.property('@each.selected'),

  userPicks: function() {
    return this._location('userSelected');
  }.property('openSquare'),

  computerPicks: function() {
    return this._location('computerSelected');
  }.property('openSquare'),

  selectBox: function(box) {
    if (box.get('selected')) { return; }
    box.set('userSelected', true);
    if (this.userWins()) {
      this._notify("Congratulations. You win!");
    } else if(!this.get('openSquare').length) {
      this._notify("A tie. Better luck next time!");
    } else {
      this.performMove();
    }
  },

  userWins: function() {
    return this._winningCondition(this.get('userPicks'));
  },

  computerWins: function() {
    return this._winningCondition(this.get('computerPicks'));
  },

  performMove: function() {
    var available = this.get('openSquare');
    var selected = this.selectMove();
    available[selected].set('computerSelected', true);
    if (this.computerWins()) {
      this._notify("You lose. Why not give it another try?");
    }
  },

  //AI move selection
  selectMove: function() {
    var available = this.get('openSquare');
    return Math.floor((available.get('length') * Math.random()));
  },

  _location: function(loc) {
    return this.get('content').map(function(item, index){
      if(item.get(loc)){ return index; }
    });
  },

  _winningCondition: function(indices) {
    return this.get('winners').some(function(match) {
      return Ember.EnumerableUtils.intersection(match, indices).length === 3;
    });
  },

  _notify: function(msg) {
    Ember.run.next(function(){
      alert(msg);

    });
  }
});