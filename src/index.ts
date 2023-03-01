import fastify from 'fastify'

// Création d'une application fastify
const app = fastify()

app.listen({ port: 4646, host: '127.0.0.1' }, () =>{
  // Affiche un message dans la console nous indiquant que le serveur est démarré
    console.log("Mon serveur est prêt : http://127.0.0.1:4646")
})

/*Ajouter 2 routes :
GET /: Qui retourne la chaine de caractère Bienvenue sur mon serveur
GET /hello: Qui retourne la chaine de caractère Bonjour tout le monde
*/

app.get('/', () => {
    console.log('Coucou les amis')
    return 'Bienvenue sur mon serveur'
  })

app.get('/hello', () => {
    return 'Bonjour tout le monde'
  }) 


  app.get("/eleves", (request, response) => {

    response.header("Developed-With", "fastify");
    return [
      {id: "1", nom: "john", prenom: "john", age: "32",},
      {id: "2", nom: "john", prenom: "rose", age: "36",},
      {id: "3", nom: "john", prenom: "jane", age: "40",},
      {id: "4", nom: "john", prenom: "jean", age: "38",},
    ];
  });
