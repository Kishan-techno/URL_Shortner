const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const app = express();
const port = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"));

app.use(express.json());

// route for creating short URL
app.use("/url", urlRoute);

// redirect route
app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(entry.redirectURL);
});

app.listen(port, () =>
  console.log(`Server Started at PORT:${port}`)
);