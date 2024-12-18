const router = require("express").Router()
module.exports = router
const {authenticate} = require("./auth")

const prisma = require("../prisma")

router.get("/", async (req, res, next) => {
  try {
    const allSubjects = await prisma.subject.findMany()
    res.json(allSubjects)
  } catch (error) {
    next(error)
  }
})

router.post("/", authenticate, async (req, res, next) => {
  const {text, description} = req.body
  try {
    const subjectToAdd = await prisma.subject.create({
      data: {
        text,
        description,
      },
    })
    res.status(201).json(subjectToAdd)
  } catch (error) {
    next(error)
  }
})
