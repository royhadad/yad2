import React from 'react';
import { connect } from 'react-redux';
import { deriveYfromViewPortY } from '../../../utility/calculatePositions';
import { fetchItems } from '../../../selectors/items';

class Paging extends React.Component {
    numOfPagesToShow = 7;
    getPagesToShow(numOfPages, currentPage) {
        let start, end;
        if (numOfPages - 2 <= this.numOfPagesToShow) {
            return {
                start: 2,
                end: numOfPages - 1
            }
        }
        const before = Math.floor(this.numOfPagesToShow / 2);
        const after = Math.floor(this.numOfPagesToShow / 2);
        if (currentPage - before > 1 && currentPage + after < numOfPages) {
            start = currentPage - before;
        } else if (currentPage - before <= 1) {
            start = 2;
        } else if (currentPage + after >= numOfPages) {
            start = numOfPages - this.numOfPagesToShow;
        }
        if (!start) {
            console.log('paging error!!!', { numOfPages, currentPage });
        }
        end = Math.min(start + this.numOfPagesToShow - 1);
        return { start, end };
    }
    getPagesJSX({ start, end }) {
        let pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return (
            pages.map((pageNumber) => (
                <PagingItem key={pageNumber} pageNumber={pageNumber} />
            ))
        );
    }
    render() {
        const { numOfPages, currentPage } = this.props;
        const pagesToShow = this.getPagesToShow(numOfPages, currentPage);
        return (
            <div className='paging__wrapper'>
                <PagingItem pageNumber={1} />
                <div className='paging__item__three-dots'>{pagesToShow.start > 2 ? '...' : '   '}</div>
                {this.getPagesJSX(pagesToShow)}
                <div className='paging__item__three-dots'>{pagesToShow.end < numOfPages - 1 ? '...' : '   '}</div>
                <PagingItem pageNumber={numOfPages} />
            </div>
        );
    }
}
const mapStateToProps1 = (state) => ({
    numOfPages: state.items.numOfPages,
    currentPage: state.items.currentPage
});
export default connect(mapStateToProps1)(Paging);

const PagingItemWithoutStore = ({ pageNumber, isSelected }) => {
    const setCurrentPage = () => {
        fetchItems(pageNumber);
        window.scrollTo(0, getScrollToYPositionTopOfSearchBar());
    }
    return (
        <div className={isSelected ? 'paging__item__selected' : 'paging__item'} onClick={setCurrentPage}>
            {pageNumber}
        </div>
    );
};
const getScrollToYPositionTopOfSearchBar = () => {
    const topOfSearchResultsWrapperYPosition = deriveYfromViewPortY(document.getElementsByClassName('search-bar__wrapper')[0].getBoundingClientRect().top);
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    return Math.min(topOfSearchResultsWrapperYPosition, currentPosition);
}
const mapStateToProps2 = (state, ownProps) => ({
    isSelected: state.items.currentPage === ownProps.pageNumber
});
const PagingItem = connect(mapStateToProps2)(PagingItemWithoutStore);