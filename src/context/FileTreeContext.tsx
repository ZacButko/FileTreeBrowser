import { PropsWithChildren, createContext, useContext } from "react";
import { TreeNode } from "../types";
import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import { TreeGraph } from "../class/TreeGraph";

enableMapSet();

const defaultNode: TreeNode = { id: "root", label: "root", expanded: false };

const fileTreeReducer = (
  draft: TreeGraph,
  action: { type: "toggleNodeExpanded"; payload: { nodeId: string } }
) => {
  switch (action.type) {
    case "toggleNodeExpanded": {
      console.log("inside toggle");
      return void draft.toggleNode(action.payload.nodeId);
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
  const [state, dispatch] = useImmerReducer(
    fileTreeReducer,
    new TreeGraph(initialTree)
  );

  const actions = {
    toggleNodeExpanded: (nodeId: string) => {
      console.log("outside toggle");
      dispatch({ type: "toggleNodeExpanded", payload: { nodeId } });
    },
  };

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
