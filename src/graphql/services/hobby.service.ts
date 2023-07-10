import { Hobby, PasatiempoModel } from "../../models"
import { CreateHobbyInput } from "../resolvers/Inputs/CeateHobbyInput"
import { UpdateHobbyInput } from "../resolvers/Inputs/UpdateHobbyInput"

export class HobbyService {
  async createHobby(createHobbyInput: CreateHobbyInput) {
    const newHobby = PasatiempoModel.create(createHobbyInput)
    return (await newHobby).save()
  }

  async findAllHobby() {
    return await PasatiempoModel.find()
  }

  async findBiIdHobby(id: string): Promise<Hobby | null> {
    const hobby = PasatiempoModel.findById(id)
    if (!hobby) {
      throw new Error("Hobby not found")
    }
    return hobby
  }

  async deleteHobbBiId(id: string): Promise<Hobby | null> {
    const hobby = PasatiempoModel.findByIdAndDelete(id)
    if (!hobby) {
      throw new Error("Hobby not found to delete")
    }
    return hobby
  }

  async updateHobbyBiId(
    id: string,
    UpdateHobbyInput: UpdateHobbyInput
  ): Promise<Hobby | null> {
    const updateHobby = await PasatiempoModel.findByIdAndUpdate(
      id,
      UpdateHobbyInput,
      {
        new: true
      }
    )
    if (!updateHobby) {
      throw new Error("Hobby not found to update")
    }
    await updateHobby.save()
    return updateHobby
  }
}
