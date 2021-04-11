class Char {
  value: string;
  children: Char[];
  isEndOfWord: boolean;
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Trie {
  root: Char;
  constructor() {
    this.root = new Char(' ');
  }
  insert(word: string) {
    let current = this.root;
    const CHAR_CODE_OF_lETTER_A = 97;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const idx = word.charCodeAt(i) - CHAR_CODE_OF_lETTER_A;

      if (!current.children[idx]) {
        current.children[idx] = new Char(char);
      }
      current = current.children[idx];
    }
    current.isEndOfWord = true;
  }
}

var trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(trie);
