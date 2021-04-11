class Char {
  value: string;
  private children: {};
  isEndOfWord: boolean;
  constructor(value) {
    this.value = value;
    this.children = {};
  }

  public hasChild(ch: string) {
    return this.children[ch];
  }
  public addChild(ch: string) {
    this.children[ch] = new Char(ch);
  }

  public getChild(ch: string) {
    return this.children[ch];
  }

  getChilren() {
    return Object.values(this.children);
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

      if (!current.hasChild(char)) {
        current.addChild(char);
      }
      current = current.getChild(char);
    }
    current.isEndOfWord = true;
  }

  contains(word: string) {
    if (word == null) return false;
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.hasChild(char)) return false;
      current = current.getChild(char);
    }
    if (!current.isEndOfWord) return false;
    return true;
  }

  public traverse(root: Char) {
    // pre-order : visit the root first
    console.log(root.value);
    for (let item of root.getChilren()) {
      this.traverse(item);
    }
  }
}

var trie = new Trie();
trie.insert('cat');
trie.insert('cann');
console.log(trie.contains('ksfjo'));
trie.traverse(trie.root);
// console.log(trie);
