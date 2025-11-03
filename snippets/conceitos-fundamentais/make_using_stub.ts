import { BaseCommand } from '@adonisjs/core/ace'

const STUBS_ROOT = new URL('./stubs', import.meta.url)

export default class MakeApiResource extends BaseCommand {
  static commandName = 'make:api-resource'
  static description = 'Gera uma classe Resource baseada em stub'

  async run() {
    const codemods = await this.createCodemods()
    await codemods.makeUsingStub(STUBS_ROOT, 'api_resource.stub', {})
    this.logger.success('Resource gerado com sucesso')
  }
}
