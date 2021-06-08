import background from './uptopro.jpg';

const IntegrationStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '9rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.25rem',
    padding: 10,
    marginLeft: 100,
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
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
  LoadingIcon: {
    marginLeft: 140, width: '9%', justifyContent: 'center', alignSelf: 'center',
  },
  paragraphStyle: {
    position: 'relative', bottom: '-10px',
  },
  sentParagraph: {
    fontSize: '1.0rem',
  },
});

export default IntegrationStyles;
