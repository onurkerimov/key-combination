export class KeyCombination {
  constructor(eventName, directives) {
    this.eventName = eventName
    this.directives = directives
    if (!directives.unknown) directives.unknown = () => {}

    // Declare the eventListener
    this._callback = e => {
      // Prepare key combination name
      let keyCombination = ''
      if (e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Shift') {
        keyCombination += e.altKey ? 'alt_' : ''
        keyCombination += e.ctrlKey ? 'ctrl_' : ''
        keyCombination += e.shiftKey ? 'shift_' : ''
      }
      let key = e.key.toLowerCase()
      if (key === ' ') key = 'space'
      else if (key === 'control') key = 'ctrl'
      keyCombination += key

      // Send to the corresponding directive
      if (directives[keyCombination]) this.directives[keyCombination](e)
      else this.directives.unknown(e)
    }
    window.addEventListener(this.eventName, this._callback)
  }
  destroy() {
    window.removeEventListener(this.eventName, this._callback)
  }
  addRule(name, fn) {
    this.directives[name] = fn
  }
  removeRule(name) {
    this.directives[name] = undefined
  }
}

export default (eventName, directives) => new KeyCombination(eventName, directives)
