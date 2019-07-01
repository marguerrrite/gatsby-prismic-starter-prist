import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const Image = ({ data }) => (
    <Img  />
)

export default Image

Image.propTypes = {
    data: PropTypes.object.isRequired,
}