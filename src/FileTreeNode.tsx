import { Show } from "./Show";
import { useFileTreeContext } from "./context/FileTreeContext";
import type { TreeNode } from "./types";

const leafDefaults = {
  childrenIds: [],
  expanded: false,
  children: [],
  isDirectory: false,
};

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
      <div
        className="FTN-Label"
        onClick={() =>
          node.isDirectory ? toggleNodeExpanded(node.id) : undefined
        }
      >
        <FileTreeNodeLabel
          directory={node.isDirectory}
          expanded={node.expanded}
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
                  ...leafDefaults,
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
