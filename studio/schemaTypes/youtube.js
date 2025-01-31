import {defineField, defineType} from 'sanity'


export default defineType({
    name: "youtube",
    title: "Youtube",
    type: "document",
    fields: [
        defineField({
          name: "title",
          type: "string",  
        }),
        defineField({
            name: "thumbnail",
            type: "image",
            title: "Thumbnail" ,
            options: {
                hotspot: true,
              }, 
          }),
        defineField({
            name: "date",
            type: "datetime",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "videoUrl",
            type: "url",
            title: "Video URL"
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        }),
    ],

    // preview: {
    //     select: {
    //       title: 'title',
    //       description: 'description',
    //       media: 'thumbnail',
    //     },
    //     prepare(selection) {
    //       const {author} = selection
    //       return {...selection, subtitle: author && `by ${author}`}
    //     },
    //   },
})