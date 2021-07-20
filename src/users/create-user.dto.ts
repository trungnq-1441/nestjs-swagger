import { ApiProperty } from '@nestjs/swagger';

export class CraeteUserDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;
}
