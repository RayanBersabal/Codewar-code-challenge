function solution(str){
    if (str === "")
      return "";
    else
      return solution(str.substr(1)) + str.charAt(0);
  }
  solution("world")
  function solution(str){
    let result = '';
    for (i = str.length - 1; i >= 0; i--){
      result += str[i];
    }
    return result;
  }