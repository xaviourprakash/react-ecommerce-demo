/** @format */

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../collection-overview/collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner,
)(CollectionOverview);

export default CollectionOverviewContainer;
