import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from './search/search.module';

@Module({
  imports: [MusicModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'msn10911',
    database: 'homework',
    autoLoadEntities: true,
    synchronize: true 
  }), SearchModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
