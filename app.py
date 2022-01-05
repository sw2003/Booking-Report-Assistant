from flask import Flask, render_template, request
from write import write_app
import os

app = Flask(__name__) 
app.register_blueprint(write_app, url_prefix="")


root_directory = os.path.dirname(os.path.abspath(__file__))

app.config["SHEET_UPLOAD"] = "{}/static/Sheets".format(root_directory)
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["XLSX"]
app.config["SHEET_STORAGE"] = "{}/static/Sheets".format(root_directory)




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