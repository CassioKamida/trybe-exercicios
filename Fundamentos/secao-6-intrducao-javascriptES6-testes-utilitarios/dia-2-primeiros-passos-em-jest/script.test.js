const {
    myRemove,
    myFizzBuzz,
    mapString,
    encode,
    decode,
    techList,
    hydrate,
    } = require('./script');

describe('verifica a funcao my Remove', () => {
    it('verifica requesitos', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});

describe('verifica a funcao MyFizzBuzz', () => {
    it('Verifica requisitos', () =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(2)).toBe(2);
        expect(myFizzBuzz('num')).toBe(false);
    })
});

describe('veririca a funcao mapString', () => {
    it('Verifica requesito 1', () =>{
        expect(encode).toBeDefined();
    })
    it('verifica enconde funcao', () =>{
        expect(typeof encode).toEqual('function');
    })
    it('verifica apenas a vogal "a"', () =>{
        expect(encode('ana')).toEqual('1n1');
    })
    it('verifica a vogal "e"', () =>{
        expect(encode('ele')).toEqual('2l2');
    })
    it('verifica a vogal "i"', () => {
        expect(encode('xixi')).toEqual('x3x3');
    })
    it('checa numero de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);
    })
    it('checa decode', () => {
        expect(decode).toBeDefined();
    })
    it('checa o numero 1 e vogal a', () =>{
        expect(decode('1n1')).toEqual('ana');
    })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaca, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });