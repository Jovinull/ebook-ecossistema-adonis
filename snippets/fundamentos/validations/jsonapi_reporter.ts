// app/validation_reporters/jsonapi_reporter.ts
import type { ErrorReporterContract, FieldContext } from '@vinejs/vine/types'

export class JSONAPIErrorReporter implements ErrorReporterContract {
  public hasErrors = false
  private errors: Array<{ source: { pointer: string }; detail: string }> = []

  report(message: string, _rule: string, field: FieldContext) {
    this.hasErrors = true
    this.errors.push({
      source: { pointer: field.wildCardPath || field.field },
      detail: message,
    })
  }

  toJSON() {
    return { errors: this.errors }
  }
}
