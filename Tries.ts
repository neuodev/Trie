class Char {
  value: string;
  children: {};
  isEndOfWord: boolean;
  constructor(value) {
    this.value = value;
    this.children = {};
  }
}

class Trie {
  root: Char;
  constructor() {
    this.root = new Char(' ');
  }
  insert(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!current.children[char]) {
        current.children[char] = new Char(char);
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }
}

var trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(trie);
