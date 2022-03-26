const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/index');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers.js');
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//when you have front-end files like images, stylesheets, and js files, its good to have express.js middleware function that can take all of these files and seerves them statically
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
  });

  