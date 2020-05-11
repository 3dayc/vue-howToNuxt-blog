import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { postList } from './data'

Array.prototype.skip = function (count) {
    return this.filter((_, i) => i >= count)
}
Array.prototype.take = function (count) {
    return this.filter((_, i) => i < count)
}

export const resolvers = {
    Date : new GraphQLScalarType({
        name: 'Date',
        description: 'Date 타입',
        parseValue(value) {
            return new Date(value)
        },
        serialize(value) {
            return value.getTime()
        },
        parseLiteral(ast) {
            if(ast.kind == Kind.INT) {
                return new Date(ast.value)
            }
            return null
        }
    }),
    Query: {
        posts: async (parent, { pageSize, currentPage}) => {
            let takeCount = pageSize
            let skipCount = pageSize * (currentPage - 1)

            return postList
                .skip(skipCount)
                .take(takeCount)

        },
        post: async (parent, { id }) => {
            return postList.find(post => post.id === id)

        },
        totalCount: async (parent) => {
            return postList.length

        }
    }
}