import jwt from 'jwt-decode';

export default function Logout() {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    const decodedData = jwt(storedToken);
    const expirationDate = decodedData.exp;
    const currenttime = Date.now() / 1000;
    console.log(currenttime);
    if (expirationDate <= currenttime) {
      localStorage.removeItem('token');
    }
  }
}
