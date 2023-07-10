import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { Hobby } from "../../models/index"
import { CreateHobbyInput } from "./Inputs/CeateHobbyInput"
import { HobbyService } from "../services/hobby.service"
import { UpdateHobbyInput } from "../resolvers/Inputs/UpdateHobbyInput"

@Resolver(() => Hobby)
export class HobbyResolver {
  constructor(private readonly hobbyService: HobbyService) {
    this.hobbyService = new HobbyService()
  }

  @Mutation(() => Hobby)
  async createHobby(@Arg("createHobby") createHobbyInput: CreateHobbyInput) {
    return await this.hobbyService.createHobby(createHobbyInput)
  }

  @Query(() => [Hobby], { name: "allHobies" })
  async allHobies() {
    return await this.hobbyService.findAllHobby()
  }

  @Query(() => Hobby, { name: "findHobbyBiId" })
  async findHobby(@Arg("id") id: string): Promise<Hobby | null> {
    return await this.hobbyService.findBiIdHobby(id)
  }

  @Mutation(() => Hobby, { name: "deleleHobby" })
  async deleteHobby(@Arg("id") id: string): Promise<Hobby | null> {
    return await this.hobbyService.deleteHobbBiId(id)
  }

  @Mutation(() => Hobby, { name: "updateHobby" })
  async updateHobby(
    @Arg("id") id: string,
    @Arg("updateHobbyInput") updateHobbyInput: UpdateHobbyInput
  ): Promise<Hobby | null> {
    return await this.hobbyService.updateHobbyBiId(id, updateHobbyInput)
  }
}
