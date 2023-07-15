import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { TreeNode } from "../types";

const defaultNode: TreeNode = { label: "root" };
const FileTreeContext = createContext<{
  tree: TreeNode;
  setTree: Dispatch<SetStateAction<TreeNode>>;
}>({ tree: defaultNode, setTree: () => undefined });

const FileTreeContextProvider = ({
  initialTree = defaultNode,
  children,
}: PropsWithChildren<{ initialTree?: TreeNode }>) => {
  const [tree, setTree] = useState(initialTree);
  return (
    <FileTreeContext.Provider value={{ tree, setTree }}>
      {children}
    </FileTreeContext.Provider>
  );
};

const useFileTreeContext = () => {
  return useContext(FileTreeContext);
};

export { FileTreeContext, FileTreeContextProvider, useFileTreeContext };
