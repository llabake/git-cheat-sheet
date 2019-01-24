export const userInputValidator = (formData) => {
  const errors = {};
  let isValid = true;

  const {
    user: { username, password },
  } = formData;
  if (username.length < 2) {
    errors.username = 'Username must be at least 2 characters.';
  }
  if (password.length < 2) {
    errors.password = 'Password must contain at least 2 characters';
    isValid = false;
  }

  Object.keys(errors)
    .map(key => errors[key]).forEach((error) => {
      if (error.length) {
        isValid = false;
      }
    });
  return { errors, isValid };
};

export const hostUrl = process.env.NODE_ENV === 'production'
  ? 'https://git-cheat-hint-sheet.herokuapp.com'
  : 'http://localhost:7777';
