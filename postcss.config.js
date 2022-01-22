let environment = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
}

//Purge the CSS for staging and production
if (
    process.env.RAILS_ENV == 'staging' ||
    process.env.RAILS_ENV === 'production'
) {
  environment.plugins.push(
      require('@fullhuman/postcss-purgecss')({
        content: [
          './app/**/*.html.erb',
          './app/**/*.slim',
          './app/**/*.scss',
          './config/initializers/simple_form.rb',
          './app/helpers/**/*.rb',
          './app/javascript/**/*.js',
          './app/javascript/**/*.jsx',
          './node_modules/tom-select/dist/css/tom-select.default.css',
          './node_modules/jsoneditor/dist/jsoneditor.min.css',
          './node_modules/flatpickr/dist/flatpickr.min.css',
          './node_modules/slick-carousel/slick/slick.css',
          './node_modules/react-datepicker/dist/react-datepicker.css',
          './app/javascript/stylesheets/home/custom.css',
          './app/javascript/stylesheets/home/slick-theme.css',
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      })
  )
}
module.exports = environment
