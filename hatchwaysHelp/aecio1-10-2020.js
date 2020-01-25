// "getTwoNumber"
// g e t_t w 
//  0 1 2
// "get_two_number"

function toSnakeCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (i !== str.length - 1) {
      const nextChar = str[i + 1];
      // if the next character is capitalized => add _ and the capitalized number
      // add the character
      if (nextChar === nextChar.toUpperCase()) {
        newStr += `${currentChar}_`;
      } else {
        newStr += currentChar.toLowerCase();
      }
    } else {
      newStr += currentChar.toLowerCase();
    }

  }
  return newStr;
}




// {keyA:1, keyB: {keyC:'a', keyD:[]}}
//{key_a:1, key_b: {key_c:'a', key_d:{}}}

console.log(toSnakeCase("getTwoNumbeR"))