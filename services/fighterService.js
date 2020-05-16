const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
  getAllFightersFromDb() {
    const item = FighterRepository.getAll();

    if (!item) {
      return null;
    }
    return item;
  }

  getFighterFromDb(id) {
    const search = (fighter) => fighter.id === id;
    const item = this.search(search);

    if (!item) {
      return null;
    }
    return item;
  }

  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  createNewFighter(userObj) {
    return FighterRepository.create(userObj);
  }
}

module.exports = new FighterService();
