from flask import Flask, render_template

app = Flask('_name__')


@app.route('/')
def Index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)