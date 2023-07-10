import { PasatiempoModel } from "../models";

export const pasatiempoService = {
  getAll: async () => {
    return await PasatiempoModel.find();
  },
  create: async (entity: object) => {
    return await PasatiempoModel.create(entity);
  },
};
