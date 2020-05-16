const {UserRepository} = require('../repositories/userRepository');


class UserService {
  // TODO: Implement methods to work with user
  getAllUsersFromDb() {
    const item = UserRepository.getAll();

    if (!item) {
      return null;
    }
    return item;
  }

  getUserFromDb(id) {
    const search = (user) => user.id === id;
    const item = this.search(search);

    if (!item) {
      return null;
    }
    return item;
  }

  createNewUser(userObj) {
      return UserRepository.create(userObj);
  }

  updateUser(id, dataToUpdate) {
    return UserRepository.update(id, dataToUpdate);
  }

  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

module.exports = new UserService();
