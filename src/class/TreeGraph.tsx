import { getMapFromTree } from "../util";
import { TreeNode } from "../types";
import { immerable, produce } from "immer";

export class TreeGraph {
  [immerable]: boolean;
  rootNode: TreeNode;
  nodeMap: Map<string, TreeNode>;

  constructor(data: TreeNode) {
    this[immerable] = true;
    this.rootNode = data;
    this.nodeMap = getMapFromTree(data);
  }

  toggleNode = (nodeId: string) => {
    return produce(this, (draft) => {
      console.log("nodeMap", draft.nodeMap);
      const node = draft.nodeMap.get(nodeId);
      if (node) {
        draft.nodeMap.set(nodeId, { ...node, expanded: !node.expanded });
      }
      console.log("producing...", draft);
      return draft;
    });
  };
}
