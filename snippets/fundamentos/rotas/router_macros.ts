import { Router } from '@adonisjs/core/http'

// adicionando uma macro
Router.macro('tag', function (this: Router, name: string) {
  // exemplo: poderia guardar metadados ou aplicar padronizações
  return `tag:${name}`
})

// augmentation de tipos
declare module '@adonisjs/core/http' {
  export interface Router {
    tag: (name: string) => string
  }
}
