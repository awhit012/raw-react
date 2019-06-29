class Form extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    let newPlayer = {}
    newPlayer.name = e.target.firstChild.value
    let newPlayerDiv = React.createElement(PlayerDiv, newPlayer)
    let ulEl = document.querySelector('ul')
    let newLi = document.createElement('li')
    ulEl.appendChild(newLi)
    ReactDOM.render(newPlayerDiv, newLi)
  }

  render() {
    return(
       React.createElement('form', {onSubmit: (e) => {this.handleSubmit(e) }}, 
        React.createElement('input', {type: 'text'}),
        React.createElement('input', {type: 'submit', value: 'submit'})
      ))
  }
}