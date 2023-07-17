export interface TreeNode {
  id: string;
  label: string;
  expanded: boolean;
  parentId: null | string;
  childrenIds: Array<string>;
  isDirectory: boolean;
  children: Array<TreeNode>;
}

export interface TreeNodeData {
  id: string;
  label: string;
  expanded: boolean;
  parentId: null | string;
  childrenIds: Array<string>;
  isDirectory: boolean;
}

export type TreeConstructorData = Array<TreeNodeData>;
