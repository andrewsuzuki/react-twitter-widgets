import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/widgets.js');
}

configure(loadStories, module);
