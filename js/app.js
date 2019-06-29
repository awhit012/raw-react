const playerElements = players.map( (player) => {
  return React.createElement(PlayerDiv, player)
})  

const rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Players"),
    React.createElement('ul', {}, playerElements),
    React.createElement(Form, {})
  )

ReactDOM.render(rootElement, document.getElementById('react-app'))

