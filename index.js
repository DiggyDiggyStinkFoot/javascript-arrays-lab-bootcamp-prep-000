var kittens = ["Milo","Otis","Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(last){
  kittens.pop(last)
}

function destructivelyRemoveFirstKitten(first){
  kittens.shift(first)
}

function appendKitten(name){
 kittens=[...kittens,"broom"]
 console.log(kittens)
}




