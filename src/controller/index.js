const handleWelcome = async (req, res) => {
  try {
    console.log("hello");
    return res.render("home");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  handleWelcome,
};
