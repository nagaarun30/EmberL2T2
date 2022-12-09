import { module, test } from 'qunit';
import { setupTest } from 'ember-l2-t2/tests/helpers';

module('Unit | Service | index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:index');
    assert.ok(service);
  });
});
