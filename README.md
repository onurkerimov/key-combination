# KeyboardListener.js
KeyboardListener.js is a plugin that lets you easily define `keydown`, `keypress`, `keyup` listeners. With KeyboardListener.js, you can:
```js
let listener = new KeyboardListener(window, 'keydown', {
  ctrl_space(e) {
    // Listens to Ctrl+Space keystrokes
  }
})
// Then, remove the listener
listener.destroy()
```
While in vanilla JS, the same task is way confusing:
```js
let ctrlSpaceListener = (e) => {
  if(e.key === ' ' &&
    altKey.key === false &&
    ctrlKey.key === true &&
    shiftKey.key === false &&
  ) {
    // Listens to Ctrl+Space keystrokes
  }
}
window.addEventListener('keydown', ctrlSpaceListener) 
// Then, remove the listener
window.removeEventListener('keydown', ctrlSpaceListener) 
```
You can declare as many keystroke listeners as you want 
```js
new KeyboardListener(window, 'keydown', {
  tab(e) {
    e.preventDefault()
    console.log('tab key is pressed')
  },

  shift_tab(e) {
    e.preventDefault()
    console.log('shift+tab is pressed')
  }
})
```
## Notes
- Listener names in the rules object
## API
| Task                    |   |
|-------------------------|---|
| Initialization          |   `new KeyboardListener(element: Object, eventName: String, rulesObject: Object)` |
| Add rule dynamically    | `.destroy()`  |
| Remove rule dynamically |  `.addRule({ruleName: () => callbackFunction})`  |
| Remove all listeners    | `.removeRule(RuleName)`  |

#### `new KeyboardListener(element: Object, eventName: String, rulesObject: Object)`
#### `.destroy()`
#### `.addRule({ruleName: () => callbackFunction})`
#### `.removeRule(RuleName)`
