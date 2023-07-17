import { FileTree } from "./FileTree";
import { Paper } from "@mui/material";
import { TreeConstructorData } from "./types";
import "./styles.css";

const treeData = [
  {
    id: "root",
    label: "first node",
    expanded: false,
    parentId: null,
    childrenIds: ["root/second"],
  },
  {
    id: "root/second",
    label: "second",
    expanded: false,
    parentId: "root",
    childrenIds: [],
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
