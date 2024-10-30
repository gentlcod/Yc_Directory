import { defineField, defineType, Rule } from 'sanity'
import { UserIcon } from 'lucide-react'

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number',
            title: 'ID',
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule) => Rule.required().error('Name is required'),
        }),
        defineField({
            name: 'username',
            type: 'string',
            title: 'Username',
            validation: (Rule) => Rule.required().error('Username is required'),
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule) => Rule.required().email().error('Valid email is required'),
        }),
        defineField({
            name: 'image',
            type: 'url',
            title: 'Image URL',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Bio',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})
