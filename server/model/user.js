import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [5, 'Username too short'],
    maxLength: [30, 'Username too long'],
    validate: {
      validator(value) {
        return /^[a-z0-9._]+$/i.test(value);
      },
      message: 'Username must contain only alphanumeric characters, period and underscore.',
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
}, { timestamps: true });

// eslint-disable-next-line func-names
UserSchema.pre('save', async function (next) {
  try {
    this.password = await hashSync(this.password, genSaltSync());
    return next();
  } catch (error) {
    return next(error);
  }
});

// eslint-disable-next-line func-names
UserSchema.methods.authenticate = async function (password) {
  return compareSync(password, this.password)
};

UserSchema.plugin(uniqueValidator, {
  message: '{PATH} already exist.',
});

export default model('User', UserSchema);