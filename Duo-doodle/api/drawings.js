const { authenticate } = require("./auth")

const router = require("express").Router()
module.exports = router

const prisma = require("../prisma")

router.post("/", authenticate, async (req, res, next) => {
  const {imgURL, userId } = req.body.user
  try {
    const drawingToAdd = await prisma.drawing.create({
      data:{
        imgURL,
        userId
      }
    })
    res.status(201).json(drawingToAdd)
  } catch (error) {
   next(error) 
  }
})