# Binary Search Tree (JavaScript)

A Binary Search Tree implementation built as part of The Odin Project.

## Overview

This project implements a Binary Search Tree with support for:

- Building a balanced tree from an array
- Insertion, search, and deletion
- Breadth-first and depth-first traversals
- Height and depth calculations
- Balance checks and rebalancing

The script also includes a small driver section that generates random numbers, builds a tree, and prints initial output.

## Features

- Builds a balanced BST from input data by sorting and removing duplicates
- Supports integer-based operations only
- Traversal methods:
  - levelOrderForEach(callback)
  - inOrderForEach(callback)
  - preOrderForEach(callback)
  - postOrderForEach(callback)
- Utility methods:
  - includes(value)
  - height(value)
  - depth(value)
  - isBalanced()
  - rebalance()

## Project Structure

- index.js: Contains the Node class, Tree class, and driver script.

## Method Summary

### Tree Construction

- checkArray(array): Validates the input is an array of integers, removes duplicates, and sorts.
- buildTree(array): Recursively builds a balanced BST from a sorted array.

### Core BST Operations

- insert(value): Inserts a value while preserving BST rules.
- includes(value): Returns true if a value exists in the tree.
- deleteItem(value): Removes a value if found.

### Traversals

Each traversal accepts a callback function and visits nodes in this order:

- levelOrderForEach: Level by level (breadth-first)
- inOrderForEach: Left, root, right
- preOrderForEach: Root, left, right
- postOrderForEach: Left, right, root

### Measurements

- height(value): Returns node-based height of the subtree rooted at the node containing value.
- depth(value): Returns the node depth from root (root depth is 0).

### Balance

- isBalanced(): Checks whether the tree is height-balanced.
- rebalance(): Rebuilds the tree into a balanced form if unbalanced.

## Running the Project

From the project directory, run:

    node index.js

Expected output includes:

- A random input array (values less than 100)
- The root node value of the generated tree

## Sample Output

```text
Random input [ 72, 10, 95, 10, 43, 6, 81, 57, 22, 99, 43, 18, 67, 34, 2 ]
Root value: 43
```

## Learning Goals

This project helps practice:

- Recursion
- Tree traversal strategies
- BST mutation logic (insert/delete)
- Structural analysis (height, depth, balance)
- Rebalancing by rebuilding from sorted traversal output

## Author

Sammorad
