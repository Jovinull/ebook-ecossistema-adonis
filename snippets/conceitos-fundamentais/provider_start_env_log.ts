async start() {
    if (this.app.getEnvironment() === 'web') {
        console.log('Rodando no servidor HTTP')
    }

    if (this.app.getEnvironment() === 'console') {
        console.log('Rodando um comando CLI')
    }
}
