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
    buildTree(array)   {
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

    deleteItem(value){
        //delete a value from the tree 
        if (!this.includes(value)) return false
        if (this.root === value ){
            if((this.root.right === null )&& (this.root.right === null)){
                this.root = null
                return true 

            }
            else if (this.root.right === null && this.root.left !== null){
                this.root = this.root.left
                this.root.left = null
            }
            else if (this.root.left === null && this.root.right !== null){
                this.root = this.root.right;
                this.root.right = null;
            }

    }
    else(){}
  
}}