const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const dataFile = path.join(__dirname, "data", "topics.json");

app.use(express.json());
app.use(cors());

app.get("/api/topics", async (req, res) => {
  try {
    const { search, sort } = req.query;

    //validating search and sort
    if (search && typeof search !== "string") {
      res.status(400).json({ error: "Invalid search items." });
    }
    if (sort && typeof sort !== "string") {
      res.status(400).json({ error: "Invalid sort items." });
    }
    // Reading the data from the file
    const data = fs.readFileSync(dataFile, "utf-8");
    let topics = JSON.parse(data);
    if (search) {
      const searchlower = search.toLowerCase();
      topics = topics.filter((topic) =>
        topic.name.toLowerCase().includes(searchlower)
      );
    }
    if (sort) {
      topics.sort((a, b) => a.name.localeCompare(b.name));
    }
    res
      .status(200)
      .json(topics.map(({ id, name, category }) => ({ id, name, category })));
  } catch (error) {
    // Handling errors
    console.log("Error", error);
    if (error.code === "ENOENT") {
      res.status(500).json({ error: "Topics data file not found" });
    } else if (error instanceof SyntaxError) {
      res.status(500).json({ error: "Invalid topics data format" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}/api/topics`);
});
