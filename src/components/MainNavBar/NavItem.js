import React from 'react';
import NavItemDropDown from './NavItemDropDown';

class NavItem extends React.Component {
    state = {
        isItemHovered: false,
        isDropDownHovered: false,
        navItemRect: undefined
    }
    id='';
    currentItem;

    mouseHover(hoverUpdate){
        this.setState(()=>(hoverUpdate));
    }
    componentDidMount(){
        this.currentItem = document.getElementById(this.id);
        this.setState(()=>({
            navItemRect: this.currentItem.getBoundingClientRect()
        }));
        this.currentItem.onmouseover = ()=>{
            this.mouseHover({isItemHovered: true});
            this.setState(()=>({
                navItemRect: this.currentItem.getBoundingClientRect()
            }));
        };
        this.currentItem.onmouseout = ()=>{
            this.mouseHover({isItemHovered: false});
        };
    }
    componentWillUnmount(){
        this.currentItem.onmouseover=undefined;
        this.currentItem.onmouseout=undefined;
    }

    render() {
        const shouldShowDropDown = this.state.isItemHovered || this.state.isDropDownHovered;
        const { linksSection } = this.props;
        this.id = 'main-nav-bar__nav-item'+linksSection.title;

        return (
            <div className="main-nav-bar__nav-item" id={this.id}>
                <a href={linksSection.titleURL}>
                    {linksSection.title}
                </a>
                {shouldShowDropDown && <NavItemDropDown linksSection={linksSection} mouseHover={this.mouseHover} parentRect={this.state.navItemRect}/>}
            </div>
        );
    };
}

export default NavItem;