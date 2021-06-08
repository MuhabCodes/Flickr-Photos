import background from './background.jpg';

const fpasswordStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '24rem',
  },
  rootloadingpage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '15rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.25rem',
    padding: 10,
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
    marginBottom: 12,
  },
  lockIcon: {
    width: '9%', justifyContent: 'center', alignSelf: 'center', marginLeft: 130,
  },
  buttonStylings: {
    minWidth: 290,
    color: 'white',
    backgroundColor: '#128fdc',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'inherit',
    // position: 'absolute',
    marginLeft: 5,
    float: 'center',
    paddingTop: '8px',
    marginTop: '8px',
    font: 'inherit',
  },
  accessEmailParag: {
    fontSize: '14px', position: 'relative', bottom: '-15px',
  },
  LoadingIcon: {
    marginLeft: 140, width: '9%', justifyContent: 'center', alignSelf: 'center',
  },
});

export default fpasswordStyles;
