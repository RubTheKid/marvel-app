import PropTypes from 'prop-types';
import StyledVoteCounter from './style';

function VoteCounter({ count }) {
  return <StyledVoteCounter>{ count }</StyledVoteCounter>;
}

VoteCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default VoteCounter;
