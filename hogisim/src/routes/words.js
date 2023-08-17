const words = require("../schemas/words");
router.post("/wordss", async (req, res) => {
	const { wordId, name, category} = req.body;

  const goods = await Goods.find({ wordId });
  if (words.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createWord = await words.create({ wordId, name, category });

  res.json({ words: createWord });
});