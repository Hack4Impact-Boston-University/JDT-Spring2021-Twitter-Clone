from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/twitter-db"
mongo = PyMongo(app)
db = mongo.db.tweets
@app.route("/index")
def index(): 
    return "hello world"

@app.route("/add-tweet", methods=["POST"])
def addTweet():
    tweet = request.form.get("tweet")
    if tweet: 
        db.insert_one({"tweet": tweet})
        return tweet
    return "Unable to get tweet"

@app.route("/get-all-tweets", methods=["GET"])
def getAllTweets(): 
    allTweets = db.find()
    ret = []
    for tweet in allTweets: 
        ret.append(
            {
                "id": str(tweet["_id"]), 
                "tweet": tweet["tweet"]
            })
    return jsonify(tweets=ret)

@app.route('/find-tweet', methods=["GET"])
def findTweet():
    query = request.args.get("tweet")
    print(query)
    findTweet = db.find({"tweet": query})
    ret = []
    for tweet in findTweet: 
        ret.append(
            {
                "id": str(tweet["_id"]), 
                "tweet": tweet["tweet"]
            })
    return jsonify(tweet=ret)

if __name__ == "__main__": 
    app.run(port=4000, debug=True)
