import { FileTree } from "./FileTree";
import { Paper } from "@mui/material";
import { TreeConstructorData } from "./types";
import "./styles.css";

const treeData = [
  {
    id: "root",
    label: "root node",
    expanded: false,
    parentId: null,
    childrenIds: ["root/first", "root/second", "root/third"],
    isDirectory: true,
  },
  {
    id: "root/first",
    label: "first",
    expanded: false,
    parentId: "root",
    childrenIds: ["root/first/apple", "root/first/banana"],
    isDirectory: true,
  },
  {
    id: "root/second",
    label: "second",
    expanded: false,
    parentId: "root",
    childrenIds: [],
    isDirectory: false,
  },
  {
    id: "root/first/apple",
    label: "apple",
    expanded: false,
    parentId: "root/first",
    childrenIds: [],
    isDirectory: false,
  },
  {
    id: "root/first/banana",
    label: "banana",
    expanded: false,
    parentId: "root/first",
    childrenIds: [],
    isDirectory: false,
  },
  {
    id: "root/third",
    label: "third",
    expanded: false,
    parentId: "root",
    childrenIds: [],
    isDirectory: true,
  },
] as TreeConstructorData;

export default function App() {
  return (
    <div className="App">
      <h1>Sample File Tree Browser</h1>
      <Paper
        elevation={8}
        sx={{ width: "80%", margin: "auto", padding: "1rem" }}
      >
        <FileTree tree={treeData} />
      </Paper>
    </div>
  );
}
