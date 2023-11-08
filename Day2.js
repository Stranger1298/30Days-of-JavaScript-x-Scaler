function uppercaseLetter(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  }
  
  let str1 = "the quick brown fox";
  console.log(uppercaseLetter(str1));
  