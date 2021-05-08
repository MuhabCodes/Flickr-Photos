import background from './background.jpg';

const loginStyle = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    padding: 10,
    minWidth: 360,
    maxWidth: 360,
    height: 420,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginLeft: 85,
    marginTop: '-25px',
    fontSize: '1.25rem',
    padding: 20,
    color: 'black',
  },
  backgroundImage: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
  },
  pos: {
    alignSelf: 'center',
  },
  cardIcon: {
    display: 'flex',
    width: '90px',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loginButton: {
    minWidth: 290,
    color: 'white',
    backgroundColor: '#128fdc',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'inherit',
    // position: 'absolute',
    marginLeft: 25,
    float: 'center',
    paddingTop: '8px',
    marginTop: '8px',
    font: 'inherit',
  },
  linkStyle: {
    marginTop: '8px',
    fontSize: '14px',
    marginLeft: 120,
  },
});

export default loginStyle;
