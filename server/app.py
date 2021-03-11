from flask import Flask

app = Flask(__name__)

@app.route("/index")
def index(): 
    return "hello world"

@app.route("/add-tweet")
def addTweet():
    tweet = request.form.get("tweet")
    if tweet: 
        return tweet
    return "Unable to get tweet"

if __name__ == "__main__": 
    app.run(port=4000, debug=True)