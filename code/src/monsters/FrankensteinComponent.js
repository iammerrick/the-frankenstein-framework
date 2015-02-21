import React from 'react';
import { annotate, Inject }  from 'di';
import Frankenstein from './Frankenstein';

annotate(FrankensteinComponent, new Inject(Frankenstein));
function FrankensteinComponent(monster) {
  return React.createClass({
    render() {
      return <h1>I am {monster.name}!</h1>;
    }
  });
}

export default FrankensteinComponent;
