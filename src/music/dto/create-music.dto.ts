import { IsNumber, IsString } from "class-validator";

export class CreateMusicDto {
    @IsString()
    name : string;

    @IsString()
    artistId : string;

    @IsNumber()
    duration : number
}
