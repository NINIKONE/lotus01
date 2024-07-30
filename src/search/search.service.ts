import { Injectable } from '@nestjs/common';
import { MusicRepository } from 'src/music/music.repository';
import { SearchDto } from './dto/search-dto';



@Injectable()
export class SearchService {
  constructor(private readonly musicRepo: MusicRepository) {}

  findAll(name : SearchDto) {
    const music = this.musicRepo.search(name.query)

    return music
  }
}
