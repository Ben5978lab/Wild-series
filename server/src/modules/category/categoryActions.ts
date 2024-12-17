import type { RequestHandler } from "express";
// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const category = categories.find((cat) => cat.id === id);

  if (category != null) {
    res.json(category);
  } else {
    res.status(404);
  }
};
/* Here you code */

// Export them to import them somewhere else

export default { browse, read };
