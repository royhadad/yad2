import React from 'react';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '#src#/utility/calculatePositions';
import { Link } from 'react-router-dom';
import resources from '#resources#';
import uuid from 'uuid';
const savedItemsButtonResources = resources.header.savedItemsButton;
const carComparisonButtonResources = resources.header.carComparisonButton;

class SavedItemsButton extends React.Component {
    state = {
        isNavItemHovered: false,
        isDropDownHovered: false,
        navItemRect: undefined,
        className: undefined,
        id: undefined
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
        const currentItem = document.getElementById(this.state.id);
        currentItem.onmouseenter = () => {
            this.setNavItemRect();
            this.setIsHoveredNavItem(true);
        };
        currentItem.onmouseleave = () => {
            this.setIsHoveredNavItem(false);
        };
    }
    componentWillUnmount() {
        const currentItem = document.getElementById(this.state.id);
        currentItem.onmouseenter = undefined;
        currentItem.onmouseleave = undefined;
    }
    static getDerivedStateFromProps(props, state) {
        if (props.type === 'carComparison') {
            return {
                className: 'car-comparison-button__wrapper',
                id: 'car-comparison-button__wrapper' + uuid()
            }
        } else if (props.type === 'savedItems') {
            return {
                className: 'saved-items-button__wrapper',
                id: 'saved-items-button__wrapper' + uuid()
            }
        }
    }

    render() {
        let imojiJSX, title, body, url;
        if (this.props.type === 'carComparison') {
            imojiJSX = <span>{resources.general.unicodeChars.oppositeArrows}</span>;
            title = carComparisonButtonResources.title;
            body = carComparisonButtonResources.body;
            url = carComparisonButtonResources.url;
        }
        else if (this.props.type === 'savedItems') {
            imojiJSX = <span>{resources.general.unicodeChars.heart}</span>;
            title = savedItemsButtonResources.title;
            body = savedItemsButtonResources.body;
            url = savedItemsButtonResources.url;
        }
        const shouldShowDropDown = this.state.isNavItemHovered || this.state.isDropDownHovered;
        return (
            <div className={this.state.className + ' generic-nav-item'} id={this.state.id}>
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
        y: 0,
        className: 'saved-items-button__drop-down',
        id: 'saved-items-button__drop-down' + uuid(),
        parentRect: undefined
    }

    setStateCoordinates(parentRect, currentItem) {
        const x = parentRect.right - currentItem.getBoundingClientRect().width / 2;
        const y = parentRect.bottom;
        this.setState(() => ({ x, y }));
    }

    componentDidMount() {
        const currentItem = document.getElementById(this.state.id);
        this.setStateCoordinates(this.parentRect, currentItem);

        currentItem.onmouseenter = () => {
            this.setIsHoveredDropDown(true);
        };
        currentItem.onmouseleave = () => {
            this.setIsHoveredDropDown(false);
        };
    }
    componentWillUnmount() {
        const currentItem = document.getElementById(this.state.id);
        currentItem.onmouseenter = undefined;
        currentItem.onmouseleave = undefined;
    }

    render() {
        const { setIsHoveredDropDown, parentRect } = this.props;
        this.setIsHoveredDropDown = setIsHoveredDropDown;
        this.parentRect = parentRect;
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x) + 'px',
            top: deriveYfromViewPortY(this.state.y) + 'px',
        };
        return (
            <div className={this.state.className + " drop-down-list-wrapper"} id={this.state.id} style={styleTagContent}>
                <div className="saved-items-button__drop-down__container">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    };
}