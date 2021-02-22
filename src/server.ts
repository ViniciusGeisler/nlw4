import express from 'express';

const app = express();

/* 
    GET => Busca 
    POST => Salva
    PUT => Atualiza/Altera
    DELETE => Deleta
    PATC => Alteração especifica    
*/

app.get('/', (request, response) => {
    return response.json({ message: 'Seus sonhos só dependem de você'})
})

app.post('/', (request, response) => {
    return response.json({ message: 'Dados salvos com sucesso!'})
})

app.listen(3333, () => console.log('Server started!'));