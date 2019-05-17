function add() {
  var total = 0
  for (var i=0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

function listToObject(arr) {
  let obj = {}
  arr.forEach((element, index) => {
    obj[arr[index].name] = arr[index].value
  });
  return obj;
};

function objectToList(obj) {
  let arr = [];
  Object.keys(obj).forEach(key => {
    arr.push({name: key, value: obj[key]});
  })
  return arr;
};

module.exports = {add, listToObject, objectToList}
