import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

app.listen({ port: 4646, host: '127.0.0.1' }, () =>{
    console.log("Mon serveur est prêt : http://127.0.0.1:4646")
})

/*Ajouter 2 routes :
GET /: Qui retourne la chaine de caractère Bienvenue sur mon serveur
GET /hello: Qui retourne la chaine de caractère Bonjour tout le monde
*/

app.get('/', () => {
    return 'Bienvenue sur mon serveur'
  })

app.get('/hello', () => {
    return 'Bonjour tout le monde'
  }) 

