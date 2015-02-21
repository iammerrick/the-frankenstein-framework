# Webpack Example

1. Install Webpack

`npm install webpack-dev-server -g`


2. Configure Webpack

```javascript
module.exports = {
	entry: ‘./src/frankenstein.js’,
	output: {
		filename: “frankenstein.js”
	}
};
```

3. Make A Source File

`vim src/frankenstein.js`
```javascript
console.log(‘It\’s Alive’);
```

4. Run Webpack Development Server

`webpack-dev-server`

5. View in [Browser](http://localhost:8080/frankenstein)

# Integrating Babel

1. Install babel-loader

`npm install --save-dev babel-loader`

2. Configure Webpack

```javascript
module.exports = {
	entry: './src/frankenstein.js',
	output: {
		filename: 'frankenstein.js'
	},
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
```

3. Make a Module

*src/monsters/Frankenstein.js*
```javascript
class Frankenstein {
	constructor() {
		console.log(`It’s Alive`);
	}
}

export default Frankenstein;
```

4. Import The Module

*src/frankenstein.js*
```javascript
import Frankenstein from ‘./monsters/Frankenstein’;

new Frankenstein();
```

4. Restart Webpack

`webpack-dev-server`

5. View in [Browser](http://localhost:8080/frankenstein)

# Angular DI

1. Install Angular DI

`npm install di@2.0.0-pre-14 —save`

2. Install Imports Loader

`npm install imports-loader —save-dev`

3. Configure Webpack

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

4. Instantiate an Injector

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
