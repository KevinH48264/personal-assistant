from flask import Flask
from server.todo import blueprint_todo
from server.users import blueprint_users
from server import pages

#from server.swagger import blueprint_swagger
app = Flask(__name__, template_folder='../../public')

if __name__ == "__main__":
    SERVER_ROOT = "192.168.56.1"
    app.debug = True

    # Register all the routes to the app
    app.register_blueprint(blueprint_todo)
    app.register_blueprint(blueprint_users)
    app.register_blueprint(pages)

    #app.register_blueprint(blueprint_swagger, url_prefix="/swagger")

    # Startup the connection to the database
    from database import init_db
    init_db()

    # Begin the actual application, serving it at this port number
    app.run(host=SERVER_ROOT, port=3000)

