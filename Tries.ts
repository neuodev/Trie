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

  public getChildren() {
    return Object.values(this.children);
  }

  public hasChildren() {
    return this.getChildren() >= 1;
  }
  removeChild(ch: string) {
    delete this.children[ch];
  }
}

class Trie {
  root: Char;
  constructor() {
    this.root = new Char(' ');
  }
  public insert(word: string) {
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

  public contains(word: string) {
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
    for (let item of root.getChildren()) {
      this.traverse(item);
    }
  }

  remove(word: string, root: Char, idx: number) {
    if (!word) return;
    // base case
    if (idx === word.length) {
      root.isEndOfWord = false;
      return;
    }
    let ch = word.charAt(idx);
    let child = root.getChild(ch);
    if (child == null) return;
    this.remove(word, child, idx + 1);
    if (!child.hasChildren() && !child.isEndOfWord) {
      root.removeChild(ch);
    }
  }
}

var trie = new Trie();
trie.insert('car');
trie.insert('care');
console.log(trie.contains('care'));
trie.traverse(trie.root);
trie.remove('care', trie.root, 0);
console.log(trie.contains('care'));
// console.log(trie);
