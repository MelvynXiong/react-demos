import { connect } from 'react-redux';
import Link from '../dumb/Link';
import { setVisibilityFilter } from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.VisibilityFilter
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
}
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink