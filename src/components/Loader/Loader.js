import PropTypes from 'prop-types';
import BarLoader from 'react-spinners/BarLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from './Loader.styled';

export const LoaderContact = ({ loading, color, size }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={{
        display: 'block',
      }}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const LoaderContacts = ({ loading, color }) => {
  return (
    <Container>
      <BarLoader
        height={4}
        width={280}
        color={color}
        loading={loading}
        cssOverride={{
          display: 'block',
        }}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

LoaderContact.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.node,
};

LoaderContacts.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
};
