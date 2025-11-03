import type { AssemblerHookHandler } from '@adonisjs/core/types/app'

const buildHook: AssemblerHookHandler = async ({ logger }) => {
  logger.info('Executando passo customizado de build...')
  // Sua lógica de geração/compilação aqui
  // await myCustomLogic()
}

export default buildHook
