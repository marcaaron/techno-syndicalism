const mutations = {
  createGroup: async (parent, args, ctx, info) => {
    const group = await ctx.prisma.mutation.createGroup({
      data: {
        name: args.name,
        slug: args.slug,
        users: {
          connect: {
            id: args.userId
          }
        },
        owner: {
          connect: {
            id: args.userId
          }
        }
      },
    }, info);
    return group
  },
  joinGroup: async (parent, args, ctx, info) => {
    const group = await ctx.prisma.mutation.updateGroup({
      where:{
        id: args.groupId
      },
      data: {
        users:{
          connect:{
            id: args.userId
          }
        }
      }
    }, info);
    return group;
  },
  leaveGroup: async (parent, args, ctx, info) => {
    const group = await ctx.prisma.mutation.updateGroup({
      where:{
        id: args.groupId
      },
      data: {
        users:{
          disconnect:{
            id: args.userId
          }
        }
      }
    }, info)
    return group;
  },
  createPost: async (parent, args, ctx, info) => {
    const post = await ctx.prisma.mutation.createPost({
      data: {
        title: args.title,
        content: args.content,
        user: {
          connect: {
            id: args.userId
          }
        },
        group: {
          connect: {
            id: args.groupId
          }
        },
      }
    }, info);
    return post;
  },
  createComment: async ( parent, { content, userId, postId }, ctx, info) => {
    const comment = await ctx.prisma.mutation.createComment({
      data: {
        content: content,
        user: {
          connect: {
            id: userId
          }
        },
        post: {
          connect: {
            id: postId
          }
        }
      }
    }, info);
    return comment;
  },
  createCommentReply: async ( parent, { content, replyToCommentId, userId, postId }, ctx, info) => {
    const comment = await ctx.prisma.mutation.createComment({
      data: {
        content: content,
        user: {
          connect: {
            id: userId
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        replyToComment:{
          connect:{
            id: replyToCommentId
          }
        }
      }
    }, info);
    return comment;
  }
}

module.exports = { mutations }
