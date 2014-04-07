TicTacToe.Box = Ember.Object.extend({
  selected: Ember.computed.or('userSelected', 'computerSelected')
});
