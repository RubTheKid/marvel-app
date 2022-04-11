import PropTypes from 'prop-types';
import StyledVoteButton from './style';

function VoteButton({ clickHandler }) {
  return <StyledVoteButton onClick={clickHandler}>Vote This Hero!</StyledVoteButton>;
}

VoteButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default VoteButton;
