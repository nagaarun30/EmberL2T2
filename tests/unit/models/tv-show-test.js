import { module, test } from 'qunit';
import { setupTest } from 'ember-l2-t2/tests/helpers';

module('Unit | Model | tv show', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('tv-show', {});
    assert.ok(model);
  });
});
