import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Footer = ({ count }) => (
  <Container>
    <p>You have {count} favorites</p>
  </Container>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
