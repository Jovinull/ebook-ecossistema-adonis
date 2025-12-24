import fs from 'node:fs'

await mail.send((message) => {
  message.attachData(fs.createReadStream('./invoice.pdf'), {
    filename: 'invoice.pdf',
  })
})
