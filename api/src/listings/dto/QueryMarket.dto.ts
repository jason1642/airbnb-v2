import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
export class QueryMarketDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number = 6;
}
