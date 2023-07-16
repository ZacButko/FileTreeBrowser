import { FileTreeNode } from "./FileTreeNode";
import {
  FileTreeContextProvider,
  useFileTreeContext,
} from "./context/FileTreeContext";
import { TreeNode } from "./types";

const RootNode = () => {
  const { tree } = useFileTreeContext();
  return <FileTreeNode node={tree} key={JSON.stringify(tree)} />;
};

export const FileTree = ({ tree }: { tree: TreeNode }) => {
  return (
    <FileTreeContextProvider initialTree={tree}>
      <div className="FileTree">
        <h3>File Tree</h3>
        <div className="FT-Nodes">
          <RootNode />
        </div>
      </div>
    </FileTreeContextProvider>
  );
};
