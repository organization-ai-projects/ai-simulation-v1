import React, { useState } from "react";

interface AgentFormProps {
  onSubmit: (agent: { name: string; age: number }) => void;
}

const AgentForm: React.FC<AgentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      onSubmit({ name, age: Number(age) });
      setName("");
      setAge("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(Number(e.target.value))}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AgentForm;
