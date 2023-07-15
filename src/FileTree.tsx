import { FileTreeNode } from "./FileTreeNode";
import { FileTreeContextProvider } from "./context/FileTreeContext";
import { TreeNode } from "./types";

export const FileTree = ({ tree }: { tree: TreeNode }) => {
  return (
    <FileTreeContextProvider initialTree={tree}>
      <div className="FileTree">
        <h3>File Tree</h3>
        <div className="FT-Nodes">
          <FileTreeNode node={tree} />
        </div>
      </div>
    </FileTreeContextProvider>
  );
};
