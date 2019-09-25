module.exports = function check(str, bracketsConfig) {

  stack = [];
  for (let char of str) {
    if (isEqualPair(char, bracketsConfig)) {
      if (char == stack[stack.length-1]) {                          //обработка непарных скобок
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (isOpeningBracket(char, bracketsConfig)) {                 //обработка парных скобок
        stack.push(char);
      } else {
        if (isPair(stack[stack.length-1], char, bracketsConfig)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length == 0) {
    return true;
  }
  return false;
}

function isEqualPair(a, bracketsConfig) {         //проверка на непарность
  for (let pair of bracketsConfig) {
    if (a == pair[0] & a == pair[1]) {
      return true;
    }
  }
  return false;
}

function isOpeningBracket(a, bracketsConfig) {    //проверка, является ли скобка открывающейся
  for (let pair of bracketsConfig) {
    if (a == pair[0]) {
      return true;
    }
  }
  return false;
}

function isPair(a, b, bracketsConfig) {           //проверка разных скобок на парность
  for (let pair of bracketsConfig) {
    if (a == pair[0] & b == pair[1]) {
      return true;
    }
  }
  return false;
}
