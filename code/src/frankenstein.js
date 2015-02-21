import { Injector } from 'di';
import React from 'react';
import 'whatwg-fetch';
import Router from './Router';

let injector = new Injector([]);
let router  = injector.get(Router);

router.init();

