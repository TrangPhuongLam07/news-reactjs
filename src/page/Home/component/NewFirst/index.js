import styles from './NewFirst.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/image/ronaldo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NewFirst({
    fontSize,
    largeHeight,
    smallHeight,
    fontLargeSize,
    fontSmallSize,
    iconCommentSmall,
    iconCommentLarge,
    numberOfCommentsSmall,
    numberOfCommentsLarge,
}) {
    const props = {};
    const classes = cx('wrapper', {
        largeHeight,
        smallHeight,
    });

    const title = cx('title', {
        fontLargeSize,
        fontSmallSize,
    });
    
    const time = cx('time');

    const iconComment = cx('icon-comment',{
        iconCommentSmall,
        iconCommentLarge,
    });

    const numberOfComments = cx('number-comments',{
        numberOfCommentsSmall,
        numberOfCommentsLarge,
    });
    return (
        <div className={classes} {...props} style={{ backgroundImage: `url(${image})` }}>
            <div className={cx('info')}>
                <h4 className={cx('topic')}>Thể thao</h4>
                <div className={cx('content')}>
                    <div>
                        <h3 className={title}>
                            <Link to="/detail">Anh 7 sút phạt quá đỉnh cao </Link>
                        </h3>
                    </div>
                    <div className={cx('other')}>
                        <p className={time}>19/05/2022</p>

                        <div className={cx('comments')}>
                            <FontAwesomeIcon icon={faComment} className={iconComment}></FontAwesomeIcon>
                            <span className={numberOfComments}>50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewFirst;
