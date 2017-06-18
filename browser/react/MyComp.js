const React = require('react');

class MyComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nbrVote : 0
        }

         this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Vote")
        this.setState(prevState => ({
        nbrVote: prevState.nbrVote + 1
        }));
    }

    render() {
        return (
        <div className="myComp">
            <h2>Say Hello to {this.props.name}</h2>
            <img className="img" src={this.props.name === "puppy1" ? './puppy2.jpg' : './puppy1.jpg' } alt="presentation"/>
            <br/>
            <input type="button" value="Vote" onClick={this.handleClick}/>
            <br/>
            <p>Nombre de votes : { this.state.nbrVote }</p>
        </div>
        );
    }
}

module.exports = {MyComp : MyComp};
