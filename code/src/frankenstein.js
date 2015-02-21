import { Injector } from 'di';
import Frankenstein from './monsters/Frankenstein';

let injector = new Injector([]);
injector.get(Frankenstein);
