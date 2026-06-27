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

}