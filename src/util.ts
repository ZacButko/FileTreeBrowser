import { TreeNode } from "./types";

const getMapyChildren = (
  children: TreeNode[]
): Array<Map<string, TreeNode>> => {
  return children.map((c) => getMapFromTree(c)) ?? [];
};
const deMapMappyChildren = (
  mapyChildren: Array<Map<string, TreeNode>>
): Array<[string, TreeNode]> => {
  return mapyChildren.map((m) => Array.from(m)).flat(1);
};
const getPureArray = (
  node: TreeNode,
  deMapedChildren: Array<[string, TreeNode]>
): Array<[string, TreeNode]> => {
  return [[node.id, node], ...deMapedChildren];
};
export const getMapFromTree = (node: TreeNode): Map<string, TreeNode> => {
  const mapyChildren = getMapyChildren(node.children ?? []);
  const deMapedChildren = deMapMappyChildren(mapyChildren);
  const pureArray = getPureArray(node, deMapedChildren);
  return new Map(pureArray);
};

export const sampleTree = {
  id: "1",
  label: "root",
  children: [
    {
      id: "2",
      label: "1-1",
      children: [],
    },
    {
      id: "3",
      label: "1-2",
      children: [
        {
          id: "4",
          label: "1-2-1",
          children: [],
        },
        {
          id: "5",
          label: "1-2-2",
          children: [
            {
              id: "6",
              label: "1-2-2-1",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
