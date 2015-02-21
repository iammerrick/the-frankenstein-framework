import director from 'director';
import {annotate, Inject} from 'di';
import React from 'react';
import FrankensteinComponent from './monsters/FrankensteinComponent';

annotate(Router, new Inject(FrankensteinComponent));
function Router(FrankensteinComponent) {
  return new director.Router({
    '/:username': (username) => {
      React.render(<FrankensteinComponent username={username} />, document.body);
    }
  });
}

export default Router;
