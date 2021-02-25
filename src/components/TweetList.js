import React from 'react' 
import Tweet from '../components/Tweet'
import '../App.css'

class TweetList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            displayText: "", 
            tweets: []
        }
    }


    changeStateName = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = () => {
        this.setState({displayText: ""})
        this.setState({tweets: [...this.state.tweets, this.state.name]})
    }

    renderItems = () => {
        return this.state.tweets.map(tweet => (
            <Tweet name={tweet}/>
        ))
    }

    render(){
        return (
            <div className="tweet-list-container">
                <div>
                    <h1>Welcome to Twitter!</h1>
                </div>
                <input type="text" value={this.state.name} onChange={this.changeStateName}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <h1>{this.state.displayText}</h1>
                {this.renderItems()}
            </div>
        )
    }
}

export default TweetList