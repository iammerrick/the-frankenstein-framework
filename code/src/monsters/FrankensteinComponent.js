import React from 'react';
import { annotate, InjectLazy }  from 'di';
import Frankenstein from './Frankenstein';

annotate(FrankensteinComponent, new InjectLazy(Frankenstein));
function FrankensteinComponent(createMonster) {
  return React.createClass({
    getInitialState() {
      return {
        loaded: false
      };
    },
    componentWillMount() {
      fetch(`https://api.github.com/users/${this.props.username}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({
            user: createMonster('options', json),
            loaded: true
          });
        });
    },
    render() {
      if (!this.state.loaded) return <div>Loading...</div>;

      return (
        <div>
          <h1>I am {this.state.user.name}!</h1>
          <div>Location: {this.state.user.location}</div>
          <div>Blog: {this.state.user.blog}</div>
          <div><img src={this.state.user.avatar_url} /></div>
        </div>
      );
    }
  });
}

export default FrankensteinComponent;
