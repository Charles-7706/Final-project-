// Extract user info from JWT token
export const getUserFromToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    // Remove 'Bearer ' prefix if present
    const cleanToken = token.replace('Bearer ', '');
    
    // Decode JWT payload
    const payload = JSON.parse(atob(cleanToken.split('.')[1]));
    
    return {
      id: payload.id,
      role: payload.role
    };
  } catch (error) {
    console.error('Error parsing token:', error);
    return null;
  }
};

// Check if user is logged in
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Check if user has specific role
export const hasRole = (role) => {
  const user = getUserFromToken();
  return user?.role === role;
};