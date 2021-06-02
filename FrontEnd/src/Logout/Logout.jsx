import jwt from 'jwt-decode';

export default function Logout() {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    const decodedData = jwt(storedToken);
    const expirationDate = decodedData.exp;
    const currenttime = Date.now() / 1000;
    if (expirationDate < currenttime) {
      localStorage.removeItem('token');
    }
  }
}
