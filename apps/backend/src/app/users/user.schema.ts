import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Course } from './entities/User.entity';

@Schema()
export class User {
  @Prop({ required: true, default: uuidv4() })
  _id: string;
  @Prop({ required: true })
  isOnline: boolean;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  avatar: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  inscriptionDate: string;
  @Prop({ required: true })

  @Prop({
    type:[{
      _id: { type: String },
      title: { type: String },
      description: { type: String },
      percentCompleted: { type: Number },
      inscriptionDate: { type: String },
    }]
  })
  courses: Course[]
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
