import { Controller, Get, Query,  } from '@nestjs/common';
import { SearchService } from './search.service';

import { SearchDto } from './dto/search-dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  findAll(@Query() name: SearchDto) {
    return this.searchService.findAll(name);
  }
}
