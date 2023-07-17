import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { TreeConstructorData } from "../types";
import { TreeGraph } from "../class/TreeGraph";

const defaultNode: TreeConstructorData = [
  {
    id: "root",
    label: "root",
    expanded: false,
    parentId: null,
    childrenIds: [],
  },
];

const fileTreeReducer = (
  state: TreeGraph,
  action: { type: "toggleNodeExpanded"; payload: { nodeId: string } }
) => {
  switch (action.type) {
    case "toggleNodeExpanded": {
      const newConstructorData = state.toggleNode(action.payload.nodeId);
      return new TreeGraph(newConstructorData);
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
}: PropsWithChildren<{ initialTree?: TreeConstructorData }>) => {
  const [state, dispatch] = useReducer(
    fileTreeReducer,
    new TreeGraph(initialTree)
  );

  const actions = {
    toggleNodeExpanded: (nodeId: string) => {
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
