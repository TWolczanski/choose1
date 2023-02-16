import {server} from "../../../config";

export default async function handler(req, res) {
  const response = await fetch(`${server}/data/users.json`);
  const users = await response.json();
  const user = users.find(
    (u) => u.name === req.body.username && u.password === req.body.password
  );
  if (!user) {
    return res.status(400).json({error: "Invalid username or password"});
  }
  res.status(200).json({user});
}
