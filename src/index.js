import loadWasm from './lib.rs'

function component(innerHtml) {
  var element = document.createElement('div')
  element.innerHTML = innerHtml
  return element
}

loadWasm().then(result => {
  const add = result.instance.exports['add']
  document.body.appendChild(component(`Result of Wasm add(3, 5): ${add(3, 5)}`))
})
