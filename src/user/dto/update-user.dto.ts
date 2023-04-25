import { PartialType } from '@nestjs/mapped-types';
import { IsObject, IsOptional } from 'class-validator';

import { RegisterUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(RegisterUserDto) {
  @IsOptional()
  @IsObject()
  verified: { value: boolean; updatedAt: Date };

  @IsOptional()
  @IsObject()
  banner: { url: string; updatedAt: Date };

  @IsOptional()
  @IsObject()
  avatar: { url: string; approved: boolean; updatedAt: Date };

  @IsOptional()
  @IsObject()
  premium: { value: boolean; updatedAt: Date };
}