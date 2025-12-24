await mail.send((message) => {
  message.header('x-my-key', 'header value')
  message.listHelp('admin@example.com?subject=help')
  message.listUnsubscribe({ url: 'http://example.com', comment: 'Comment' })
})
