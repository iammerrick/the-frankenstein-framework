import { Injector } from 'di';
import React from 'react';
import FrankensteinComponent from './monsters/FrankensteinComponent';

let injector = new Injector([]);
let Frankenstein = injector.get(FrankensteinComponent);

React.render(<Frankenstein />, document.body);

