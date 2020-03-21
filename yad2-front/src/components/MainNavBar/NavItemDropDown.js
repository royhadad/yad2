import React from 'react';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '#src#/utility/calculatePositions';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class NavItemDropDown extends React.Component {
    state = {
        x: 0,
        y: 0,
        className: 'main-nav-bar__nav-item__drop-down',
        id: 'main-nav-bar__nav-item__drop-down' + uuid()
    }
    getContainerWidth(links) {
        const maxInColumns = 8;
        let numOfColumns = Math.ceil(links.length / maxInColumns);
        return numOfColumns * 200 + 44;
    }

    componentDidMount() {
        const currentItem = document.getElementById(this.state.id);
        currentItem.onmouseenter = () => {
            this.setIsHoveredDropDown(true);
        };
        currentItem.onmouseleave = () => {
            this.setIsHoveredDropDown(false);
        };
        const x = this.props.parentRect.right - currentItem.getBoundingClientRect().width;
        const y = this.props.parentRect.bottom;
        this.setState(() => ({ x, y }));
    }
    static getDerivedStateFromProps(props, state) {
        const currentItem = document.getElementById(state.id);
        if (currentItem) {
            const x = props.parentRect.right - currentItem.getBoundingClientRect().width;
            const y = props.parentRect.bottom;
            return { x, y };
        } else {
            return { x: 0, y: 0 };
        }
    }
    componentWillUnmount() {
        const currentItem = document.getElementById(this.state.id);
        currentItem.onmouseenter = undefined;
        currentItem.onmouseleave = undefined;
    }

    render() {
        const { linksSection, setIsHoveredDropDown } = this.props;
        const { links } = linksSection;
        this.setIsHoveredDropDown = setIsHoveredDropDown;
        const styleTagContent = {
            left: deriveXfromViewPortX(this.state.x),
            top: deriveYfromViewPortY(this.state.y)
        };
        const containerStyleTag = { width: this.getContainerWidth(links) + 'px' }
        return (
            <div className={this.state.className + " drop-down-list-wrapper"} id={this.state.id} style={styleTagContent}>
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