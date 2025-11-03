import app from '@adonisjs/core/services/app'

app.listen('SIGTERM', () => {
    // encerrar conexões, drenar filas, etc.
})
