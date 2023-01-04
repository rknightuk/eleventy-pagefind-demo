const { execSync } = require('child_process')

module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/**/*.md")
    })

    eleventyConfig.on('eleventy.after', () => {
        execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
    })
}
