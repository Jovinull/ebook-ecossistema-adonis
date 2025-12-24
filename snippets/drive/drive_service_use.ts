import drive from '@adonisjs/drive/services/main'

const defaultDisk = drive.use()
const spacesDisk = drive.use('spaces')
