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

// frontend (form / user sees) - React
// backend (server / database) - don't see this  

// axios (library for sending HTTP Request)

// HTTP Requests: GET / POST Methods

// Get - get data from server (google.com/search?=dogs)
// Post - save some data (sign up for gmail)