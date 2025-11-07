import UnAuthorizedException from '#exceptions/unauthorized_exception'

throw new UnAuthorizedException('You are not authorized', {
  status: 403,
  code: 'E_UNAUTHORIZED',
})
