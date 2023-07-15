import { FileTree } from "./FileTree";
import { Paper } from "@mui/material";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Sample File Tree Browser</h1>
      <Paper
        elevation={8}
        sx={{ width: "80%", margin: "auto", padding: "1rem" }}
      >
        <FileTree
          tree={{
            label: "first node",
            expanded: true,
            children: [{ label: "second", children: [] }]
          }}
        />
      </Paper>
    </div>
  );
}
