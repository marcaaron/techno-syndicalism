const AuthPayload = {
  userById: async ({ user: { id } }, args, ctx, info) => {
    return ctx.prisma.query.user({ where: { id } }, info)
  },
}

module.exports = { AuthPayload }
