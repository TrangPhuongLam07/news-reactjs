import { Routes, Route} from 'react-router-dom';
import DefautLayout from './component/DefautLayout';
import Home from './page/Home';
import News from './page/News';
import Contact from './page/Contact';
import Login from './page/Login';
import Register from './page/Register';

function App() {
    return (
       <div className="App">
            <Routes>
                {/* home */}
                <Route
                    path="/"
                    element={
                        <DefautLayout>
                            <Home />
                        </DefautLayout>
                    }
                ></Route>
           
                {/* news */}
                <Route
                    path="/news"
                    element={
                        <DefautLayout>
                            <News />
                        </DefautLayout>
                    }
                ></Route>
           
                {/* contact */}
                <Route
                    path="/contact"
                    element={
                        <DefautLayout>
                            <Contact />
                        </DefautLayout>
                    }
                ></Route>
           
                {/* login */}
                <Route
                    path="/login"
                    element={
                        <DefautLayout>
                            <Login />
                        </DefautLayout>
                    }
                ></Route>
           
                {/* register */}
                <Route
                    path="/register"
                    element={
                        <DefautLayout>
                            <Register />
                        </DefautLayout>
                    }
                ></Route>
               
            </Routes>
       </div>
    );
}

export default App;
