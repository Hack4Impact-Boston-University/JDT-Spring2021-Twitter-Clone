import React from 'react'; 


class Tweet extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="tweet-container">
                <h1>{this.props.nameOfTweet}</h1>
            </div>
        )
    }
}

export default Tweet; 