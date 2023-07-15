import { FileTreeNode } from "./FileTreeNode";
import { TreeNode } from "./types";

export const FileTree = ({ tree }: { tree: TreeNode }) => {
  return (
    <div className="FileTree">
      <h3>File Tree</h3>
      <div className="FT-Nodes">
        <FileTreeNode node={tree} />
      </div>
    </div>
  );
};
