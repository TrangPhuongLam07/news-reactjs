import styles from './Title.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Title({ text,padding }) {
    const title = cx('title',{
        padding,
    });
    const titleText = cx('title-text',{
    });
    return (
        <div className={title}>
            <FontAwesomeIcon className={cx('icon-title')} icon={faCircle}></FontAwesomeIcon>
            <p className={titleText}>{text}</p>
        </div>
    );
}

export default Title;
