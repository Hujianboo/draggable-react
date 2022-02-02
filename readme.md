# draggable-react

## Introduction
A react hook of dragging specified element
https://img.shields.io/npm/v/doodle-draggable

## Install
Install draggable-react by using
``` 
  npm i doodle-draggable
```
or
```
  yarn add doodle-draggable
```
## Usage 

```javascript
import useDraggable from 'doodle-draggable'
....
const {target}  = useDraggable()
return (
  <>
    ...
    <div ref= {target} className='specified'>
    </div>
    ...
  <>
)
```