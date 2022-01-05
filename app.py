from flask import Flask, render_template, request
from write import write_app
import os

app = Flask(__name__) 
app.register_blueprint(write_app, url_prefix="")

app.config["SHEET_UPLOAD"] = "/Users/sam/Python-Excel-Project/static/Sheets"
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["XLSX"]
app.config["SHEET_STORAGE"] = "/Users/sam/Python-Excel-Project/static/Sheets"

print(__file__)


@app.route("/")
def index():
    return render_template("index.html")

"""
@app.route("/fill", methods=['POST'])
def fill_data(): 
    print("big bruh.. ")
    if request.files:
        file = request.files['file_1']
        file.save(os.path.join(app.config["SHEET_UPLOAD"], file.filename))

        print("Image saved")

    return render_template("write.html")

"""
    

if __name__ == "__main__":
    app.run()