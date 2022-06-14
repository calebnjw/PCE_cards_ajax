import express, { request, response } from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

// import model db
import db from './models/index.mjs';

// import controllers
import GameController from './controllers/gameController.mjs';
import UserController from './controllers/userController.mjs';
// import routers
import GameRouter from './routers/gameRouter.mjs';
import UserRouter from './routers/userRouter.mjs';

// initialise controllers
const gameController = new GameController(db.Game, db);
const userController = new UserController(db.User, db);
// initialise routers
const gameRouter = new GameRouter(gameController).router();
const userRouter = new UserRouter(userController).router();

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
// !!! this is important
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

// use router for routes
app.use('/user', userRouter);

// checking if user is logged in
// if not, send to login page
// app.use((request, response, next) => {
//   request.userLoggedIn = false;
//   if (request.cookies.loggedIn && request.cookies.userID) {
//     request.userLoggedIn = true;
//   }
//   next();
// });

// app.get('/', (request, response) => response.redirect('/game'));
// app.use('/game', gameRouter);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log('App is running on Port', PORT));
