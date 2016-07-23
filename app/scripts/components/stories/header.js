import React from 'react';
import Header from '../header.js';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Header', module)
  .add('Main', () => (
    <Header />
  ));
