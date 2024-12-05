const router = require("express").Router()
module.exports = router

const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken")
const prisma = require("../prisma")

const createToken = (id) => {
  return jwt.sign({id}, JWT_SECRET, {expiresIn:"1d"})
}

router.use(async(req, res, next) => {
  const userHeader = req.headers.authorization
  const token = userHeader.slice(7)
  if (!token) {
    return next()
  }
  try {
    const {id} = jwt.verify(token, JWT_SECRET)
    const user = await prisma.user.findUniqueOrThrow({
      where: {id}
    })
    req.user = user
  } catch (error) {
    next(error)
  }
})

router.post("/register", async(req, res, next) => {
  const {username, email, password} = req.body
  try {
    const registeredUser = await prisma.user.register(username, email, password)
    const token = createToken(registeredUser.id)
    res.status(201).json({token})
  } catch (error) {
    next(error)
  }
})

router.post('login', async(req, res, next) => {
  const {email, password } = req.body
  try {
    const logedInUser = await prisma.user.login(email, password)
    const token = createToken(logedInUser.id)
    res.json({token})
  } catch (error) {
    next(error)
  }
})

const authenticate = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    next({status: 401, message: "You must be logged in!"})
  }
}

module.exports = {
  router,
  authenticate
}