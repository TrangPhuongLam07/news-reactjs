import styles from './News.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/image/ronaldo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function NewFeatured() {
    return (

        <div className={cx('wrapper')}>
                    <Link to="/news" className={cx('wrapper-link')}>
                        <div className={cx('img-news')}>
                            <img src={image} alt=""></img>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('topic-name')}>
                               <Link to="/contact">
                                    <p>Thể thao</p>
                               </Link>
                            </div>
                            <div className={cx('title')}>
                                <h3>Anh bảy sút phạt quá đẳng cấp</h3>
                            </div>
                            <div className={cx('description')}>
                                <p>
                                    Ảnh bảy sút phạt đỉnh cmn cao luôn ,ghi liền hattrick cho MU,đưa Mu lên top 4 bảng xếp hạng
                                    ngoại hạng Anh,đỉnh cao tuổi 37 
                                </p>
                            </div>
                            <div className={cx('other')}>
                                <div className={cx('time')}>
                                    <p>19/05/2022</p>
                                </div>
                                
                                <div className={cx('comment')}>
                                    <FontAwesomeIcon icon={faComment} className={cx('icon-comment')}></FontAwesomeIcon>
                                    <span className={cx('number-comments')}>50</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
    );
}

export default NewFeatured;
