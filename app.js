const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routers/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Express listening on PORT: ${PORT}`);
});
