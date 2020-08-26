from flask import Flask, jsonify, request, Blueprint
from database.users import *
from server.Kit import *
from config import tokenCheck

blueprint_users = Blueprint('blueprint_users', __name__)

@blueprint_users.route("/createusers", methods = ['POST'])
def createusersRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    # the id parameter does not need checking on object creation
    params_on_create = users.params
    try:
        params_on_create.remove('id')
    except ValueError:
        pass
    if not checkParams(data, *params_on_create):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    new_users = createusers(
        data['emailId'],
        data['name'],)
    if new_users is None:
        return jsonify(**{'message':'Bad Params'}), ErrorCode_ServerError
    return jsonify(**dict(new_users)), ErrorCode_Success


@blueprint_users.route("/readusers", methods = ['POST'])
def readusersRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams

    
    if not checkParam(data, 'filters'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    retrieved_users_list = readusers(**data)
    if retrieved_users_list is None:
        return jsonify(**{'users':''}), ErrorCode_Success
    
    users_json_list = []
    try:
        for users in retrieved_users_list:
            users_json_list.append(dict(users))
        return jsonify(**{'users':users_json_list}), ErrorCode_Success
    except Exception as e:
        if e.__class__.__name__ in ('ValueError', 'TypeError'):
            return jsonify(**{'users':dict(retrieved_users_list)}), ErrorCode_Success
        else:
            print("An exception has occurred!\n{}".format(str(e)))
            return jsonify(**{'message': '{}'.format(str(e))}), ErrorCode_ServerError


@blueprint_users.route("/updateusers", methods = ['POST'])
def updateusersRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    if not checkParam(data, 'id'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    if not (updateusers(int(data['id']), **data)):
        return jsonify(**{'message':'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{}), ErrorCode_Success


@blueprint_users.route("/deleteusers", methods = ['POST'])
def deleteusersRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    if not checkParam(data, 'id'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    if not (deleteusers(int(data['id']))):
        return jsonify(**{'message':'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{}), ErrorCode_Success


if __name__ == "__main__":
    SERVER_ROOT = "127.0.0.1"
    app = Flask(__name__)
    app.debug = True
    app.register_blueprint(blueprint_users)
    app.run(port=3444)

