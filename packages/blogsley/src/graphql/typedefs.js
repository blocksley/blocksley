import gql from 'graphql-tag'

export default gql`
type Mutation {
  login(username: String, password: String): Boolean!
  createPost(data: PostInput!): Post!
  updatePost(id: ID!, data: PostInput!): Post
  deletePost(id: ID!): Boolean!
  createImage(data: ImageInput!): Image!
  updateImage(id: ID!, data: ImageInput!): Image
  deleteImage(id: ID!): Boolean!
}

type Query {
  allPosts(after: String, before: String, first: Int, last: Int): PostConnection!
  post(id: ID!): Post!
  allImages(after: String, before: String, first: Int, last: Int): ImageConnection!
  image(id: ID!): Image!
}
  
type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  cursor: String!
  node: Post!
}

type Post {
  title: String!
  model: String!
  body: String!
}

input PostInput {
  title: String!
  model: String!
  body: String!
}

type ImageConnection {
  edges: [ImageEdge!]!
  pageInfo: PageInfo!
}

type ImageEdge {
  cursor: String!
  node: Image!
}

type Image {
  title: String!
  filename: String!
  src: String!
}

input ImageInput {
  title: String!
  filename: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}`
