interface Universe {
  id: number;
  name: string;
  description: string;
  status: "active" | "paused" | "terminated";
  createdAt: string;
  updatedAt: string;
}

const API_URL = "/api/universes";

export const universeService = {
  async getAll(): Promise<Universe[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Échec de la récupération");
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des univers:", error);
      throw error;
    }
  },

  async getById(id: number): Promise<Universe> {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Univers non trouvé");
      return response.json();
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de l'univers ${id}:`,
        error
      );
      throw error;
    }
  },

  async create(universe: Omit<Universe, "id">): Promise<Universe> {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(universe),
      });
      if (!response.ok) throw new Error("Échec de la création");
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la création:", error);
      throw error;
    }
  },
};

export default universeService;
