let dictionary = new Array();

function addWords() {
  let addWord = document.getElementById("wordsAdd").value;
  dictionary.push(addWord);
}

function checkWord() {
  let wordCheck = document.getElementById("wordCheck").value;
  if (dictionary.includes(wordCheck)) {
    document.getElementById("result").innerHTML ="This word has already been added";
  } else {
    document.getElementById("result").innerHTML ="You can add this word";
  }
}