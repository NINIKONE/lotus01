import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicEntity,  } from './entities/music.entity';
import { MusicRepository } from './music.repository';

@Module({
  controllers: [MusicController],
  providers: [MusicService,MusicRepository],
  imports: [TypeOrmModule.forFeature([MusicEntity])]
})
export class MusicModule {}
