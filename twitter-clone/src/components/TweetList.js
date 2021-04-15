import React from 'react' 
import Tweet from '../components/Tweet'
import '../App.css'
import axios from 'axios';

class TweetList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", 
            displayText: "", 
            tweets: []
        }
    }

    componentDidMount() {
        axios.get('/get-all-tweets').then(resp => {
            const retrievedTweets = resp.data.tweets;
            retrievedTweets.forEach(tweet => {
                this.setState({tweets: [...this.state.tweets, tweet.tweet]});
            })
        })
    }

    urlEncode = (data) => {
        var urlEncodedString = "";
        Object.keys(data).forEach(function(key) {
            urlEncodedString += key + "=" + encodeURIComponent(data[key]) + "&";
        });
        return urlEncodedString.slice(0, -1); //remove the trailing '&'
    }

    changeStateName = (event) => {
        this.setState({name: event.target.value})
    }

    handleSubmit = () => {
        this.setState({displayText: ""})
        this.setState({tweets: [...this.state.tweets, this.state.name]}); 
        axios.post('/add-tweet', this.urlEncode({"tweet": this.state.name})).then(resp => {
            console.log(resp);
        })
        console.log('here')

    }

    renderItems = () => {
        return this.state.tweets.map(tweet => (
            <Tweet nameOfTweet={tweet}/>
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
