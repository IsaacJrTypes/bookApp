const express = require("express");
const app = express();
const port = 4000;

//set up mongoose
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/bookapp";

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connection sucessful");
    }
  }
);

//Create SCHEMA
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  purchaseCount: Number,
  imageUrl: String,
  tags: Array,
});
const Book = mongoose.model("Book", bookSchema);

// Book.create(
//   {
//     title: "New Book",
//     author: "Robert Green",
//     description: "Book on mastering skills",
//     category: "self-help",
//     purchaseCount: 40,
//     imageUrl: "http://random_url.com",
//     tags: ["tag1", "another tag"],
//   },
//   (err, book) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(book);
//     }
//   }
// );

Book.find({}, (err, books) => {
  if (err) {
    console.log(err);
  } else {
    console.log({ books });
  }
});

app.listen(port, () => console.log(`app listening on port ${port}`));
