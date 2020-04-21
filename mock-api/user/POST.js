module.exports = (req, res) => {
  const userId = req.body.id;

  if (userId === 1) {
    return res.sendStatus(409);
  }

  return res.status(201).json({
    id: req.body.id,
    userName: req.body.userName,
    age: req.body.age
  });
};
