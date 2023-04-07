import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [
  {
    firstName: "Ian",
    lastName: "Agasen",
    age: 23,
  },
  {
    firstName: "Isabel",
    lastName: "Calub",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = { id: uuidv4(), ...req.body };
  users.push(user);
  res.send(`User with the name ${user.firstName} ${user.lastName}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((u) => u.id === id);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("Resource Not Found.");
  }
});

export default router;
