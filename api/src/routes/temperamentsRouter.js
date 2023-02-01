const { Router } = require("express");
const temperamentsRouter = Router();
const { getTemperaments } = require("../controllers/temperamentsControllers");

temperamentsRouter.get("/", async (req, res) => {
  try {
    const dogTemp = await getTemperaments();
    res.status(200).json(dogTemp);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
module.exports = temperamentsRouter;
