import { Injectable } from '@nestjs/common';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { PhraseRepository } from './repository/phrase.repository';

@Injectable()
export class PhraseService {
  constructor(private readonly repository: PhraseRepository) { }

  create(createPhraseDto: CreatePhraseDto) {
    return this.repository.create(createPhraseDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return this.repository.update(id,updatePhraseDto)
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
