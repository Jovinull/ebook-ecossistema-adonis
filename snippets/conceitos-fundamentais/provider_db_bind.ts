register() {
    this.app.container.bind('db', () => {
        return new Database()
    })
}
