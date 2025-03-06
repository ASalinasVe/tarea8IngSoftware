/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Pasos para hacer test de casos de prueba
//1. Crear la prueba especifica en el .test.js usando it y describiendo lo que se espera
//2. Probar la prueba con npm test, y ver que esta falla
//3. A continuacion crear la funcion en el .js, sin generalizar la logica, solo hacer que pase la prueba
//4. Probar la prueba con npm test, y ver que pasa
//5. Cuando la prueba sale verde se hace commit y push al repositorio
//6. Seguir asi con todos los casos de prueba
//7. Una vez se tengan todas las pruebas se generaliza la logica, y se hacen pruebas para verificar que todo sigue funcionando

import { getScore } from "./puntaje.js";

describe("Mostrar el Puntaje del game:", () => {
    it("Deberia mostrar el puntaje inicial del game", () =>
    {
        expect(getScore(0,0)).toEqual("Love All")
    })
    it("Deberia mostrar el puntaje 15 - Love", () =>
    {
        expect(getScore(1,0)).toEqual("Fifteen - Love")
    })

})
