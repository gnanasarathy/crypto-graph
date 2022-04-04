from flask import Flask, render_template, request, redirect
import json
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template('index.html')


j = [{1:"hello"}, {2:"hi"}]

js = json.dumps(j)
@app.route("/file", methods=["GET","POST"])
def file():
    return js


if __name__ == "__main__":
    app.run(debug=True, threaded=True)
