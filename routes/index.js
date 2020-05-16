const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const fighterRoutes = require('./fighterRoutes');
const fightRoutes = require('./fightRoutes');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api/users', userRoutes);
    app.use('/api/fighters', fighterRoutes);
    app.use('/api/fights', fightRoutes);
    app.use('/api/auth', authRoutes);
  };
