import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  id: number;
  @MinLength(3)
  name: string;
  @IsEnum(['Genin', 'Chunin', 'Jonin'], { message: 'Oops! Invalid rank' })
  rank: 'Genin' | 'Chunin' | 'Jonin';
}
