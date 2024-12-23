module.exports = {
  plugins: [
    require("postcss-import"), // Pour importer des fichiers CSS
    require("tailwindcss/nesting"), // Pour gérer les règles imbriquées
    require("tailwindcss"), // Framework Tailwind CSS
    require("autoprefixer")(), // Utilisation de Browserslist défini dans package.json
  ],
};
