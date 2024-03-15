import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './repository/author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly repository: AuthorRepository) { }

  create(createAuthorDto: CreateAuthorDto) {
    return this.repository.create(createAuthorDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.repository.update(id,updateAuthorDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
