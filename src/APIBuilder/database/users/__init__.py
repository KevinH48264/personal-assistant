from sqlalchemy import Column, String, Integer
from database import Base, db_session
from random import randint

class users(Base):

    params = [ 'emailId', 'name',]

    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, nullable=True, unique=True)
    emailId = Column(String, primary_key=False, nullable=True, unique=True)
    name = Column(String, primary_key=False, nullable=True, unique=True)

    def __init__(self, emailId,name):
        
        self.emailId = emailId
        self.name = name

        # set the id of the object to a random value
        # using a range unlikely to collide with other ids
        self.id = randint(0, 1000000)

    def __repr__(self):
        return '[users %r]' %self.id

    def __iter__(self):
        
        yield 'emailId', self.emailId
        yield 'name', self.name

    def __getitem(self, item):
        object_as_dict = dict(self)
        if item in object_as_dict:
            return object_as_dict[item]
        return None

def isValidusers(obj_id):
    try:
        return users.query.filter(users.id==obj_id).one_or_none() is not None
    except Exception:
        return False

def createusers(*args):
    if not isValidusers(args[0]):
        new_obj = users(*args)
        db_session.add(new_obj)
        db_session.commit()
        return new_obj
    return dict() # an empty dict in case you are using **{} on this function's output

def readusers(queries):
    attr = val = ""
    try:
        filter_list = []
        for attr, val in queries.items():
            filter_list.append(getattr(users, attr) == str(val))
        users_list = users.query.filter(*filter_list).all()
        return users_list if len(users_list) > 1 else users_list[0]
    except Exception as e:
        print("An exception occurred with the following details:\n{}".format(str(e)))
        print("Attribute: {}\tValue: {}\n".format(attr, val))
        return None    

def updateusers(obj_id, **kwargs):
    if not isValidusers(obj_id):
        return False

    retrieved_object = readusers({"id":obj_id})

    for key, value in kwargs.items():
        if key in users.params:
            
            if key == 'emailId':
                retrieved_object.emailId = value
            if key == 'name':
                retrieved_object.name = value

    db_session.commit()
    return True

def deleteusers(obj_id):
    if not isValidusers(obj_id):
        return False

    retrieved_object = readusers({"id":obj_id})

    db_session.delete(retrieved_object)
    db_session.commit()
    return True

