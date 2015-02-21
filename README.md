# Webpack Example

### Install Webpack

`npm install webpack-dev-server -g`


### Configure Webpack

```javascript
module.exports = {
	entry: './src/frankenstein.js',
	output: {
		filename: 'frankenstein.js'
	}
};
```

### Make A Source File

`vim src/frankenstein.js`
```javascript
console.log('It\'s Alive');
```

### Run Webpack Development Server

`webpack-dev-server`

### View in [Browser](http://localhost:8080/frankenstein)

# Integrating Babel

### Install babel-loader

`npm install --save-dev babel-loader`

### Configure Webpack

```javascript
module.exports = {
	entry: './src/frankenstein.js',
	output: {
		filename: 'frankenstein.js'
	},
  module: {
    loaders: [
      { test:  /(src)(.+)\.js$/, loader: 'babel-loader?experimental'}
    ]
  }
};
```

### Make a Module

*src/monsters/Frankenstein.js*
```javascript
class Frankenstein {
	constructor() {
		console.log(`It’s Alive`);
	}
}

export default Frankenstein;
```

### Import The Module

*src/frankenstein.js*
```javascript
import Frankenstein from ‘./monsters/Frankenstein’;

new Frankenstein();
```

### Restart Webpack

`webpack-dev-server`

### View in [Browser](http://localhost:8080/frankenstein)

# Angular DI

### Install Angular DI

`npm install di@2.0.0-pre-14 —save`

### Install Imports Loader

`npm install imports-loader —save-dev`

### Configure Webpack

```javascript
module.exports = {
	entry: './src/frankenstein.js',
	output: {
		filename: 'frankenstein.js'
	},
  module: {
    loaders: [
      { test:  /(src)(.+)\.js$/, loader: 'babel-loader?experimental'},
      { test: /traceur-runtime/, loader: 'imports?this=>window' }
    ]
  }
};
```

### Instantiate an Injector

*src/frankenstein.js*

```javascript
import { Injector } from 'di';
import Frankenstein from './monsters/Frankenstein';

let injector = new Injector([]);
injector.get(Frankenstein);
```

4. Restart Webpack

`webpack-dev-server`

5. View in [Browser](http://localhost:8080/frankenstein)
