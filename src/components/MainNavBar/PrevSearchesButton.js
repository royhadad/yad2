import React from 'react';
import prevSearchesFixture from '../../data/fixtures/PrevSearchesButton';
import {deriveXfromViewPortX, deriveYfromViewPortY} from '../../utility/calculatePositions';

class PrevSearchesButton extends React.Component {
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
        const shouldShowDropDown = this.state.isNavItemHovered || this.state.isDropDownHovered;
        this.className = 'prev-searches-button__wrapper';
        this.id = this.className + "1";
        const imojiJSX = <img src='/images/prevSearchesButton.png' alt='circular arrow with clock inside' />

        return (
            <div className={this.className + ' generic-nav-item'} id={this.id}>
                <a href='url'>
                    {imojiJSX}
                </a>
                {shouldShowDropDown && <PrevSearchesDropDown setIsHoveredDropDown={this.setIsHoveredDropDown.bind(this)} parentRect={this.state.navItemRect} />}
            </div>
        );
    }
};

export default PrevSearchesButton;

class PrevSearchesDropDown extends React.Component {
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
        this.className = 'prev-searches-button__drop-down';
        this.id = this.className + '1';
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x) + 'px',
            top: deriveYfromViewPortY(this.state.y) + 'px',
        };
        return (
            <div className={this.className + " drop-down-list-wrapper"} id={this.id} style={styleTagContent}>
                <div className="prev-searches-button__drop-down__container">
                    <h4>חיפושים אחרונים</h4>
                    <PrevSearchesList />
                    <div className='prev-searches-button__drop-down__to-all-searches'>
                        <a href='url'>לכל החיפושים האחרונים</a>
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
            <a href='url'>
                <div className='prev-searches-item__container'>
                    <h4>נדלן</h4>
                    <p>
                        {search.areaText}
                    </p>
                </div>
            </a>
        </div>
    );
}