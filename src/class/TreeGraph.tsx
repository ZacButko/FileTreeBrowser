import { TreeConstructorData, TreeNode } from "../types";

export class TreeGraph {
  rootNode: TreeNode;
  nodeMap: Map<string, TreeNode>;

  constructor(data: TreeConstructorData) {
    this.nodeMap = new Map(data.map((n) => [n.id, { ...n, children: [] }]));
    this.connectAllChildren();
    this.rootNode = this.nodeArray.find((n) => n.parentId === null) as TreeNode;
  }

  connectAllChildren = () => {
    this.nodeArray.forEach((n) => {
      n.childrenIds.forEach((childId) => {
        n.children.push(this.nodeMap.get(childId) as TreeNode);
      });
    });
  };

  get nodeArray(): Array<TreeNode> {
    return Array.from(this.nodeMap.values());
  }

  get serializeTree(): TreeConstructorData {
    return this.nodeArray.map((n) => {
      const { id, label, expanded, parentId, childrenIds, isDirectory } = n;
      return { id, label, expanded, parentId, childrenIds, isDirectory };
    });
  }

  toggleNode = (nodeId: string): TreeConstructorData => {
    const node = this.nodeMap.get(nodeId) as TreeNode;
    const alteredNode = { ...node, expanded: !node?.expanded };
    return [
      ...this.serializeTree.filter((n) => n.id !== alteredNode.id),
      alteredNode,
    ];
  };
}
