// Nota: Arrays/Objetos → JSON (safe stringify, sem referências circulares)
// Number/Boolean → string
// Date → toISOString()
// RegExp/Error → toString()
// Demais tipos não suportados → exceção
//
// O Adonis infere content-type automaticamente:
// - application/json para arrays/objetos
// - text/html para fragmento HTML
// - text/javascript para JSONP
// - text/plain para outros
export {}
