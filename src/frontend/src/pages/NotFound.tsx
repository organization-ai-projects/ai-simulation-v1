const NotFound: React.FC = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-red-500">404</h1>
    <p className="text-lg text-gray-700">Page non trouvée</p>
    <a href="/" className="text-primary underline mt-4 block">
      Retourner à l'accueil
    </a>
  </div>
);

export default NotFound;
