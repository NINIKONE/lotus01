import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MusicModule } from 'src/music/music.module';

@Module({
  imports: [MusicModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
