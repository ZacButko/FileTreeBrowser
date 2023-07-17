export interface TreeNode {
  id: string;
  label: string;
  expanded?: boolean;
  children?: Array<TreeNode>;
}

export interface TreeNodeData {
  id: string;
  label: string;
  parentId: null | string;
  childrenIds: Array<string>;
  expanded: boolean;
}

export type TreeConstructorData = Array<TreeNodeData>;
