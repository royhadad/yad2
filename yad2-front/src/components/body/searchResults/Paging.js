import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../actions/items';

class Paging extends React.Component {
    numberOfPagesToShow = 7;
    getPagesToShow(numOfPages, currentPage) {
        let start, end;
        if (this.numberOfPagesToShow <= numOfPages - 2) {
            return {
                start: 2,
                end: numOfPages - 1
            }
        }
        //TODO
        start = 2;
        end = Math.min(start + this.numberOfPagesToShow, numOfPages - 1);
        return { start, end };
    }
    getPagesJSX({ start, end }) {
        let pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return (
            pages.map((pageNumber) => (
                <PagingItem pageNumber={pageNumber} />
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
    numOfPages: state.items.numberOfPages,
    currentPage: state.items.currentPage
});
export default connect(mapStateToProps1)(Paging);

const PagingItemWithoutStore = ({ pageNumber, isSelected, setCurrentPage }) => {
    return (
        <div className={isSelected ? 'paging__item__selected' : 'paging__item'} onClick={setCurrentPage}>
            {pageNumber}
        </div>
    );
};
const mapStateToProps2 = (state, ownProps) => ({
    isSelected: state.items.currentPage === ownProps.pageNumber
});
const mapDispatchToProps2 = (dispatch, ownProps) => ({
    setCurrentPage: () => dispatch(setCurrentPage(ownProps.pageNumber))
});
const PagingItem = connect(mapStateToProps2, mapDispatchToProps2)(PagingItemWithoutStore);