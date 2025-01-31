import {defineField, defineType} from 'sanity'


export default defineType({
   name:'event',
   title:'Event',
   type:'document',
   fields: [
    defineField({
        name:'title',
        title:'Event Title',
        type:'string',
        validation:(Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
        name:'date',
        title:'Date',
        type:'datetime',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:'description',
        title:'Description',
        type:'text',
        validation:(Rule) => Rule.max(200),
    }),
    defineField({
        name:'image',
        title:'Event Image',
        type:'image',
        options:{
            hotspot: true,
        },
    }),
    defineField({
        name:'link',
        title:'Event Link',
        type:'url',
        description: 'Link to the event or registration page.',
    }),
   ],
})