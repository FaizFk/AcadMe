module.exports.renderIndex = async (req, res) => {
  const search = req.query.searchTerm || "";
  const sortBy = req.query.filter?.sort || "upvotes";
  let tags = req.query.filter?.tags ||
    req.user?.foi || [
      "Computer Science",
      "Mathematics",
      "Literature",
      "Mechanics",
    ];

  if (typeof tags === "string") {
    tags = [tags];
  }

  let type = req.query.filter?.type || ["video", "pdf"];

  if (typeof type === "string") {
    type = [type];
  }

  // Fetch Resources

  res.render("pages/home", {
    page: "home",
    searchTerm: req.query.searchTerm,
    filter: {
      sortBy,
      tags,
      type,
    },
  });
};
