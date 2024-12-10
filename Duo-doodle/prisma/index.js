const bcrypt = require("bcrypt");
const {PrismaClient} = require ("@prisma/client");

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async register (username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userToAdd = await prisma.user.create({
          data: {
            username,
            email,
            password: hashedPassword,
        }});
        return userToAdd
      },

      async login (email, password) {
        const userToLog = await prisma.user.findUniqueOrThrow({
          where: {email},
        });
        const valid = await bcrypt.compare(password, userToLog.password);
        if (!valid) throw Error ("Invalid Password");
        return userToLog
      }
    },
  }
});

module.exports = prisma

