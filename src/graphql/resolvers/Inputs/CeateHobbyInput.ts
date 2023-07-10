import { InputType, Field } from "type-graphql"
import { Hobby } from "../../../models/index"
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateHobbyInput implements Partial<Hobby>{
  @Field(() => String)
  @IsNotEmpty()
  nombre: string

  @Field(() => String)
  @IsNotEmpty()
  tipo_pasatiempo: string

  @Field(() => String)
  @IsNotEmpty()
  lugar_pasatiempo: string

  @Field(() => String)
  @IsNotEmpty()
  descripcion: string
}
