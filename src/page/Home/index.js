import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import NewFirst from './component/NewFirst';
import Title from './component/Title';
import News from './component/News'

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('home')}>
            <div className="grid">
                <div className="news__featured">
                   <Title text='Tin tức nổi bật' padding></Title>
                    <div className="grid__row">
                        <div className="grid__column-8">
                            <NewFirst largeHeight fontLargeSize iconCommentLarge numberOfCommentsLarge></NewFirst>
                        </div>
                        <div className="grid__column-4">
                            <NewFirst smallHeight iconCommentSmall numberOfCommentsSmall></NewFirst>
                            <NewFirst smallHeight iconCommentSmall numberOfCommentsSmall></NewFirst>
                        </div>
                    </div>
                </div>
                {/* news new */}
                <div className={cx('news__new')}>
                    <div className="grid__row">
                        <div className="grid__column-8">
                           <Title text='Tin tức mới trong ngày'></Title>
                           <div className={cx('news__new-item')}>
                               {/* <div className="grid__row"> */}
                                   {/* <div className="grid__column-1"> */}
                                        <News></News>
                                        <News></News>
                                        <News></News>
                                        <News></News>
                                        <News></News>
                                        <News></News>
                                   {/* </div> */}
                               {/* </div> */}
                           </div>
                        </div>
                        <div className="grid__column-4">
                                <Title text="Tiêu điểm"/>
                            <div className="grid__row">
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className={cx('topic')}>
                    <div className="grid__row">
                        <div className="grid__column-4">
                            
                        </div>
                        <div className="grid__column-4">

                        </div>
                        <div className="grid__column-4">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
