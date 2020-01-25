// The question is given an object / dictionary where the keys are strings, 
// and the values are either strings or another object / dictionary, can you 
// return a new object / dictionary with the keys flattened.

// For example, { a: "b", c: { d: "e", "f": {g: "e"} } }, would become { a: "b", "c.d": "e", c.f: "g" }.
// Notice that this function will remove any of the nested objects / dictionaries, 
// and will combine the keys in the nested objects / dictionaries to be joined by a period.

function flatten(dict) {
  // step through each property
  // if string, continue?
  // if object, append to the parent and 
  const flattenedDictionary = {};
  
  for (const key in dict){
    const value = dict[key];
    const parent = key;
    if (typeof value === 'object') {
      flattenHelper(parent, value, flattenedDictionary);
    } else {
      flattenedDictionary[parent] = value;
    }
  }
  return flattenedDictionary;
}

function flattenHelper(parent, dict, flattenedDict) {
  for (const key in dict) {
    const newParent = `${parent}.${key}`;
    const value = dict[key];
    if (typeof value === 'object') {
      flattenHelper(newParent, value, flattenedDict);
    } else {
      flattenedDict[newParent] = value;
    }
  }
}


console.log(flatten({ a: "b", c: { d: "e" } }));
console.log(flatten({ a: "b", c: { d: "e", f: {e:"g"}} }))