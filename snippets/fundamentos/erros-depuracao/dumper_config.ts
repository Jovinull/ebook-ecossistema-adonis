import { dumperConfig } from '@adonisjs/core'

export const dumper = dumperConfig({
  console: {
    depth: 10,
    collapse: ['DateTime', 'Date'],
    inspectStaticMembers: true,
  },
  html: {
    depth: 10,
    inspectStaticMembers: true,
  },
})
