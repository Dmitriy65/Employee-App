const fs = require('fs').promises;

exports.updateUserRole = async (req, res) => {
  try {
    const userId = +req.query.id;

    const updatedUserRole = await updateRole(userId, req.body);

    res.status(204).json({
      status: 'role was updated',
      data: updatedUserRole
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {

    const queryId = +req.query.id;
    const newProfileValues = req.body;

    const json = JSON.parse(await fs.readFile("./data/profile.json", 'utf-8'));

    const { profile: { employeeID }, profile } = json;

    await updateProfile(newProfileValues, profile);

    if (queryId !== employeeID)
      throw Error('can`t find profile id');
    
    res.status(204).send();
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getUserProfile = async (req, res) => {
  try {

    const paramId = +req.query.id;

    const userProfile = JSON.parse(await fs.readFile("./data/profile.json", 'utf-8'));

    const { profile: { employeeID } } = userProfile;

    if (paramId !== employeeID) throw Error('can`t find profile id');

    res.status(200).json({
      status: 'success',
      data: userProfile
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {

    const users = JSON.parse(await fs.readFile(`./data/data.json`, 'utf-8'));

    res.status(200).json({
      status: 'success',
      data: users
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'cant get users'
    });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { users } = JSON.parse(await fs.readFile(`./data/data.json`, 'utf-8'));

    const loggedUser = users.find(user => {
      return user.email === email && user.password === password;
    });

    if (!loggedUser) throw Error('User is not registered in the system!');

    res.status(200).json({
      status: 'success',
      isLogged: true,
      data: loggedUser
    });
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      isLogged: false,
      message: err.message
    });
  }
}


//helper functions for controllers actions
async function updateProfile(newValues, profile) {

  newValues.map(value => value.name)
    .forEach((key, i) => profile[key] = newValues[i].value);

  await fs.writeFile("./data/profile.json", JSON.stringify({ profile }));
}

async function updateRole(id, { userRoleKey, userRoleValue }) {
  try {
    const { users } = JSON.parse(await fs.readFile("./data/data.json", 'utf-8'));

    switch (userRoleKey) {
      case 'addressBookRole':
        users[id - 1][userRoleKey] = userRoleValue;
        users[id - 1]['isAdmin'] = false;
        break;
      case 'isAdmin':
        users[id - 1][userRoleKey] = userRoleValue;
        users[id - 1]['addressBookRole'] = '';
        break;
      case 'vacationRole':
        users[id - 1][userRoleKey] = userRoleValue;
        break;
    }

    await fs.writeFile("./data/data.json", JSON.stringify({ users }));
    return { user: users[id - 1] };

  } catch (err) {
    return err;
  }
}