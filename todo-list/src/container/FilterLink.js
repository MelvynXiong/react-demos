<<<<<<< HEAD
// import { connect } from 'react-redux';
// import Link from '../dumb/Link';
import { NavLink } from 'react-router-dom';
import React from 'react';
// import { setVisibilityFilter } from '../actions/index';

// const mapStateToProps = (state, ownProps) => {
//     return {
//         active: ownProps.filter === state.VisibilityFilter
//     };
// };
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onClick: () => {
//             dispatch(setVisibilityFilter(ownProps.filter));
//         }
//     };
// }
// const FilterLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Link)

const FilterLink = 
=======
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

>>>>>>> ad13aee95a9edd7bae0d335462f13474156c2882
export default FilterLink