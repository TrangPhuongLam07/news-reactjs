import Footer from '~/layout/Footer';
import Header from '~/layout/Header';
// import styles from './DefautLayout.module.scss';

function DefautLayout({ children }) {
    return (
        <div>
            <Header />

            <div>{children}</div>

            <Footer />
        </div>
    );
}

export default DefautLayout;
