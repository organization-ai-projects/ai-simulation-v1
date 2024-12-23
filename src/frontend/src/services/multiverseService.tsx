interface Multiverse {
  id: number;
  name: string;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
}

const API_URL = "/api/multiverses";

export const multiverseService = {
  async getAll(): Promise<Multiverse[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erreur réseau");
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des multivers:", error);
      throw error;
    }
  },

  async getById(id: number): Promise<Multiverse> {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Multivers non trouvé");
      return response.json();
    } catch (error) {
      console.error(
        `Erreur lors de la récupération du multivers ${id}:`,
        error
      );
      throw error;
    }
  },

  async create(multiverse: Omit<Multiverse, "id">): Promise<Multiverse> {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(multiverse),
      });
      if (!response.ok) throw new Error("Erreur création");
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la création du multivers:", error);
      throw error;
    }
  },
};

export default multiverseService;
