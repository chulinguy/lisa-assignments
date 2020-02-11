// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-2.md

function printCuteAnimals(arr, arr2) { - A
  console.log(arr);
  console.log(arr.length);

  let popArr = [...arr];
  popArr.pop();
  console.log(popArr);
  console.log(arr)

  if (arr2) {
    let newArr = arr.concat(arr2);
    console.log(newArr);
  }
}

const animalArr = ['cat', 'dog', 'rabbit', 'hamster'];

const animalArr2 = ['cow', 'pig', 'sheep']

printCuteAnimals(animalArr);
console.log("-----")
printCuteAnimals(animalArr, animalArr2);
