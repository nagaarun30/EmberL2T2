import { helper } from '@ember/component/helper';

export default helper(function eq(positional, named) {
  const [deg] = positional;
  const { value = '300' } = named;
  console.log(value);
});
