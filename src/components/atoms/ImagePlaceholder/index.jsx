import styled from "styled-components";
import PropTypes from "prop-types";

const ImagePlaceholder = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

ImagePlaceholder.propTypes = {
  style: PropTypes.object
};
ImagePlaceholder.defaultProps = {
  style: {
    width: "initial",
    height: "initial"
  }
};

export default ImagePlaceholder;
