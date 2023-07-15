import { FileTree } from "./FileTree";
import { Paper } from "@mui/material";
import "./styles.css";
import { TreeNode } from "./types";

export default function App() {
  const tree = {
    id: "root",
    label: "first node",
    expanded: false,
    children: [{ id: "root/second", label: "second", children: [] }],
  } as TreeNode;

  return (
    <div className="App">
      <h1>Sample File Tree Browser</h1>
      <Paper
        elevation={8}
        sx={{ width: "80%", margin: "auto", padding: "1rem" }}
      >
        <FileTree tree={tree} />
      </Paper>
    </div>
  );
}
