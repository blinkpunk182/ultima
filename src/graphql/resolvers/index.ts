import { HobbyResolver } from './hobby.resolvers'
import { UserResolver } from './user.resolvers'
//import {} from "./user.resolvers"

export const resolvers = [HobbyResolver, UserResolver] as const