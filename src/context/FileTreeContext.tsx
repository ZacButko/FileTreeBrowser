import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { TreeNode } from "../types";
import { getMapFromTree } from "../util";

const defaultNode: TreeNode = { id: "root", label: "root" };

interface FileTreeContextState {
  tree: TreeNode;
  nodeMap: Map<string, TreeNode>;
}

const fileTreeReducer = (
  state: FileTreeContextState,
  action: { type: "toggleNodeExpanded"; payload: { nodeId: string } }
): FileTreeContextState => {
  switch (action.type) {
    case "toggleNodeExpanded": {
      console.log("toggle", action.payload.nodeId);
      const node = state.nodeMap.get(action.payload.nodeId);
      if (node) {
        node.expanded = true;
      }
      console.log("node", node);
      return { tree: state.tree, nodeMap: state.nodeMap };
    }
  }
};

const FileTreeContext = createContext<{
  tree: TreeNode;
  toggleNodeExpanded: (n: string) => void;
  // eslint-disable-next-line
}>({ tree: defaultNode, toggleNodeExpanded: (n) => undefined });

const FileTreeContextProvider = ({
  initialTree = defaultNode,
  children,
}: PropsWithChildren<{ initialTree?: TreeNode }>) => {
  const [state, dispatch] = useReducer(fileTreeReducer, {
    tree: initialTree,
    nodeMap: getMapFromTree(initialTree),
  });

  const actions = {
    toggleNodeExpanded: (nodeId: string) =>
      dispatch({ type: "toggleNodeExpanded", payload: { nodeId } }),
  };

  return (
    <FileTreeContext.Provider value={{ ...state, ...actions }}>
      {children}
    </FileTreeContext.Provider>
  );
};

const useFileTreeContext = () => {
  return useContext(FileTreeContext);
};

export { FileTreeContext, FileTreeContextProvider, useFileTreeContext };
