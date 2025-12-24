// npm i pino-roll

{
  loggers: {
    app: {
      transport: {
        targets: [
          {
            target: 'pino-roll',
            level: 'info',
            options: {
              file: '/var/log/apps/adonisjs.log',
              frequency: 'daily',
              mkdir: true
            }
          }
        ]
      }
    }
  }
}
