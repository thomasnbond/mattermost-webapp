// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import * as Utils from 'utils/utils.jsx';
import StatusDropdown from 'components/status_dropdown/index.jsx';

import SidebarHeaderDropdown from './dropdown';
import BondAvatar from '../../../images/BondAvatar.png';

export default class SidebarHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: Utils.isMobile(),
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const isMobile = Utils.isMobile();
        this.setState({isMobile});
    }

    render() {
        const ariaLabel = Utils.localizeMessage('accessibility.sections.lhsHeader', 'team menu region');

        return (

            <div style={{backgroundColor: 'black', textAlign: 'center'}}>
             
                <a href="http://localhost:3000">
                    <img src={BondAvatar} height="60" width="40"/>
                </a>
                <div
                    id='lhsHeader'
                    aria-label={ariaLabel}
                    tabIndex='-1'
                    role='application'
                    className='SidebarHeader team__header theme a11y__region'
                    data-a11y-sort-order='5'
                    style={{backgroundColor: 'black'}}
                >
                    <div
                        className='d-flex'
                    >
                        {!this.state.isMobile && <StatusDropdown/>}
                        <SidebarHeaderDropdown/>
                    </div>
                </div>
            </div>
        );
    }
}
