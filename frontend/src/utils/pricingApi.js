export async function getPricing() {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "";

  const response = await fetch(`${API_BASE_URL}/api/pricing`);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to load pricing");
  }

  return result;
}
