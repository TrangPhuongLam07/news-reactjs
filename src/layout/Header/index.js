import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Search from '../Search';
import image from '~/assets/image/khaidz.jpg';

let boo = false;

let booInfo = true;

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className="grid">
                <div className={cx('navbar')}>
                    <div className={cx('nav-logo')}>
                        {/* <img src={image} alt="" className={cx('logo')}/> */}
                        <span className={cx('logo')}>KTPro</span>
                    </div>
                    <ul className={cx('nav-list')}>
                        <li className={cx('nav-item')}>
                            <Link to="/" className={cx('nav-item-link')}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/news" className={cx('nav-item-link')}>
                                Tin tức
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/contact" className={cx('nav-item-link')}>
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                    <div className={cx('other')}>
                        <Search />

                        {/* when user is not logged in */}
                        {!boo && (
                            <div className={cx('actions')}>
                                <Link to="/login" className={cx('action-link', 'seperate')}>
                                    Đăng Nhập
                                </Link>
                                <Link to="/register" className={cx('action-link')}>
                                    Đăng Ký
                                </Link>
                            </div>
                        )}

                        {/* when user is logged in*/}
                        {boo && (
                            <div className={cx('user')}>
                                <img src={image} alt="" />
                                <div className={cx('fullname')}>
                                    Nguyễn Đình Khải
                                    {booInfo && (
                                        <div className={cx('info')}>
                                            <button>
                                                <Link to="/profile">Hồ sơ của bạn</Link>
                                            </button>
                                            <button>Đăng xuất</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
