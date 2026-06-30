class Node{
    //a Node Class//
    constructor(node, left, right){
      this.node = node;
      this.right = right;
      this.left = left;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }

    checkArray(array){
        //to check type of array, sort array and remove duplicate
        if (!Array.isArray(array)){
            return `${array} must be an array`
        }
        if (!array.every(Number.isInteger)){
            return `${array} contains non-integer values`

        }
        return [...new Set(array)].sort((a,b) => a - b);
      

        
    
}
    buildTree(array) {
    //function to create a binary search tree 
        array = this.checkArray(array)
        if (array.length === 0) return null
        const mid = Math.floor(array.length/2)
        const root = new Node(array[mid])

        const leftArray = array.slice(0, mid);
        const rightArray = array.slice(mid+1)
        root.left = this.buildTree(leftArray)
        root.right = this.buildTree(rightArray)

        return root;

    }
    checkValue(value){
        //check the type of value to ensue its an integer 
        if (!Number.isInteger(value)) return false
        return true 
}
  includes(value){
    if(!this.checkValue(value))return false;
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value){
    if (node === null) return false;
    if (node.node === value) return true
    if (node.node < value ){
        return this._searchNode(node.right, value)
    }  else{
        return this._searchNode(node.left, value)
    }
  }

  insert(value){
    // a function to insert a new value into the tree//
    if (!this.checkValue(value)){
        return false 
    }
    else if(this.root === null) {
       this.root = new Node (value)
       return true
        }

        return this._insertNode(this.root, value)
        
    }

    _insertNode(node, value){
        if (value < node.node){
            if (node.left === null){
                node.left = new Node (value);
                return true
            } else {
                return this._insertNode(node.left, value)
            }
        } else {
            if (node.right === null){
                node.right = new Node(value);
                return true;
            } else{
                return this._insertNode(node.right, value)
            }
        }
    }
    deleteItem (value){
        if (!this.checkValue(value)) return false;
        if (!this.includes(value)) return false;
        this.root = this.deleteNode(this.root, value)
        return true

    }

    deleteNode(node, value){
        //first consideration when node is null
        if (node === null) return null;
        if (value < node.node){
            node.left = this.deleteNode(node.left, value);
            return node
        }
        
        if (value > node.node){
            node.right = this.deleteNode(node.right, value)
            return node;
        }

        if (node.left === null && node.right === null) {
            return null
        }
        //one child case considered here 
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        //two children considered and a replacement for current node 
        const successor = this.minValueNode(node.right)
        node.node = successor.node
        //delete the successor from the right 
        node.right = this.deleteNode(node.right, successor.node);
        return node
    }

    minValueNode(node){
        let current = node;
        while (current.left !== null){
            current = current.left;

        }
        return current;
    }

   
    callback(node){
        // add nodes to 
      if (node  === null) return;
      console.log(node.node)

    }
    levelOrderForEach(callback){
        if (this.root === null ) return;
        const queue = [this.root];
        while (queue.length > 0){
            const current = queue.shift();

            callback(current)
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null ) queue.push(current.right);
        }

    }

    _validateCallback(callback){
        if (typeof callback !== "function"){
            throw new Error ('No callback function here')
            
            
        }
    }

    inOrderForEach(callback, node = this.root){
        this._validateCallback(callback);
        this._inOrder(node, callback)
    }

    _inOrder(node, callback){
        if (node === null) return;
        this._inOrder(node.left, callback);
        callback(node);
        this._inOrder(node.right, callback);

    }

    preOrderForEach(callback, node = this.root){
        this._validateCallback(callback);
        this._preOrder(node, callback);
    }

    _preOrder(node, callback){
        if(node === null) return;
        callback(node)
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback)
    }
    postOrderForEach(callback, node = this.root){
        this._validateCallback(callback);
        this._postOrder(node, callback);
    }

    _postOrder(node, callback){
        if(node === null) return;
        this._postOrder(node.left, callback);
        this._postOrder(node.right, callback)
        callback(node);
    }


_findNode(node, value) {
    //find node with specific value 
    if (node === null) return null;
    if (node.node === value) return node;
    if (node.node > value){
        return this._findNode(node.left, value)
    }else{
        return this._findNode(node.right, value)
    }
}

_heightFromNode(node){
    //calculate height 
    if (node === null) return 0;

    const leftHeight = this._heightFromNode(node.left);
    const rightHeight = this._heightFromNode(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

height(value){
    //calculate the height of a node with specific value//
    if (!this.checkValue(value))return null;
    const targetNode = this._findNode(this.root, value);
    if (targetNode === null) return null//where value is not in the tree 

    return this._heightFromNode(targetNode);

}

depth(value) {
  // Return null for invalid input
  if (!this.checkValue(value)) return null;

  let current = this.root;
  let depth = 0;

  while (current !== null) {
    if (current.node === value) return depth;

    if (value < current.node) {
      current = current.left;
    } else {
      current = current.right;
    }

    depth += 1;
  }

  // Value not found in the tree
  return null;
}



_checkBalance(node) {
  // Empty subtree is balanced and has height 0 (node-based style)
  if (node === null) return 0;

  const leftHeight = this._checkBalance(node.left);
  if (leftHeight === -1) return -1;

  const rightHeight = this._checkBalance(node.right);
  if (rightHeight === -1) return -1;

  // If height difference is more than 1, subtree is unbalanced
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

isBalanced() {
  return this._checkBalance(this.root) !== -1;
}

rebalance() {
    //rebalance an unbalanced tree 
  if (this.root === null) return null;
  if (this.isBalanced()) return this.root;

  const values = [];
  this.inOrderForEach((node) => values.push(node.node));

  // buildTree returns a new balanced root from the sorted values
  this.root = this.buildTree(values);
  return this.root;
}
  
}