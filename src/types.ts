export interface TreeNode {
  id: string;
  label: string;
  expanded?: boolean;
  children?: Array<TreeNode>;
}
