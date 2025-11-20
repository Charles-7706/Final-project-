const API = import.meta.env.VITE_API || "http://localhost:5000";

// Helper function for fetch requests
async function request(url, options = {}) {
  try {
    const token = localStorage.getItem("token");
    const headers = { "Content-Type": "application/json" };
    if (token) headers["token"] = `Bearer ${token}`;
    
    const res = await fetch(url, {
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Network response was not ok");
    }

    // Return parsed JSON, or null for DELETE requests
    return res.status === 204 ? null : await res.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}


export const api = {
  register: async (data) => {
    return await request(`${API}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    },
    login: async (data) => {
        return await request(`${API}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(data),

        });

    },
    hostels: async (data) => {
        return await request(`${API}/api/hostels`, {
            method: "GET",
        });
      },
    hostelbyId: async (id) => {
        return await request(`${API}/api/hostels/${id}`, {
            method: "GET",
        });
      }
  }
export default api;