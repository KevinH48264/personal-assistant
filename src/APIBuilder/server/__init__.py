from flask import render_template, Blueprint, jsonify, send_from_directory, request, session
from server.Kit import *
import os
import time
import json

pages = Blueprint('pages', __name__)

"""Landing Page HTML/CSS"""
@pages.route("/", methods=['GET'])
def pre_ship():
    return render_template("index.html")
    #TO DO: Select correct html file, index.html is for testing react app
    # return render_template("index.html", token="Hello Flask+React")