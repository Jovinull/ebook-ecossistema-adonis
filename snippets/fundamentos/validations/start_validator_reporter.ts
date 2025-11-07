// start/validator.ts (mesmo preload, após messagesProvider)
import { JSONAPIErrorReporter } from '#validation_reporters/jsonapi_reporter'
import vine from '@vinejs/vine'

vine.errorReporter = () => new JSONAPIErrorReporter()
