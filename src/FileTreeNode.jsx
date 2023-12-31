import { Show } from "./Show";

const FileTreeNodeLabel = ({ directory, expanded }) => {
  return (
    <div className={["FTN-Label-Icon", expanded && "expanded"].join(" ")}>
      <Show condition={!directory}>●</Show>
      <Show condition={directory}>►</Show>
    </div>
  );
};

export const FileTreeNode = ({ node }) => {
  console.log("node?", node);
  if (!node) return null;
  return (
    <div>
      <div className="FTN-Label">
        <FileTreeNodeLabel
          directory={node.children?.length}
          expanded={node.expanded}
        />
        <div className="FTN-Label-Text">{node.label}</div>
      </div>
      <Show condition={node.expanded}>
        <div className="FTN-Children">
          <div className="FTN-Children-Left"></div>
          <div className="FTN-Children-Content">
            <Show condition={!node.children?.length}>
              <FileTreeNode node={{ label: "Directory is empty" }} />
            </Show>
            <Show condition={node.children?.length}>
              {node.children.map((child) => (
                <FileTreeNode node={child} key={child.label} />
              ))}
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
};
