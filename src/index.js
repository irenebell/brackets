module.exports = function check(str, bracketsConfig) {
  // your solution
    let newStr = str.replace(/[^\1\2\3\4\5\6\7\8\|\[\|\{\(\)\}\|\]]/g, "");

if (newStr.length < 1) return true;
let beforeLength;
do {
  beforeLength = newStr.length;
  newStr = newStr.replace("{}", '').replace("()", '').replace("[]", '').replace("||", '').replace('12', '').replace('34', '').replace('56', '').replace('77', '').replace('88', '');
} while (beforeLength > newStr.length);

  
return newStr.length === 0;

};

}
