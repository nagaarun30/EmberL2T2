import { module, test } from 'qunit';
import { setupTest } from 'ember-l2-t2/tests/helpers';

module('Unit | Controller | movies', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:movies');
    assert.ok(controller);
  });
});
