import React from 'react';
import NavItemDropDown from './NavItemDropDown';

class NavItem extends React.Component {
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
        const { linksSection } = this.props;
        this.className = 'main-nav-bar__nav-item';
        this.id = this.className + linksSection.title;

        const style = { background: this.getDerivedBackgroundFromState(this.state) };
        return (
            <div className={this.className} id={this.id} style={style}>
                <a href={linksSection.titleURL}>
                    {linksSection.title}
                </a>
                {shouldShowDropDown && <NavItemDropDown linksSection={linksSection} setIsHoveredDropDown={this.setIsHoveredDropDown.bind(this)} parentRect={this.state.navItemRect} />}
            </div>
        );

    };
}

export default NavItem;