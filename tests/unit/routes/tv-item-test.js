import { module, test } from 'qunit';
import { setupTest } from 'ember-l2-t2/tests/helpers';

module('Unit | Route | TvItem', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tv-item');
    assert.ok(route);
  });
});
