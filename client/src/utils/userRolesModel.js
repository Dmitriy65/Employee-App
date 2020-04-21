class User {
  constructor(firstName, lastName, profileId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLoggedIn = true;
    this.canView = true;
    this.canViewExtraInfo = false;
    this.canEditData = false;
    this.canEditRole = false;
    this.profileId = profileId;
    this.role = this.constructor.name;
  }

}

class Editor extends User {
  constructor(firstName, lastName, profileId) {
    super(firstName, lastName, profileId);
    this.canViewExtraInfo = true;
    this.canEditData = true;
    this.role = this.constructor.name;
  }
}

class Admin extends Editor {
  constructor(firstName, lastName, profileId) {
    super(firstName, lastName, profileId);
    this.canEditRole = true;
    this.role = this.constructor.name;
  }
}

const chooseUserModel = data => {
  const { isAdmin, addressBookRole, firstName, lastName, profileId } = data;

  let currentUser;
  if (!!isAdmin) {
    currentUser = new Admin(firstName, lastName, profileId);
  } else if (addressBookRole === 'EMPLOYEE') {
    currentUser = new User(firstName, lastName, profileId);
  } else if (addressBookRole === 'HR') {
    currentUser = new Editor(firstName, lastName, profileId);
  }

  return currentUser;
};

export {
  chooseUserModel
}
