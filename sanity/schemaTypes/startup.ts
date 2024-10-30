import {defineField, defineType, Rule} from 'sanity'

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            },
        }),

        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'author' }],
        }),

        defineField({
            name: 'views',
            type: 'number',
            title: 'Views',
        }),

        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),

        defineField({
            name: 'category',
            type: 'string',
            title: 'Category',
            validation: (Rule) =>
                Rule.min(1).max(20).required().error('Please enter a category'),
        }),

        defineField({
            name: 'image',
            type: 'url',
            title: 'Image URL',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'pitch',
            type: 'markdown',
        }),
    ],
})
