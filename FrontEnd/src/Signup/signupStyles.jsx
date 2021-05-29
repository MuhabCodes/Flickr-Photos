import background from './background.jpg';

const signUpStyle = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // float: 'center',
    // marginTop: 20,
    // padding: 10,
    minWidth: 360,
    maxWidth: 360,
    height: 720,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.25rem',
    color: 'black',
    marginLeft: 105,
  },
  pos: {
    marginBottom: 12,
  },
  signUpButton: {
    minWidth: 290,
    color: 'white',
    backgroundColor: '#128fdc',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'inherit',
    // position: 'absolute',
    marginLeft: 30,
    float: 'center',
    paddingTop: '8px',
    marginTop: '8px',
    font: 'inherit',
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
  policiesDiv: {
    paddingTop: '8px',
    fontSize: '0.75rem',
    color: '#898989',
    position: 'relative',
    alignSelf: 'center',
    marginLeft: 27,
  },
  alreadymemberDiv: {
    fontSize: '0.875rem', position: 'relative', alignSelf: 'center',
  },
  cardIcon: {
    display: 'flex',
    width: '90px',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default signUpStyle;
