await User.accessTokens.create(
  user,
  ['*'],
  {
    name: request.input('token_name'),
    expiresIn: '30 days',
  }
)
