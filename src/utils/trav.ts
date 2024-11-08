type TreeNode = {
  val: number;
  children: TreeNode[];
};
var treenode: TreeNode = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: [],
        },
      ],
    },
    {
      val: 3,
      children: [],
    },
  ],
};
function DFS(node: TreeNode): void {
  console.log(node.val);
  for (const element of node.children) {
    DFS(element);
  }
}
function DFSW(root: TreeNode): void {
  let stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    console.log(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]!);
    }
  }
}
function BFS(root: TreeNode): void {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      console.log(node.val);
      for (const element of node.children) {
        queue.push(element);
      }
    }
  }
}
