import AddHostel from "@/components/addHostel";

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
      },
    Addhostel: async (data) => {
        return await request(`${API}/api/hostels`, {
            method: "POST",
            body: JSON.stringify(data),
        });
      },
    updateHostel: async (id, data) => {
        return await request(`${API}/api/hostels/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
      },
    deleteHostel: async (id) => {
        return await request(`${API}/api/hostels/${id}`, {
            method: "DELETE",
        });
      },
      institutions: async (data) => {
        return await request(`${API}/api/institutions`, {
            method: "GET",
        });
      },
      institutionbyId: async (id) => {
        return await request(`${API}/api/institutions/${id}`, {
            method: "GET",
        });
      },
    Addinstitution: async (data) => {
        return await request(`${API}/api/institutions`, {
            method: "POST",
            body: JSON.stringify(data),
        });
      },
    updateInstitution: async (id, data) => {
        return await request(`${API}/api/institutions/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
      },
    deleteInstitution: async (id) => {
        return await request(`${API}/api/institutions/${id}`, {
            method: "DELETE",
        });
      },
      institutionbyname: async (name) => {
        return await request(`${API}/api/institutions/name/${name}`, {
            method: "GET",
        });
      },
      me: async () => {
        return await request(`${API}/api/auth/me`, {
            method: "GET",
        });
      },
      createbooking: async (data) => {
        return await request(`${API}/api/bookings`, {
            method: "POST",
            body: JSON.stringify(data),
        });
      },
      updateBookingStatus: async (id, data) => {
        return await request(`${API}/api/bookings/${id}/status`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
      },
      bookings: async (data) => {
        return await request(`${API}/api/bookings`, {
            method: "GET",
        });
      },
      bookingbyId: async (id) => {
        return await request(`${API}/api/bookings/${id}`, {
            method: "GET",
        });
      },
      updatebooking: async (id, data) => {
        return await request(`${API}/api/bookings/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
      },
      deletebooking: async (id) => {
        return await request(`${API}/api/bookings/${id}`, {
            method: "DELETE",
        });
      },
  }
export default api;