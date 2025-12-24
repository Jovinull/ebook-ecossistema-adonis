import { BaseCommand } from '@adonisjs/core/ace'

async function getCitiesList() {
  return ['Aracaju', 'São Paulo', 'Rio de Janeiro', 'Salvador', 'Recife']
}

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:autocomplete'

  async run() {
    const selectedCity = await this.prompt.autocomplete('Select your city', await getCitiesList())
    this.logger.success(`City: ${selectedCity}`)
  }
}
