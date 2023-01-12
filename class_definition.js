var Tree = /** @class */ (function () {
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    //method with access modifiers
    Tree.prototype.moveLeaf = function () {
        this.leaf = "Green Leaf";
        console.log("The " + this.leaf + " is moving to the right");
    };
    return Tree;
}());
var tree1 = new Tree("Red Leaf");
tree1.moveLeaf();
console.log(tree1.leaf);
