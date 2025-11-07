// app/validators/invoice_validator.ts
import vine from '@vinejs/vine'

export const createInvoiceValidator = vine.compile(
  vine.object({
    documents: vine.array(
      vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'pdf'],
      })
    ),
  })
)
