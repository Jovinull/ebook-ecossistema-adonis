{
  loggers: {
    app: {
      transport: {
        targets: [
          {
            target: 'pino/file',
            level: 'info',
            options: { destination: 1 }
          },
          {
            target: 'pino-pretty',
            level: 'info',
            options: {}
          }
        ]
      }
    }
  }
}
