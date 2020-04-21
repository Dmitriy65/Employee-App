const isContainsName = (person, searchQuery) => {
  const inputName = searchQuery.toLowerCase();

  const nameKeysVariants = ['firstName', 'firstNativeName', 'lastName', 'lastNativeName'];
  return nameKeysVariants.some(key => {
    const personName = person[key].toString().toLowerCase();
    return personName.includes(inputName);
  });
};

const filterUsers = (users, query) => {
  return users.filter(person => isContainsName(person, query));
};

export default filterUsers;