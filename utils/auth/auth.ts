export const isLoggedIn = (user: string) => {
  if (user) {
    return true;
  }
  return false;
};

export const userLogin = (email: string, password: string) => {
  if (email === "demo@example.com" && password === "password123") {
    localStorage.setItem("user", "demo@example.com");
    return true;
  }
  if (email === "test@user.com" && password === "testpass") {
    localStorage.setItem("user", "test@user.com");
    return true;
  }
  return false;
};
