import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { TreeNode } from "../types";
import { TreeGraph } from "../class/TreeGraph";

const defaultNode: TreeNode = { id: "root", label: "root", expanded: false };

const fileTreeReducer = (
  state: TreeGraph,
  action: { type: "toggleNodeExpanded"; payload: { nodeId: string } }
) => {
  switch (action.type) {
    case "toggleNodeExpanded": {
      console.log("inside toggle");

      state.toggleNode(action.payload.nodeId);
      console.log("updated state?", state);
      return new TreeGraph(state.rootNode);
    }
  }
};

const FileTreeContext = createContext<{
  tree: TreeGraph;
  toggleNodeExpanded: (n: string) => void;
  // eslint-disable-next-line
}>({ tree: new TreeGraph(defaultNode), toggleNodeExpanded: (n) => undefined });

const FileTreeContextProvider = ({
  initialTree = defaultNode,
  children,
}: PropsWithChildren<{ initialTree?: TreeNode }>) => {
  const [state, dispatch] = useReducer(
    fileTreeReducer,
    new TreeGraph(initialTree)
  );

  const actions = {
    toggleNodeExpanded: (nodeId: string) => {
      console.log("outside toggle");
      dispatch({ type: "toggleNodeExpanded", payload: { nodeId } });
    },
  };

  console.log("current tree", state);
  return (
    <FileTreeContext.Provider value={{ tree: state, ...actions }}>
      {children}
    </FileTreeContext.Provider>
  );
};

const useFileTreeContext = () => {
  return useContext(FileTreeContext);
};

export { FileTreeContext, FileTreeContextProvider, useFileTreeContext };
