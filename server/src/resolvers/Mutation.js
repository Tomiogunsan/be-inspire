const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');

async function post(parent, args, context, info) {
  const { userId } = context;

  let postedBy = undefined
  if (userId) {
    postedBy = { connect: { id: userId } }
  }

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy
    }
  });

  context.pubsub.publish('NEW_LINK', newLink);

  return newLink;
}

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, password }
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email }
  });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(
    args.password,
    user.password
  );
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

// async function resetPasswordRequest (parent, { email }, ctx, info) {
//     const user = await ctx.db.query.user({ where: { email } })
//     const token = jwt.sign({ userId: user.id}, APP_SECRET, { expiresIn: '1h'})
    
//     // Send email to user with url and token
//     console.log(token) // TODO: implement sending of email with url and token

//     return { email: user.email }
//   }

// async function resetPassword (parent, { token, password }, ctx, info) {
//     // Verify token and check if the user exist
//     const { userId } = jwt.verify(token, APP_SECRET)
//     const userExists = await ctx.db.exists.User({ id: userId })
//     if (!userExists) {
//       throw new Error(`User doesn't exist.`)
//     }

    // If no error, set new password.
  //   const newPassword = await bcrypt.hash(password, 10)
  //   return ctx.db.mutation.updateUser({
  //     where: { id: userId },
  //     data: { password: newPassword }
  //    })
  // }




async function vote(parent, args, context, info) {
  const { userId } = context;

  const vote = await context.prisma.vote.findUnique({
    where: {
      linkId_userId: {
        linkId: args.linkId,
        userId: userId
      }
    }
  });

  if (Boolean(vote)) {
    throw new Error(
      `Already voted for link: ${args.linkId}`
    );
  }

  const newVote = context.prisma.vote.create({
    data: {
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId } }
    }
  });
  context.pubsub.publish('NEW_VOTE', newVote);

  return newVote;
}

module.exports = {
  post,
  signup,
  login,
  
  vote
};

