import random

import pyjokes
from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)


def replace_double_quotes(text):
    return text.replace('"', "'")


def laugh():
    candidates = ["hm hm hm",
                  "ha ha",
                  "ha",
                  "ha ha ha",
                  "hahaha, hm hm hm, hm hm hm",
                  "hmm",
                  "ha, ha. heh, heh hou"]
    return random.choice(candidates)


@app.route('/')
def hello_world():
    joke = replace_double_quotes(pyjokes.get_joke())
    return render_template('index.html', joke=joke, laugh=laugh())


if __name__ == '__main__':
    app.run(debug=True)
