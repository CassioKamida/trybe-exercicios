function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  };



  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  };
  


  const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
    return mappedArray.join('');
  }
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  };

const techList = (arrayTechs, name) => {
    if (arrayTechs.length === 0) return 'Vazio!';
    const sortedArray = arrayTechs.sort();
    const techList = [];

    for (let index = 0; index < sortedArray.length; index += 1) {
        techList.push({
            tech: sortedArray[index],
            name: name,
        })
    }
    return techList;
};

const hydrate = (string) => {
    const divided = string.split(''); // lembrando que dentro do () precisamos do '' para que o split saiba que é para literalmente tudo.
    let water = 0;

    for ( let index = 0; index < divided.length; index += 1){
        const parseString = parseInt(divided[index]); // esta funcao transforma tudo que tem na const divided em numero, caso não dee numero, ele virá como NaN (not a Number)
        if (parseString){
            water += parseString;
        }
    }

    let copo = 'copo';

    if (water > 1) {
        copo = 'copos'
    }

    return `${water} ${copo} de água`;
};

// USAR O npm i jest -D

module.exports = {myRemove, myFizzBuzz, mapString, encode, decode, techList, hydrate};
