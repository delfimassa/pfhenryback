const express = require('express');
// const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

const config = require('./config');
// IMPORTS ROUTES
const CartRoutes = require('./routes/Cart/index.Cart');
const ClientRoutes = require('./routes/Clients/index.Clients');
const FavoriteRoutes = require('./routes/Favorite/index.Favorite');
const MPRoutes = require('./Routes/MP/index.MP');
const PeluqueriaRoutes = require('./routes/Peluqueria/index.Peluqueria');
const PeluqueroRoutes = require('./routes/Peluquero/index.Peluquero');
const TicketRoutes = require('./routes/Ticket/index.Ticket');
const ServiceRoutes = require('./routes/Service/index.Service');
const ReviewRoutes = require('./routes/Review/index.Review');

const app = express();
// require("./routes/User/Controllers/middleware")


//Setings
app.set('port', config.PORT);

//Middlewares
app.use(bodyParser.json({limit: '50mb'}))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ limit: '50mb', extended: false }));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
// app.use(passport.initialize());

//Multer
app.use('/public', express.static(`${__dirname}/public/imgs`))

//Routes
app.use('/', CartRoutes);
app.use('/', ClientRoutes);
app.use('/', FavoriteRoutes);
app.use('/', MPRoutes);
app.use('/', PeluqueriaRoutes);
app.use('/', ReviewRoutes);
app.use('/', TicketRoutes);
app.use('/', PeluqueroRoutes);
app.use('/', ServiceRoutes);

module.exports = app;