class Char {
  char: string;
  children: Char[];
  isEndOfWord: boolean;
  constructor(char, isEndOfWord) {
    this.char = char;
    this.children = [];
    this.isEndOfWord = isEndOfWord ? isEndOfWord : false;
  }
}


