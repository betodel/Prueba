//import prueba from './prueba';
const operacion=require("./operacion");
describe('operacion',()=>{
  test('test',() => {
      const expected='Mult.5';
      const result=operacion(10);
      expect(expected).toBe(result);
  })
})