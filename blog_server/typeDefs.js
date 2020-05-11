import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
scalar Date

type Query {
    posts(pageSize: Int = 0, currentPage: Int = 0): [Post]!
    post(id: Int!): Post
    totalCount: Int!
}

type Post {
    id: Int!
    category: Category!
    title: String!
    content: String!
    createAt: Date!
    tags: [String]!
    imageUrl: String
}

type Category {
    id: Int!
    name: String!
}
`