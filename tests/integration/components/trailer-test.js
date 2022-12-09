import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-l2-t2/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trailer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Trailer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Trailer>
        template block text
      </Trailer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
