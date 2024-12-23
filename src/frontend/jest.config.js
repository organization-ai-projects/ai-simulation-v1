module.exports = {
  testEnvironment: "jsdom", // Utilise jsdom pour simuler un environnement de navigateur
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Configuration supplémentaire après l'environnement de test
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mapper les fichiers CSS, LESS, SCSS, SASS pour éviter les erreurs pendant les tests
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Utilise babel-jest pour transformer les fichiers .js et .jsx
    "^.+\\.tsx?$": "ts-jest", // Si tu utilises TypeScript, pour les fichiers .ts et .tsx
  },
  moduleFileExtensions: ["js", "jsx", "json", "node", "ts", "tsx"], // Extensions de fichier prises en charge
};
