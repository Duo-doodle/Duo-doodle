const router = require("express").Router()
module.exports = router

const {authenticate} = require("./auth.js")

router.get('/', authenticate, async (req, res, next) => {
  try {
    const userInfo = await prisma.user.findUniqueOrThrow({
      where: {email: req.user.email}
    })
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
})