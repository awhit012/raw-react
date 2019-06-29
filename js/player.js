class PlayerDiv extends React.Component {
  render() {
    return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.name),
        React.createElement('h4', {}, this.props.position),
        React.createElement('a', {href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {}, this.props.description)
      )
    )
  }
}