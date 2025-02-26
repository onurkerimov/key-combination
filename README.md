# key-combination
key-combination is a plugin that lets you easily define `keydown`, `keypress`, `keyup` listeners for keys and key combinations. You can:
```js
let listener = keyCombination('keydown', {
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
keyCombination('keydown', {
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

## API

The order of modifier keys must be `alt`, `ctrl`, `shift`, then the main key. For instance: `ctrl_shift_p` is correct. **Invalid**: `shift_ctrl_p` or `control_shift_p`


| Task                    |   |
|-------------------------|---|
| Initialization          |   `keyCombination(element: Object, eventName: String, rulesObject: Object)` |
| Add rule dynamically |  `.addRule({ruleName: () => callbackFunction})`  |
|   Remove rule dynamically    | `.removeRule(RuleName)`  |
| Remove all listeners  | `.destroy()`  |

