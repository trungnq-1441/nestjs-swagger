import { PartialType } from '@nestjs/swagger';
import { CraeteUserDTO } from './create-user.dto';

export class UpdateUserDTO extends PartialType(CraeteUserDTO) {

}
