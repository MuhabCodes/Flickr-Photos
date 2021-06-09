export default function CheckLogIn() {
  if (localStorage.getItem('token') === null) {
    return (false);
  }
  return (true);
}
