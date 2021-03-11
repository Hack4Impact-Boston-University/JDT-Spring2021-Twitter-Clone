from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/twitter-db"
mongo = PyMongo(app)

@app.route("/index")
def index(): 
    return "Welcome to Twitter"

@app.route("/add-tweet", methods=["POST"])
def addTweet():
    tweet = request.form.get("tweet")
    if tweet: 
        mongo.db.tweets.insert_one({"tweet": tweet})
        return jsonify(tweets=getTweets())
    return "Unable to get tweet"


def getTweets(): 
    allTweets = mongo.db.tweets.find()
    ret = [{"tweet": tweet["tweet"], "id": str(tweet["_id"])} for tweet in allTweets]
    return ret  

if __name__ == "__main__": 
    app.run(port=4000, debug=True)