import User from "../model/user";
import { errorResponse, generateToken, successResponse } from '../helpers/utils';

class UserController {
  static async signUp(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      return successResponse(res, 201, `Your Signup was successful ${newUser.username}`,
        { token: generateToken(newUser) });
    } catch (error) {
      if (error.message.includes('User validation failed: username')) {
        const statusCode = error.message.includes('exist') ? 409 : 500;
        const errorMessage = error.message.substring(
          error.message.indexOf('username:') + 10,
          error.message.indexOf('.'),
        ).replace('Path', 'Input');
        return errorResponse(res, statusCode, false, errorMessage);
      } 
      if (error.message.includes('User validation failed: password')) {
        const errorMessage = error.message.substring(
          error.message.indexOf('password:') + 10,
          error.message.indexOf('.'),
        ).replace('Path', 'The field');
        return errorResponse(res, 500, false, errorMessage);
      }
    }
  }

  static async signIn(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username.trim() });
      if (user == null || !await user.authenticate(req.body.password)) {
        return errorResponse(res, 401, false,
          'Authentication failed. Incorrect credentials.');
      } 
      return successResponse(res, 200, `Welcome ${user.username}, you're logged in`,
        { token: generateToken(user) });
    } catch (error) {
      return errorResponse(res, 500, false, error.message);
    }
  }
}

export default UserController;
