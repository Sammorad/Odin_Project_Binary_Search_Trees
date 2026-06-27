class Node{
    //a Node Class//
    constructor(Node, left, right){
      this.Node = Node;
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
    

}