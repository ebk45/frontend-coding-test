export function add() {
  var total = 0
  for (var i=0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

export function listToObject(arr) {
  let obj = {}
  arr.forEach((element, index) => {
    obj[arr[index].name] = arr[index].value
  });
  return obj;
};

export function deserialize() {

};

export function objectToList() {

};
