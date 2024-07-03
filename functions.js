const identity = function (thing) {
  return thing
};

const first = function (arr, num) {
  if(num === undefined){
    return arr[0]
  }
  if(num > arr.length){
    return arr
  }
  let result = []
  for(let i=0; i<num; i++){
    result.push(arr[i])
  }
  return result
};
  
const last = function (arr, num) {
  if(num === 0){
    return []
  }
  if(num === undefined){
    return arr[arr.length - 1]
  }
  if(num > arr.length){
    return arr
  }
  let result = []
  for(let i=arr.length-num; i<arr.length; i++){
    result.push(arr[i])
  }
  return result
};

const each = function (collection, callback) {
  if(Array.isArray(collection)){
    for(let i=0; i<collection.length; i++){
      callback(collection[i], i, collection)
    }
  }else{
    for(let key in collection){
      callback(collection[key], key, collection)
    }
  }
};

const indexOf = function (array, item) {
  for(let i=0; i<array.length; i++){
    if(array[i] === item){
      return i
    }
  }
  return -1
};

const map = function (arr, iterator) {
  let result = []
  for(let elem of arr){
    result.push(iterator(elem))
  }
  return result
}

const filter = (arr, passesRestriction)=>{
  let result = []
  for(let elem of arr){
    if(passesRestriction(elem)){
      result.push(elem)
    }
  }
  return result
}

const reject = (arr, passesRestriction)=>{
  let result = []
  for(let elem of arr){
    if(!passesRestriction(elem)){
      result.push(elem)
    }
  }
  return result
}

const uniq = (arr) =>{
  let result = []
  for(let elem of arr){
    if(result.indexOf(elem) === -1){
      result.push(elem)
    }
  }
  return result
}

const reduce = (collection, callback, initialValue) =>{
  let result = initialValue
  if(Array.isArray(collection)){
    if(result === undefined){
      result = collection[0]
    }
    for(let i=0; i<collection.length; i++){
      result = callback(result, collection[i])
    }
  }else{
    for(let key in collection){
      if(result === undefined){
        result = collection[key]
      }
      result = callback(result, collection[key])
    }
  }
  return result
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};