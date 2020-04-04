import Blocks from '../api/blocks'
import Users from '../api/users'
import Posts from '../api/posts'
import Images from '../api/images'

class BlockConnection {
  constructor (objs) {
    this.__typename = 'BlockConnection'
    this.edges = []
    this.pageInfo = null
    for (const obj of objs) {
      this.edges.push(new BlockEdge(obj))
    }
  }
}

class BlockEdge {
  constructor (obj) {
    this.__typename = 'BlockEdge'
    this.cursor = ''
    this.node = new BlockNode(obj)
  }
}

class BlockNode {
  constructor (data) {
    this.__typename = 'Block'
    Object.assign(this, data)
  }
}

class UserConnection {
  constructor (objs) {
    this.__typename = 'UserConnection'
    this.edges = []
    this.pageInfo = null
    for (const obj of objs) {
      this.edges.push(new UserEdge(obj))
    }
  }
}

class UserEdge {
  constructor (obj) {
    this.__typename = 'UserEdge'
    this.cursor = ''
    this.node = new UserNode(obj)
  }
}

class UserNode {
  constructor (data) {
    this.__typename = 'User'
    Object.assign(this, data)
  }
}

class PostConnection {
  constructor (objs) {
    this.__typename = 'PostConnection'
    this.edges = []
    this.pageInfo = null
    for (const obj of objs) {
      this.edges.push(new PostEdge(obj))
    }
  }
}

class PostEdge {
  constructor (obj) {
    this.__typename = 'PostEdge'
    this.cursor = ''
    this.node = new PostNode(obj)
  }
}

class PostNode {
  constructor (data) {
    this.__typename = 'Post'
    Object.assign(this, data)
  }
}

class ImageConnection {
  constructor (objs) {
    this.__typename = 'ImageConnection'
    this.edges = []
    this.pageInfo = null
    for (const obj of objs) {
      this.edges.push(new ImageEdge(obj))
    }
  }
}

class ImageEdge {
  constructor (obj) {
    this.__typename = 'ImageEdge'
    this.cursor = ''
    this.node = new ImageNode(obj)
  }
}

class ImageNode {
  constructor (data) {
    this.__typename = 'Image'
    Object.assign(this, data)
  }
}

// fieldName: (parent, args, context, info) => data;
export default {
  Query: {
    allBlocks: async (_) => {
      console.log('allBlocks')
      console.log(_)
      // const posts = await allPosts(after, before, first, last)
      const blocks = await Blocks.all()
      console.log(blocks)
      const data = new BlockConnection(blocks)
      return data
    },
    allUsers: async (_) => {
      console.log('allUsers')
      console.log(_)
      // const posts = await allPosts(after, before, first, last)
      const users = await Users.all()
      console.log(users)
      const data = new UserConnection(users)
      return data
    },
    user: async (_, { id }) => {
      const user = await Users.get(id)
      const data = new UserNode(user)
      return data
    },

    // allPosts: async (_, { after, before, first, last }) => {
    allPosts: async (_) => {
      console.log('allPosts')
      console.log(_)
      // const posts = await allPosts(after, before, first, last)
      const posts = await Posts.all()
      console.log(posts)
      const data = new PostConnection(posts)
      return data
    },
    post: async (_, { id }) => {
      const post = await Posts.get(id)
      const data = new PostNode(post)
      return data
    },
    allImages: async (_) => {
      console.log('allImages')
      console.log(_)
      const images = await Images.all()
      console.log(images)
      const data = new ImageConnection(images)
      return data
    },
    image: async (_, { id }) => {
      const image = await Images.get(id)
      const data = new ImageNode(image)
      return data
    }
  },
  Mutation: {
    login: async (_, { username, password }) => {
      console.log('login')
      const data = await Users.login(username, password)
      return data
    },
    createUser: async (_, { data }) => {
      const result = await Users.create(data)
      return result
    },
    updateUser: async (_, { id, data }) => {
      const result = await Users.update(id, data)
      return result
    },
    deleteUser: async (_, { id }) => {
      const result = await Users.delete(id)
      return result
    },
    createPost: async (_, { data }) => {
      const result = await Posts.create(data)
      return result
    },
    updatePost: async (_, { id, data }) => {
      const result = await Posts.update(id, data)
      return result
    },
    deletePost: async (_, { id }) => {
      const result = await Posts.delete(id)
      return result
    },
    createImage: async (_, { data }) => {
      const result = await Images.create(data)
      return result
    },
    updateImage: async (_, { id, data }) => {
      const result = await Images.update(id, data)
      return result
    },
    deleteImage: async (_, { id }) => {
      const result = await Images.delete(id)
      return result
    }
  }
}
