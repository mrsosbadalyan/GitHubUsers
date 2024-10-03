const API_BASE_URL = "https://api.github.com/users";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    const data = await response.json();
    return data.slice(0, 30); // Return only the first 30 users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};
