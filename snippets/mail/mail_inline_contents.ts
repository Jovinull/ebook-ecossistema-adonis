await mail.send((message) => {
  message.html('<h1>Hello</h1>')
  message.text('Hello')
})
