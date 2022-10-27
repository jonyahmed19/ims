const profileController = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "works",
  });
};

module.exports = {
  profileController,
};
