// Function to fetch data
export   const fetchDataProjet = async () => {
    try {
      const response = await fetch('./dataProjet.json'); // Utilisation de fetch pour importer les données
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Pas de data:', error); // Utilisation correcte du message d'erreur
    }
  };