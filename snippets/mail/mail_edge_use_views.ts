await mail.send((message) => {
  message.htmlView('emails/verify_email_html', { user: {} })
  message.textView('emails/verify_email_text', { user: {} })
})
