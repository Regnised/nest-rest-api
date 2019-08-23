import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemsDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemsDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
