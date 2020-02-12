import React from 'react';

class NavItemDropDown extends React.Component {
    state = {
        x: 0,
        y: 0
    }
    id = '';
    currentItem;
    mouseHover;

    componentDidMount() {
        this.currentItem = document.getElementById(this.id);
        this.setState(() => ({
            x: (this.parentRect.right - this.currentItem.width),
            y: (this.parentRect.bottom)
        }));
        this.currentItem.onmouseover = () => {
            this.mouseHover({ isDropDownHovered: true });

        };
        this.currentItem.onmouseout = () => {
            this.mouseHover({ isDropDownHovered: false });
        };
    }

    render() {
        const { linksSection, mouseHover, parentRect } = this.props;
        const { links } = linksSection;
        this.mouseHover = mouseHover;
        this.parentRect = parentRect;
        this.id = 'main-nav-bar__nav-item__drop-down' + linksSection.title;

        return (
            <div className={this.id}>
                <div className="nav-item__drop-down__container">
                    {
                        links.map((link) => (
                            <a href={link.url}>{link.text}</a>
                        ))
                    }
                </div>
            </div>
        );
    };
}

export default NavItemDropDown;