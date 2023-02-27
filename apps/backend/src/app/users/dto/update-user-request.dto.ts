import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequestDto {
  @ApiProperty({ description: 'User\'s name' })
  name: string;
  @ApiProperty({ description: 'User\'s lastName' })
  lastName: string;
  @ApiProperty({ description: 'User\'s email' })
  email: string;
  @ApiProperty({ description: 'User\'s phone' })
  phone: string;
}