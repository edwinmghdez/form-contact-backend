const UserRepository = require("../repositories/userRepository");

class UserService {
  async index() {
    return UserRepository.index();
  }

  async show(id) {
    return UserRepository.show(id);
  }

  async store(payload) {
    return UserRepository.store(payload);
  }

  async update(id, payload) {
    return UserRepository.update(id, payload);
  }

  async delete(id) {
    return UserRepository.delete(id);
  }
}

module.exports = new UserService();
