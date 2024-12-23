export const validateForm = (formData: Record<string, any>) => {
  const errors: Record<string, string> = {};

  if (!formData.name) errors.name = "Le nom est obligatoire.";
  if (!formData.age || formData.age <= 0)
    errors.age = "L'âge doit être positif.";

  return errors;
};
