import { userModel } from "../models";

export const userService = {
  create: async (entity: object) => {
    return await userModel.create(entity);
  },
  findOne: async (filter: object) => {
    return await userModel.findOne(filter);
  },
};
