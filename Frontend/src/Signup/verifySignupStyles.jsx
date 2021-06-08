import background from './background.jpg';

const verifysignupStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '18rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.25rem',
    padding: 10,
    marginLeft: 63,
    color: 'black',
  },
  pos: {
    marginBottom: 12,
  },
  backgroundImage: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
  },
  msgIcon: {
    marginLeft: 140, width: '9%', justifyContent: 'center', alignSelf: 'center',
  },
  resendButton: {
    minWidth: 290,
    color: 'white',
    backgroundColor: '#128fdc',
    paddingTop: '0.5rem',
    marginTop: '1.8rem',
  },
  paragraphStyle: {
    position: 'relative', bottom: '-10px',
  },
  sentParagraph: {
    fontSize: '1.0rem',
  },
});

export default verifysignupStyles;
