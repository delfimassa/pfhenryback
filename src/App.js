const express = require('express');
// const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

const config = require('./config');
// IMPORTS ROUTES
const CartRoutes = require('./Routes/Cart/index.Cart');
const ClientRoutes = require('./Routes/Clients/index.Clients');
const FavoriteRoutes = require('./Routes/Favorite/index.Favorite');
const MPRoutes = require('./Routes/MP/index.MP');
const PeluqueriaRoutes = require('./Routes/Peluqueria/index.Peluqueria');
const PeluqueroRoutes = require('./Routes/Peluquero/index.Peluquero');
const TicketRoutes = require('./Routes/Ticket/index.Ticket');
const ServiceRoutes = require('./Routes/Service/index.Service');
const ReviewRoutes = require('./Routes/Review/index.Review');
const TurnoRoutes = require('./Routes/Turnos/index.Turno')

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
app.use('/', TurnoRoutes);

module.exports = app;