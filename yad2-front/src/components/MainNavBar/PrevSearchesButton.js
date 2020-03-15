import React from 'react';
import prevSearchesFixture from '../../data/fixtures/PrevSearchesButton';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '../../utility/calculatePositions';
import { Link } from 'react-router-dom';
import resources from '../../resources.json';
import uuid from 'uuid';
const prevSearchesResources = resources.header.prevSearchesButton;

class PrevSearchesButton extends React.Component {
    state = {
        isNavItemHovered: false,
        isDropDownHovered: false,
        navItemRect: undefined,
        className: 'prev-searches-button__wrapper',
        id: 'prev-searches-button__wrapper' + uuid()
    }

    getDerivedBackgroundFromState(state) {
        if (state.isDropDownHovered) {
            return '#EEEEEE';
        } else {
            return 'white';
        }
    }
    setIsHoveredDropDown(isHovered) {
        this.setState({ isDropDownHovered: isHovered });
    }
    setIsHoveredNavItem(isHovered) {
        this.setState({ isNavItemHovered: isHovered });
    }
    setNavItemRect() {
        this.setState((prevState) => ({ navItemRect: document.getElementById(prevState.id).getBoundingClientRect() }));
    }
    componentDidMount() {
        document.getElementById(this.state.id).onmouseenter = () => {
            this.setNavItemRect();
            this.setIsHoveredNavItem(true);
        };
        document.getElementById(this.state.id).onmouseleave = () => {
            this.setIsHoveredNavItem(false);
        };
    }
    componentWillUnmount() {
        document.getElementById(this.state.id).onmouseenter = undefined;
        document.getElementById(this.state.id).onmouseleave = undefined;
    }

    render() {
        const shouldShowDropDown = this.state.isNavItemHovered || this.state.isDropDownHovered;
        const imojiJSX = <img src={'/images/prevSearchesButton.png'} alt='circular arrow with clock inside' />

        return (
            <div className={this.state.className + ' generic-nav-item'} id={this.state.id}>
                <Link to='/latestsearches' className='react-link'>
                    {imojiJSX}
                </Link>
                {shouldShowDropDown && <PrevSearchesDropDown setIsHoveredDropDown={this.setIsHoveredDropDown.bind(this)} parentRect={this.state.navItemRect} />}
            </div>
        );
    }
};

export default PrevSearchesButton;

class PrevSearchesDropDown extends React.Component {
    state = {
        x: 0,
        y: 0,
        className: 'prev-searches-button__drop-down',
        id: 'prev-searches-button__drop-down' + uuid()
    }
    componentDidMount() {
        const parentRect = this.props.parentRect;
        const currentItem = document.getElementById(this.state.id);
        const x = parentRect.right - currentItem.getBoundingClientRect().width / 2;
        const y = parentRect.bottom;
        this.setState((prevState) => {
            document.getElementById(prevState.id).onmouseenter = () => {
                this.setIsHoveredDropDown(true);
            };
            document.getElementById(prevState.id).onmouseleave = () => {
                this.setIsHoveredDropDown(false);
            };
            return { x, y };
        });
    }
    componentWillUnmount() {
        document.getElementById(this.state.id).onmouseenter = undefined;
        document.getElementById(this.state.id).onmouseleave = undefined;
    }

    render() {
        const { setIsHoveredDropDown } = this.props;
        this.setIsHoveredDropDown = setIsHoveredDropDown;
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x),
            top: deriveYfromViewPortY(this.state.y),
        };
        return (
            <div className={this.state.className + " drop-down-list-wrapper"} id={this.state.id} style={styleTagContent}>
                <div className="prev-searches-button__drop-down__container">
                    <h4>{prevSearchesResources.title}</h4>
                    <PrevSearchesList />
                    <div className='prev-searches-button__drop-down__to-all-searches'>
                        <Link to='/latestsearches' className='react-link'>
                            {prevSearchesResources.toAllSearches}
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
}

class PrevSearchesList extends React.Component {
    render() {
        return (
            <div className='prev-searches-list'>
                {
                    prevSearchesFixture.map((search => (
                        <PrevSearchesItem key={JSON.stringify(search)} search={search} />
                    )))
                }
            </div>
        );
    }
}

const PrevSearchesItem = ({ search }) => {
    return (
        <div className='prev-searches-item__wrapper'>
            <Link to={'/latestsearches/' + JSON.stringify(search)} className='react-link'>
                <div className='prev-searches-item__container'>
                    <h4>נדלן</h4>
                    <p>
                        {search.areaText}
                    </p>
                </div>
            </Link>
        </div>
    );
}