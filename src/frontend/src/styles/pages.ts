export const pageStyles = {
  // Styles communs pour toutes les pages
  pageContainer: {
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },

  // Styles pour la page Univers
  universes: {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: 'var(--background-secondary)',
    }
  },

  // Styles pour la page Analytics
  analytics: {
    dashboard: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
    },
    chart: {
      minHeight: '300px',
      padding: '1rem',
      backgroundColor: 'var(--background-secondary)',
    }
  },

  // Styles pour la page Events
  events: {
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    event: {
      padding: '1rem',
      borderLeft: '3px solid var(--primary-color)',
      marginLeft: '1rem',
    }
  },

  // Styles pour la page Multiverses
  multiverses: {
    layout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    list: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    }
  }
};

export default pageStyles;
