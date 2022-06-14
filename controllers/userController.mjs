import BaseController from './baseController.mjs';

export default class UserController extends BaseController {
  constructor(model, db) {
    super(model);
    this.Bug = db.Bug;
  }

  getLogin(request, response) {
    response.render('login');
  }

  getSignup(request, response) {
    response.render('signup');
  }

  async getUser(request, response) {
    const { email, password } = request.body;

    try {
      const user = await this.model.findOne({ where: { email } });
      if (user.password === password) {
        console.log('User match');
        response.cookie('loggedIn', true);
        response.cookie('userID', user.id);

        response.send({ loggedIn: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async newUser(request, response) {
    const { email, password } = request.body;

    try {
      const user = await this.model.create({ email, password }, { returning: true });
      if (user) {
        response.send({ signedUp: true });
      }
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  }
}
