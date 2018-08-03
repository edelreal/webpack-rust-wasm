import loadWasm from './lib.rs'

function component() {
  var element = document.createElement('div')
  element.innerHTML = 'Hello world!'
  return element
}

document.body.appendChild(component())

loadWasm().then(result => {
  const add = result.instance.exports['add']
  console.log('Result of add(3, 5)', add(3, 5))
})
