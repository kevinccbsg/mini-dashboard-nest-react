import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User\'s is online' })
  isOnline: boolean;
  @ApiProperty({ description: 'User\'s name' })
  name: string;
  @ApiProperty({ description: 'User\'s avatar' })
  avatar: string;
  @ApiProperty({ description: 'User\'s lastName' })
  lastName: string;
  @ApiProperty({ description: 'User\'s email' })
  email: string;
  @ApiProperty({ description: 'User\'s phone' })
  phone: string;
  @ApiProperty({ description: 'User\'s inscriptionDate' })
  inscriptionDate: string;
}
