import { FastifyInstance } from 'fastify'


// La calculatrice
type CalcRoute = {    
    Params: {
        x: string
        y: string
    }
}
  
    export default async function userRoute(app: FastifyInstance) {     
     // Addition    
    app.get<CalcRoute>('/calc/add/:x/:y', request => {
        //Recuperer les parametres
        const x =  parseFloat(request.params.x)
        const y =  parseFloat(request.params.y)
    
        return {
          result: x + y,
          x: x,
          y: y,
          operation: 'add'
        }     
    })
    
    // Multiplucation
      
      app.get<CalcRoute>('/calc/mul/:x/:y', request => {
        //Recuperer les parametres
        const x =  parseFloat(request.params.x)
        const y =  parseFloat(request.params.y)
    
        return {
          result: x * y,
          x: x,
          y: y,
          operation: 'mul'
        }     
      })
      
    
      // Sub
      
      app.get<CalcRoute>('/calc/sub/:x/:y', request => {
        //Recuperer les parametres
        const x =  parseFloat(request.params.x)
        const y =  parseFloat(request.params.y)
    
        return {
          result: x - y,
          x: x,
          y: y,
          operation: 'sub'
        }     
      })
    
       // Division
      
       app.get<CalcRoute>('/calc/div/:x/:y', (request, response) => {
        //Recuperer les parametres
        const x =  parseFloat(request.params.x)
        const y =  parseFloat(request.params.y)
    
        if (y === 0) {
          response.code(400);
          return {
            error: "division par zéro"
          };
        }
    
        return {
          result: x / y,
          x: x,
          y: y,
          operation: 'div'
        }     
      })   
// La route calculatrice

 type calculateRoute ={
    Hedear: {
      operation: string
    }
    Body: {
      x: number
      y: number
    }
  }
   
  
  app.post<calculateRoute>('/calculate', (request, response) => {
    // Récupére l'opération
    const operation = request.headers.operation
    // ON récupére x et y
    const x = request.body.x
    const y = request.body.y
  
    if (operation === 'add') {
      return {
        result: x + y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'sub') {
      return {
        result: x - y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'mul') {
      return {
        result: x * y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    if (operation === 'div') {
      if (y === 0) {
        response.code(400)
  
        return {
          error: 'division par 0',
          message: 'Il est impossible de diviser par 0',
        }
      }
  
      return {
        result: x / y,
        x: x,
        y: y,
        operation: operation,
      }
    }
  
    response.code(400)
  
    return {
      error: 'invalide operation',
      message: `Je ne connais l'opération ${operation} :/`,
    }
  })
}


