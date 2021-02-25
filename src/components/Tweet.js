import React from 'react'; 


class Tweet extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { name } = this.props; 
        return(
            <div className="tweet-container">
                <h1>{name}</h1>
            </div>
        )
    }
}

export default Tweet; 