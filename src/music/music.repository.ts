import { Injectable } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Music } from "./entities/music.entity";
import { Repository } from "typeorm";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(Music)
        private musicRepoitory: Repository<Music>
    ) {}
  create(createMusicDto: CreateMusicDto) {
    const newMusic = new Music();
    newMusic.name = createMusicDto.name;
    newMusic.artistId = createMusicDto.artistId;
    newMusic.duration = createMusicDto.duration

    return this.musicRepoitory.save(newMusic)
  }

  findAll() {
    return this.musicRepoitory.find()
  }

  findOne(id: number) {
    return this.musicRepoitory.findOneBy({id})
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    const updatedMusuc = new Music();
    updatedMusuc.artistId = updateMusicDto.artistId;
    updatedMusuc.duration = updateMusicDto.duration;
    updatedMusuc.name = updateMusicDto.name;

    return this.musicRepoitory.update(id, updatedMusuc)
  }

  remove(id: number) {
    return this.musicRepoitory.delete(id)
  }
}