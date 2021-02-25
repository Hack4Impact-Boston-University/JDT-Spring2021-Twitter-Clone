import React from 'react' 


class TweetList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            displayText: ""
        }
    }


    changeStateName = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = () => {
        this.setState({displayText: this.state.name})
    }

    render(){
        return (
            <div>
                <p>Enter Tweet Here</p>
                <input type="text" value={this.state.name} onChange={this.changeStateName}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <h1>{this.state.displayText}</h1>
            </div>
        )
    }
}

export default TweetList