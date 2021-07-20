import { ApiProperty } from '@nestjs/swagger';

export class CraeteBotDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
