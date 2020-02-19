import React from 'react';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '../../utility/calculatePositions';
import { Link } from 'react-router-dom';

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
    getContainerWidth(links) {   
        const maxInColumns = 8;
        let numOfColumns = Math.ceil(links.length/maxInColumns);
        return numOfColumns*200+44;
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
        const containerStyleTag = { width: this.getContainerWidth(links)+'px' }
        return (
            <div className={this.className + " drop-down-list-wrapper"} id={this.id} style={styleTagContent}>
                <div className="main-nav-bar__nav-item__drop-down__container" style={containerStyleTag}>
                    {
                        links.map((link) => (
                            <Link key={link.text} to={link.url} className='react-link'>{link.text}</Link>
                        ))
                    }
                </div>
            </div>
        );
    };
}

export default NavItemDropDown;