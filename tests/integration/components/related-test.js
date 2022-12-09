import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-l2-t2/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | related', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Related />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Related>
        template block text
      </Related>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
