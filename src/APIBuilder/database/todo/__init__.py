from sqlalchemy import Column, String, DateTime, Integer
from database import Base, db_session
from random import randint

class todo(Base):

    params = [ 'deadline', 'todo',]

    __tablename__ = "todo"
    
    id = Column(Integer, primary_key=True, nullable=True, unique=True)
    deadline = Column(DateTime, primary_key=False, nullable=True, unique=True)
    todo = Column(String, primary_key=False, nullable=True, unique=True)

    def __init__(self, deadline,todo):
        
        self.deadline = deadline
        self.todo = todo

        # set the id of the object to a random value
        # using a range unlikely to collide with other ids
        self.id = randint(0, 1000000)

    def __repr__(self):
        return '[todo %r]' %self.id

    def __iter__(self):
        
        yield 'deadline', self.deadline
        yield 'todo', self.todo

    def __getitem(self, item):
        object_as_dict = dict(self)
        if item in object_as_dict:
            return object_as_dict[item]
        return None

def isValidtodo(obj_id):
    try:
        return todo.query.filter(todo.id==obj_id).one_or_none() is not None
    except Exception:
        return False

def createtodo(*args):
    if not isValidtodo(args[0]):
        new_obj = todo(*args)
        db_session.add(new_obj)
        db_session.commit()
        return new_obj
    return dict() # an empty dict in case you are using **{} on this function's output

def readtodo(queries):
    attr = val = ""
    try:
        filter_list = []
        for attr, val in queries.items():
            filter_list.append(getattr(todo, attr) == str(val))
        todo_list = todo.query.filter(*filter_list).all()
        return todo_list if len(todo_list) > 1 else todo_list[0]
    except Exception as e:
        print("An exception occurred with the following details:\n{}".format(str(e)))
        print("Attribute: {}\tValue: {}\n".format(attr, val))
        return None    

def updatetodo(obj_id, **kwargs):
    if not isValidtodo(obj_id):
        return False

    retrieved_object = readtodo({"id":obj_id})

    for key, value in kwargs.items():
        if key in todo.params:
            
            if key == 'deadline':
                retrieved_object.deadline = value
            if key == 'todo':
                retrieved_object.todo = value

    db_session.commit()
    return True

def deletetodo(obj_id):
    if not isValidtodo(obj_id):
        return False

    retrieved_object = readtodo({"id":obj_id})

    db_session.delete(retrieved_object)
    db_session.commit()
    return True

