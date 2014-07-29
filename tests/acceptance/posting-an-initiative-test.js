import startApp from 'bdd-tutorial/tests/helpers/start-app';
import Resolver from 'bdd-tutorial/tests/helpers/resolver';

var App;

suite('Posting an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test('Successfully', function(){
  visit('/').then(function() {
    click( $("a:contains('Start a new initiative')") ).then(function() {
      expect(currentPath()).to.equal('/initiatives/new');
    });
  });
});