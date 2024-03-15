import { author } from "@prisma/client";

export class AuthorEntity implements author {
    id: number
    name: string
    last_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
}
