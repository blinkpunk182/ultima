import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from 'path'
import { ApolloServer } from "apollo-server-express"
import { connectDB } from "./database/database"
import { routes } from "./routes"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { resolvers } from "./graphql/resolvers/index"
export class Server {
  private app

  constructor() {
    this.app = express()
    connectDB()
    this.configuration()
    this.middlewares()
    this.routes()
    this.apolloServer()
  }

  private configuration() {
    this.app.set("port", process.env.PORT || 4000)
  }

  private middlewares() {
    this.app.use(morgan("dev"))
    this.app.use(cors())
    this.app.use(express.json())
  }

  async apolloServer() {
    const schema = await buildSchema({
      resolvers,
      emitSchemaFile: path.join(__dirname, "schema.gql"),
    })
    const server = new ApolloServer({
      schema, 
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
    })

    await server.start()
    server.applyMiddleware({ app: this.app })

    return this.app
  }

  routes() {
    this.app.get("/", (_req, res) => {
      res.status(200).json({
        name: "API REST PASATIEMPOS"
      })
    })

    this.app.use("/api/pasatiempo", routes.PasatiempoRoute)
    this.app.use("/api/pasatiempo", routes.UserRoute)
  }

  public listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `Server está en el puerto http://localhost:${this.app.get(
          "port"
        )}`
      )
    })
  }
}
