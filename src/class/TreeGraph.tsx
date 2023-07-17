import { getMapFromTree } from "../util";
import { TreeNode } from "../types";

export class TreeGraph {
  rootNode: TreeNode;
  nodeMap: Map<string, TreeNode>;

  constructor(data: TreeNode) {
    this.rootNode = data;
    this.nodeMap = getMapFromTree(data);
  }

  toggleNode = (nodeId: string) => {
    console.log("nodeMap", this.nodeMap);
    const node = this.nodeMap.get(nodeId);
    if (node) {
      node.expanded = true;
    }
  };
}
