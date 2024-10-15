import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Naruto', rank: 'Genin' },
    { id: 2, name: 'Sasuke', rank: 'Genin' },
    { id: 3, name: 'Sakura', rank: 'Genin' },
  ];
  create(createNinjaDto: CreateNinjaDto) {
    const ninja = {
      id: this.ninjas.length + 1,
      ...createNinjaDto,
    };
    this.ninjas.push(ninja);
    return createNinjaDto;
  }

  findAll(name?: string) {
    if (name) {
      return this.ninjas.filter((ninja) => ninja.name === name);
    }
    return this.ninjas;
  }

  findOne(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error(`Ninja with id ${id} not found`);
    }
    return ninja;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
    return updateNinjaDto;
  }

  remove(id: number) {
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return `Ninja with id ${id} has been removed`;
  }
}
