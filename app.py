from flask import Flask, render_template, request, redirect
import json
from flask_cors import CORS
from predict import prepareData, reloadJson
app = Flask(__name__)
cors = CORS(app)


@app.route("/", methods=["GET", "POST"])
def index():
    reloadJson()
    return render_template('index.html')

@app.route("/file", methods=["GET","POST"])
def file():
    json_file = open('sample.json')
    return json.load(json_file)


if __name__ == "__main__":
    app.run(debug=True, threaded=True)
