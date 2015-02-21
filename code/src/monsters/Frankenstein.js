import {annotate, TransientScope, Inject} from 'di';
class Frankenstein {
  constructor(options) {
    this.name = options.login; 
    this.location = options.location;
    this.blog = options.blog;
    this.avatar_url = options.avatar_url;
  }
}
annotate(Frankenstein, new TransientScope());
annotate(Frankenstein, new Inject('options'));

export default Frankenstein;
