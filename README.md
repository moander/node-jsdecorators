## Installation

    npm install --save jsdecorators

## Usage

```js
import * as jsd from 'jsdecorators';

class Test {
  @jsd.restorecwd
  doSomeWork() { 
    
  }

  @jsd.deprecate('Use doSomeWork instead')
  doSomeOtherThing() { 
    
  }
}
```



## Decorators

See [core-decorators](https://github.com/jayphelps/core-decorators.js) for more information about the bundled core decorators.

### restorecwd

Wraps the target in a try/finally and restores process.cwd() to the value it had before the target was invoked.

