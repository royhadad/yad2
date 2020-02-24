import React from 'react';
import NavItemDropDown from './NavItemDropDown';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class NavItem extends React.Component {
    state = {
        isNavItemHovered: false,
        isDropDownHovered: false,
        parentRect: undefined,
        className: 'main-nav-bar__nav-item',
        id: 'main-nav-bar__nav-item' + uuid()
    }

    getDerivedBackgroundFromState(state) {
        if (state.isDropDownHovered) {
            return '#EEEEEE';
        } else if (state.isNavItemHovered) {
            return '#DDDDDD';
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
    updateParentRect = () => {
        this.setState((prevState) => ({ parentRect: document.getElementById(prevState.id).getBoundingClientRect() }));
    }
    componentDidMount() {
        const currentItem = document.getElementById(this.state.id);
        this.updateParentRect();
        window.addEventListener('resize', this.updateParentRect);
        window.addEventListener('scroll', this.updateParentRect);
        currentItem.onmouseenter = () => {
            this.setIsHoveredNavItem(true);
        };
        currentItem.onmouseleave = () => {
            this.setIsHoveredNavItem(false);
        };
    }
    componentWillUnmount() {
        const currentItem = document.getElementById(this.state.id);
        window.removeEventListener('resize', this.updateParentRect);
        window.removeEventListener('scroll', this.updateParentRect);
        currentItem.onmouseenter = undefined;
        currentItem.onmouseleave = undefined;
    }

    render() {        
        const shouldShowDropDown = this.state.isNavItemHovered || this.state.isDropDownHovered;
        const { linksSection } = this.props;

        const style = { background: this.getDerivedBackgroundFromState(this.state) };
        return (
            <div className={this.state.className} id={this.state.id} style={style}>
                <Link to={linksSection.titleURL} className='react-link'>
                    {linksSection.title}
                </Link>
                {shouldShowDropDown && <NavItemDropDown linksSection={linksSection} setIsHoveredDropDown={this.setIsHoveredDropDown.bind(this)} parentRect={this.state.parentRect} />}
            </div>
        );

    };
}

export default NavItem;