import React from 'react';
import {deriveXfromViewPortX, deriveYfromViewPortY} from '../../utility/calculatePositions';

class NavItemDropDown extends React.Component {
    state = {
        x: 0,
        y: 0
    }
    id;
    currentItem;
    parentRect;

    setStateCoordinates(parentRect, currentItem) {
        const x = parentRect.right - currentItem.getBoundingClientRect().width;
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
        const { linksSection, setIsHoveredDropDown, parentRect } = this.props;
        const { links } = linksSection;
        this.setIsHoveredDropDown = setIsHoveredDropDown;
        this.parentRect = parentRect;
        this.className = 'main-nav-bar__nav-item__drop-down';
        this.id = this.className + linksSection.title;
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x) + 'px',
            top: deriveYfromViewPortY(this.state.y) + 'px'
        };
        return (
            <div className={this.className+" drop-down-list-wrapper"} id={this.id} style={styleTagContent}>
                <div className="main-nav-bar__nav-item__drop-down__container">
                    {
                        links.map((link) => (
                            <a key={link.text} href={link.url}>{link.text}</a>
                        ))
                    }
                </div>
            </div>
        );
    };
}

export default NavItemDropDown;