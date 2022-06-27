module.exports = ({ env }) => ({
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                posts: {
                    field: 'slug',
                    references: 'title',
                },
                pages: {
                    field: 'slug',
                    references: 'title',
                },
                categories: {
                    field: 'slug',
                    references: 'name',
                },
                authors: {
                    field: 'slug',
                    references: 'name',
                },
            },
        },
    },
});