import { Phrase } from '.prisma/client'

export class PhraseEntity implements Phrase { 
    id: number
    phrase: string
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    author_id: number
}
