import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePhraseDto } from '../dto/create-phrase.dto'
import { UpdatePhraseDto } from '../dto/update-phrase.dto'
import { PhraseEntity } from '../entities/phrase.entity'

@Injectable()
export class PhraseRepository {
    private readonly service

    constructor(private readonly prisma: PrismaService) {
        this.service = this.prisma.phrase
    }

    async create(dto: CreatePhraseDto): Promise<PhraseEntity> {
        return await this.service.create({
            data: dto,
        })
    }

    async findAll(): Promise<PhraseEntity[]> {
         

        return await this.service.findMany()
    }

    async findOne(id: number) {
        return await this.service.findUnique({
            where: { id },
            include: {
                author:true
            },
        })
    }

    async update(id: number, dto: UpdatePhraseDto) {
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
