const React = require('react');
const {MyComp} = require('./MyComp');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is a Pup Match ! Vote for the Best</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsum sunt, qui harum blanditiis dolor quis voluptatibus maiores, explicabo aut ducimus, quo nostrum odio mollitia autem illo porro ex est.</p>
        <MyComp name="puppy1"/>
        <MyComp name="puppy2"/>
      </div>
    );
  }
}

module.exports = {App:App};

