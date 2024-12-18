const router = require("express").Router()
module.exports = router

const prisma = require("../prisma")

router.get("/", async (req, res, next) => {
  try {
    const games = await prisma.game.findMany({
      where: {hostId: req.user.id}
    })
    res.json(games)
  } catch (error) {
    next(error)
  }
})

