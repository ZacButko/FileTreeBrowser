export interface TreeNode {
  id: string;
  label: string;
  expanded: boolean;
  parentId: null | string;
  childrenIds: Array<string>;
  children: Array<TreeNode>;
}

export interface TreeNodeData {
  id: string;
  label: string;
  expanded: boolean;
  parentId: null | string;
  childrenIds: Array<string>;
}

export type TreeConstructorData = Array<TreeNodeData>;
