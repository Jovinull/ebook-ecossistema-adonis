// start/validator.ts
import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // genéricas
  required: 'O campo {{ field }} é obrigatório',
  string: 'O valor de {{ field }} deve ser uma string',
  email: 'Informe um e-mail válido',

  // específicas
  'title.minLength': 'O título precisa ter pelo menos {{ options.minLength }} caracteres',
  'username.required': 'Escolha um nome de usuário',
})
