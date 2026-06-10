const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const setRole = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/set-role`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: "An error occurred while setting the role.",
    };
  }
};

export const registerCompany = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: "An error occurred while registering the company.",
    };
  }
};
