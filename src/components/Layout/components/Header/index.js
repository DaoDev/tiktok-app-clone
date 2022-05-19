import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '../../Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon:<FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English'
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to:'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    },
]

function Header(props) {
    const [serachResult, setSerachResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSerachResult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Tippy
                    interactive={true}
                    visible={serachResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')}>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        {/* Clear */}
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* Loading  */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* Search */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {/* Action */}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
