import React from 'react';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '../../utility/calculatePositions';
import { Link } from 'react-router-dom';
import resources from '../../resources.json';
const savedItemsButtonResources = resources.header.savedItemsButton;
const carComparisonButtonResources = resources.header.carComparisonButton;

class SavedItemsButton extends React.Component {
    state = {
        isNavItemHovered: false,
        isDropDownHovered: false,
        navItemRect: undefined
    }
    id;
    currentItem;

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
        this.setState(() => ({ navItemRect: this.currentItem.getBoundingClientRect() }));
    }
    componentDidMount() {
        this.currentItem = document.getElementById(this.id);

        this.currentItem.onmouseenter = () => {
            this.setNavItemRect();
            this.setIsHoveredNavItem(true);
        };
        this.currentItem.onmouseleave = () => {
            this.setIsHoveredNavItem(false);
        };
    }
    componentWillUnmount() {
        this.currentItem.onmouseenter = undefined;
        this.currentItem.onmouseleave = undefined;
    }

    render() {
        let imojiJSX, title, body, url;
        if (this.props.type === 'carComparison') {
            imojiJSX = <span>{resources.general.unicodeChars.oppositeArrows}</span>;
            title = savedItemsButtonResources.title;
            body = savedItemsButtonResources.body;
            this.className = 'car-comparison-button__wrapper';
            url = savedItemsButtonResources.url;
        }
        else if (this.props.type === 'savedItems') {
            imojiJSX = <span>{resources.general.unicodeChars.heart}</span>;
            title = carComparisonButtonResources.title;
            body = carComparisonButtonResources.body;
            this.className = 'saved-items-button__wrapper';
            url = carComparisonButtonResources.url;
        }
        const shouldShowDropDown = this.state.isNavItemHovered || this.state.isDropDownHovered;
        this.id = this.className + "1";


        return (
            <div className={this.className + ' generic-nav-item'} id={this.id}>
                <Link to={url} className='react-link'>
                    <div className="saved-items-button">
                        {imojiJSX}
                    </div>
                </Link>
                {shouldShowDropDown && <SavedItemsDropDown title={title} body={body} setIsHoveredDropDown={this.setIsHoveredDropDown.bind(this)} parentRect={this.state.navItemRect} />}
            </div>
        );
    }
};

export default SavedItemsButton;

class SavedItemsDropDown extends React.Component {
    state = {
        x: 0,
        y: 0
    }
    id;
    currentItem;
    parentRect;

    setStateCoordinates(parentRect, currentItem) {
        const x = parentRect.right - currentItem.getBoundingClientRect().width / 2;
        const y = parentRect.bottom;
        this.setState(() => ({ x, y }));
    }

    componentDidMount() {
        this.currentItem = document.getElementById(this.id);

        this.setStateCoordinates(this.parentRect, this.currentItem);

        this.currentItem.onmouseenter = () => {
            this.setIsHoveredDropDown(true);
        };
        this.currentItem.onmouseleave = () => {
            this.setIsHoveredDropDown(false);
        };
    }
    componentWillUnmount() {
        this.currentItem.onmouseenter = undefined;
        this.currentItem.onmouseleave = undefined;
    }

    render() {
        const { setIsHoveredDropDown, parentRect } = this.props;
        this.setIsHoveredDropDown = setIsHoveredDropDown;
        this.parentRect = parentRect;
        this.className = 'saved-items-button__drop-down';
        this.id = this.className + '1';
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x) + 'px',
            top: deriveYfromViewPortY(this.state.y) + 'px',
        };
        return (
            <div className={this.className + " drop-down-list-wrapper"} id={this.id} style={styleTagContent}>
                <div className="saved-items-button__drop-down__container">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    };
}