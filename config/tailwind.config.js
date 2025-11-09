/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //  Railsのビューファイルをすべて監視する設定
    '../app/views/**/*.{erb,html}',
    '../app/helpers/**/*.rb',
    '../app/assets/stylesheets/**/*.css',
    '../app/assets/tailwind/**/*.css',
    '../app/javascript/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
