export class usersLib {
  static getReqAttrAndTypes() {
    return { emailId: 'string', name: 'string' }
  }


  static async create(emailId, name) {
    // verify parameters and create data to send to the route
    const arrayOfAttributes = 'emailId,name'.split(',')
    const routeGroupObj = {}
    for (let i = 0; i < arguments.length; i++) {
      if (
        typeof arguments[i]
                !== usersLib.getReqAttrAndTypes()[arrayOfAttributes[i]]
      ) {
        throw `${arrayOfAttributes[i]} expects ${usersLib.getReqAttrAndTypes()[arrayOfAttributes[i]]}, but recieved ${typeof arguments[i]}`
      }
      routeGroupObj[arrayOfAttributes[i]] = arguments[i]
    }
    // Create and set id property to 0, currently required for the route
    routeGroupObj.appToken = '7569356f-2539-4ac0-93e8-ca83ef0235e3'

    // request to server
    const resStream = await fetch('/createusers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(routeGroupObj),
    })
      .catch(err => {
        console.log('Error:', err)
        return false
      })

    const res = await resStream.json()

    return {
      createdObj: res,
      status: resStream.status === 200,
    }
  }


  static async read(attributes_dict) {
    for (const [attr_name, attr_val] of Object.entries(attributes_dict)) {
      if (typeof attr_val !== usersLib.getReqAttrAndTypes()[attr_name]) {
        throw 'Bad Params! [Attribute Type Error]'
      }
    }
    const result_stream = await fetch('/readusers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appToken: '7569356f-2539-4ac0-93e8-ca83ef0235e3', filters: attributes_dict }),
    })
      .catch(err => {
        console.log('Error: ', err)
        return false
      })
    const res = await result_stream.json()

    return {
      readedObj: res,
      status: result_stream.status === 200,
    }
  }


  static async update(id, attributes_dict) {
    for (const [attr_name, attr_val] of Object.entries(attributes_dict)) {
      if (!usersLib.getReqAttrAndTypes()[attr_name]) { throw `${attr_name} is not an attribute of users` }

      if (typeof attr_val !== usersLib.getReqAttrAndTypes()[attr_name]) {
        throw `[Attribute Type Error] ${attr_name} expected ${usersLib.getReqAttrAndTypes()[attr_name]}, but received ${typeof attr_val}`
      }
    }
    const updateAttributes = {}
    updateAttributes.id = id
    updateAttributes.data = attributes_dict
    attributes_dict.appToken = '7569356f-2539-4ac0-93e8-ca83ef0235e3'
    const result_stream = await fetch('/updateusers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateAttributes),
    })
      .catch(err => {
        console.log('Error: ', err)
        return false
      })
    return result_stream.status === 200
  }


  static async delete(id) {
    if (typeof (id) !== 'number') throw `[Attribute Type Error] ID expected of type 'number', but received of type ${typeof id}`

    const resStream = await fetch('/deleteusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, appToken: '7569356f-2539-4ac0-93e8-ca83ef0235e3' }),
    })
      .catch(err => {
        console.log('Error: ', err)
        return false
      })
    return resStream.status === 200
  }
}
