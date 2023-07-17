import { Show } from "./Show";
import { useFileTreeContext } from "./context/FileTreeContext";
import type { TreeNode } from "./types";

const FileTreeNodeLabel = ({
  directory,
  expanded,
}: {
  directory: boolean;
  expanded: boolean;
}) => {
  return (
    <div className={["FTN-Label-Icon", expanded && "expanded"].join(" ")}>
      <Show condition={!directory}>●</Show>
      <Show condition={directory}>►</Show>
    </div>
  );
};

export const FileTreeNode = ({ node }: { node: TreeNode }) => {
  const { toggleNodeExpanded } = useFileTreeContext();
  if (!node) return null;
  return (
    <div>
      <div className="FTN-Label" onClick={() => toggleNodeExpanded(node.id)}>
        <FileTreeNodeLabel
          directory={!!node.children?.length}
          expanded={!!node.expanded}
        />
        <div className="FTN-Label-Text">{node.label}</div>
      </div>
      <Show condition={!!node.expanded}>
        <div className="FTN-Children">
          <div className="FTN-Children-Left"></div>
          <div className="FTN-Children-Content">
            <Show condition={!node.children?.length}>
              <FileTreeNode
                node={{
                  id: "empty-dir",
                  label: "Directory is empty",
                  parentId: node.id,
                  childrenIds: [],
                  expanded: false,
                  children: [],
                }}
              />
            </Show>
            <Show condition={!!node.children?.length}>
              {node.children?.map((child) => (
                <FileTreeNode node={child} key={child.label} />
              ))}
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
};
