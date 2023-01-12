class Tree {
  constructor(public leaf: string) {
    this.leaf = leaf;
  }

  //method with access modifiers
  moveLeaf(){
    this.leaf = "Green Leaf";
    console.log(`The ${this.leaf} is moving to the right`);
  }
}

let tree1 = new Tree("Red Leaf");
tree1.moveLeaf()
console.log(tree1.leaf)