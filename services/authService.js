const UserService = require('./userService');

class AuthService {
    login(userData) {
        const {email, password} = userData;
        const search = (user)  => (user.email === email && user.password === password);
        const user = UserService.search(search);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }
}

module.exports = new AuthService();
