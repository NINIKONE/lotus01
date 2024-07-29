import { Injectable } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";
import { InjectRepository } from "@nestjs/typeorm";
import {  Musicentity } from "./entities/music.entity";
import { Repository } from "typeorm";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(Musicentity)
        private musicRepoitory: Repository<Musicentity>
    ) {}
 async create(createMusicDto: CreateMusicDto) {
    

    return await this.musicRepoitory.create(createMusicDto)
  }

  async findAll() {
    return await this.musicRepoitory.find()
  }

  async findOne(id: number) {
    return await this.musicRepoitory.findOneBy({id})
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    

    return await this.musicRepoitory.update(id, updateMusicDto)
  }

  async remove(id: number) {
    return await this.musicRepoitory.delete(id)
  }
}