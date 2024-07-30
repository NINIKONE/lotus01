import { Injectable } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";
import { InjectRepository } from "@nestjs/typeorm";
import {  MusicEntity,  } from "./entities/music.entity";
import { Repository } from "typeorm";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(MusicEntity)
        private musicRepoitory: Repository<MusicEntity>
    ) {}
 async create(createMusicDto: CreateMusicDto) {
    
     this.musicRepoitory.create(createMusicDto)
    return await this.musicRepoitory.save(createMusicDto)

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
    return await this.musicRepoitory.softDelete(id)

    
  }
  async search(query: string) {
    return await this.musicRepoitory
    .createQueryBuilder('music')
    .where('music.name LIKE :query', {query: `%${query}%`})
    .getMany()
  }
}