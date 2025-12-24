test('create a new user account', async ({ cleanup }) => {
  mail.fake()

  cleanup(() => {
    mail.restore()
  })
})
