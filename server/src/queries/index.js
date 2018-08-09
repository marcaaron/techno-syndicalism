const { getUserId, queryToNormalizedArray } = require('../utils');

const queries = {
  allUsers: async (parent, args, ctx, info) => {
    return ctx.prisma.query.users(parent, info)
  },
  allGroups: async (parent, args, ctx, info) => {
    return ctx.prisma.query.groups(parent, info)
  },
  groupBySlug: async (parent, { slug }, ctx, info) => {
    const group = await ctx.prisma.query.group({ where: { slug } }, info)
    if (!group) {
      throw new Error(`No such group found with slug: ${slug}`)
    }
    return group;
  },
  userByUsername: async (parent, { username }, ctx, info) => {
    const user = await ctx.prisma.query.user({where: {username}}, info)
    if (!user) {
      throw new Error(`No such user found with username: ${username}`)
    }
    return user;
  },
  allPosts: async (parent, args, ctx, info) => {
    const posts = await ctx.prisma.query.posts(parent, info)
    return posts;
  },
  postById: async (parent, { id }, ctx, info) => {
    const post = await ctx.prisma.query.post({where: { id }}, info)
    return post;
  },
  user: async (parent, args, ctx, info ) => {
    const userId = getUserId(ctx);
    const user = await ctx.prisma.query.user({where: {id: userId}}, info)
    if(user){
      return user;
    }else{
      return null;
    }
  },
  searchGroupsByName: async (parent, {search_query}, ctx, info) => {
    const search_query_words = queryToNormalizedArray(search_query);
    const groups = await ctx.prisma.query.groups({
      where: {
        OR: search_query_words
      }
    }, info)
    console.log(groups);
    return groups;
  }
}
module.exports = {
  queries
}
