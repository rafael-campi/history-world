import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAuthorDto } from '../dto/create-author.dto'
import { UpdateAuthorDto } from '../dto/update-author.dto'
import { AuthorEntity } from '../entities/author.entity'

@Injectable()
export class AuthorRepository {
    private readonly service

    constructor(private readonly prisma: PrismaService) {
        this.service = this.prisma.author
    }

    async create(dto: CreateAuthorDto): Promise<AuthorEntity> {
        return await this.service.create({
            data: dto,
        })
    }

    async findAll(): Promise<AuthorEntity[]> {


        return await this.service.findMany()
    }

    async findOne(id: number) {
        return await this.service.findUnique({
            where: { id },
            include: {
                phrase: true
            },
        })
    }

    async update(id: number, dto: UpdateAuthorDto) {
        return await this.service.update({
            where: { id },
            data: dto,
        })
    }

    async remove(id: number) {
        return await this.service.update({
            where: { id },
            data: { active: false },
        })
    }
}
