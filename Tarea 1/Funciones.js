//Function Push anadir al final

const Apush = [1,2,3];
let pushElement = Apush.push(4);
console.log(pushElement);

//Function Pop

const Apop = [1,2,3];
let popElement = Apop.pop();
console.log(popElement);

//Function Unshift Anadir al principio

const Aunshift = [1,2,3];
let unshiftElement = Aunshift.unshift(5);
console.log(unshiftElement);

//Function Shift Eliminar primer elemento

const Ashift = [1,2,3];
let shiftElement = Ashift.shift();
console.log(shiftElement);

//Function indexOf Encontrar el indice de un elemento

const AindexOf = [1,2,3];
let indexOfElement = AindexOf.indexOf();
console.log(indexOfElement);

//Function Splice Eliminar un unico elemento con su posicion // Con .splice() no solo se puede eliminar elementos del array,
// si no que también podemos extraerlos guardándolo en un nuevo array. 
//¡Ojo! que al hacer esto estaríamos modificando el array de origen.

const Asplice = [1,2,3];
let spliceElement = Asplice.splice(2,1); //Empieza en la posicion 2 y elimina 1 elemento
console.log(spliceElement);

// Function At

const Aat = [1,2,3];
let atElement = Aat.at(2);
console.log(atElement);

// Function Concat

const Aconcat = [1,2,3];
const Aconcat2 = [1,2,3];
let concatElement = Aconcat.concat(Aconcat2);
console.log(concatElement);

// Function constructor

const Aconstructor = new Array(2,4,2,5);
console.log(Aconstructor)

// Function copy within

const Acp = [1,2,3,4,5,6,7,8];
let cpElement = Acp.copyWithin(0,3,5);
console.log(cpElement);

// Function entries

const Aentries = [1,2,3,4,5,6,7,8];
let entriesElement = Aentries.entries;
console.log(entriesElement.next().value);

// Function Every
const Aevery = [1, 30, 39, 29, 10, 13];
let everyElement = Aevery.every((element) => element < 40);
console.log(everyElement);

// Function Fill
const Afill = [1, 2, 3, 4, 5];
let fillElement = Afill.fill(0, 2, 4);
console.log(fillElement);

// Function Filter
const Afilter = [1, 2, 3, 4, 5];
let filterElement = Afilter.filter((element) => element % 2 === 0);
console.log(filterElement);

// Function Find
const Afind = [5, 12, 8, 130, 44];
let foundElement = Afind.find((element) => element > 10);
console.log(foundElement);

// Function FindIndex
const AfindIndex = [5, 12, 8, 130, 44];
let foundIndex = AfindIndex.findIndex((element) => element > 10);
console.log(foundIndex);

// Function FindLast
const AfindLast = [5, 12, 8, 130, 44];
let foundLastElement = AfindLast.find((element) => element > 10);
console.log(foundLastElement);

// Function FindLastIndex
const AfindLastIndex = [5, 12, 8, 130, 44];
let foundLastIndex = AfindLastIndex.lastIndexOf(8);
console.log(foundLastIndex);

// Function Flat
const Aflat = [1, 2, [3, 4]];
let flatArray = Aflat.flat();
console.log(flatArray);

// Function FlatMap
const AflatMap = [1, 2, 3, 4];
let flatMapArray = AflatMap.flatMap((x) => [x * 2]);
console.log(flatMapArray);

// Function ForEach
const AforEach = [1, 2, 3];
AforEach.forEach((element) => console.log(element * 2));

// Function Includes
const Aincludes = [1, 2, 3];
let includesElement = Aincludes.includes(2);
console.log(includesElement);

// Function Join
const Ajoin = ['Hello', 'world', '!'];
let joinedString = Ajoin.join(' ');
console.log(joinedString);

// Function Keys
const Akeys = ['a', 'b', 'c'];
let keysArray = Array.from(Akeys.keys());
console.log(keysArray);

// Function LastIndexOf
const AlastIndexOf = [2, 5, 9, 2];
let lastIndex = AlastIndexOf.lastIndexOf(2);
console.log(lastIndex);

// Function Map
const Amap = [1, 4, 9, 16];
let mappedArray = Amap.map((x) => x * 2);
console.log(mappedArray);

// Function Reduce
const Areduce = [1, 2, 3, 4];
let reducedValue = Areduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedValue);

// Function ReduceRight
const AreduceRight = [1, 2, 3, 4];
let reducedRightValue = AreduceRight.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedRightValue);

// Function Reverse
const Areverse = [1, 2, 3];
let reversedArray = Areverse.reverse();
console.log(reversedArray);

// Function Slice
const Aslice = [1, 2, 3, 4, 5];
let slicedArray = Aslice.slice(2);
console.log(slicedArray);

// Function Some
const Asome = [1, 2, 3, 4, 5];
let someResult = Asome.some((x) => x > 3);
console.log(someResult);

// Function Sort
const Asort = [1, 4, 2, 3, 5];
let sortedArray = Asort.sort();
console.log(sortedArray);

// Function ToLocaleString
const AtoLocaleString = [1, 'a', Date.now()];
let localizedString = AtoLocaleString.toLocaleString();
console.log(localizedString);

// Function ToString
const AtoString = [1, 2, 3];
let stringRepresentation = AtoString.toString();
console.log(stringRepresentation);

// Function Values
const Avalues = ['a', 'b', 'c'];
let iterator = Avalues.values();
for (const value of iterator) {
  console.log(value);
}
