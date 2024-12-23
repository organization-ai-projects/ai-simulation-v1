export const componentStyles = {
  // Styles de carte génériques
  card: {
    backgroundColor: 'var(--background-secondary)',
    borderRadius: '8px',
    padding: '1rem',
    margin: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },

  // Styles de bouton principaux
  button: {
    primary: {
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--primary-color)',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: '1px solid var(--primary-color)',
      cursor: 'pointer',
    }
  },

  // Styles de conteneur
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
  },

  // Styles de grille
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  }
};

export default componentStyles;
