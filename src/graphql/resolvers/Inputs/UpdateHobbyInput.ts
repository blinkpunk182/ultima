import { Field, InputType, ID } from 'type-graphql'

@InputType()
export class UpdateHobbyInput {

  @Field(() => ID)
  id: string

  @Field(() => String)
  nombre: string

  @Field(() => String)
  tipo_pasatiempo: string

  @Field(() => String)
  lugar_pasatiempo: string
}
