import { ObjectType, Field, ID } from "type-graphql"
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from "@typegoose/typegoose"
@ObjectType({ description: "The hobby model" })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Hobby {

  @Field(() => ID)
  id: string
  
  @Field(() => String)
  @Property({ required: true })
  nombre: string

  @Field(() => String)
  @Property({ required: true })
  tipo_pasatiempo: string

  @Field(() => String)
  @Property({ required: true })
  lugar_pasatiempo: string

  @Field(() => String)
  @Property({ required: true })
  descripcion: string
}

export const PasatiempoModel = getModelForClass(Hobby)
