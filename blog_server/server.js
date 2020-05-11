import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers })
const app = new Koa()
server.applyMiddleware({ app })

app.listen({port: 8080}, () => {
    console.log("http://localhost:8080/graphql 에서 대기중")
})