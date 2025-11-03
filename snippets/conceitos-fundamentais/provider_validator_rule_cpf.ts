async boot() {
    const validator = await this.app.container.make('validator')

    validator.rule('cpf', (value) => {
        // validação de CPF
        return isValidCPF(value)
    })
}
