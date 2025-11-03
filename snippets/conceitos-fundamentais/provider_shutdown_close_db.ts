async shutdown() {
    await this.app.container.make('db').close()
}
