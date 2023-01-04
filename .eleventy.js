const { execSync } = require('child_process')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets")

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/**/*.md")
    })

    eleventyConfig.on('eleventy.after', () => {
        execSync(`npx pagefind --source docs --glob \"**/*.html\"`, { encoding: 'utf-8' })
    })

    return {
        dir: {
            output: "docs"
        }
  }
}
