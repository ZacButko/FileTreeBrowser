import { FileTreeNode } from "./FileTreeNode";

export const FileTree = ({ tree }) => {
  return (
    <div className="FileTree">
      <h3>File Tree</h3>
      <div className="FT-Nodes">
        <FileTreeNode node={tree} />
      </div>
    </div>
  );
};
