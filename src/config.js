export const config = {
  jwt: {
    EXPIRE: process.env.REACT_APP_TOKEN_EXPIRE,
    SECRET: process.env.REACT_APP_TOKEN_SECRET,
  },
}

export const validations = {
  messages: {
    required: ':attribute is required.',
    email: 'Your :attribute address must be valid.',
    alpha_num_dash:
      'The :attribute can only contain letters, numbers and hyphens.',
    min: ':attribute must be at least 6 characters.',
    alpha_space: ':attribute can only contain letters and spaces.',
    alpha_num: ':attribute can only contain letters and numbers.',
  },
  locale: 'en',
}
