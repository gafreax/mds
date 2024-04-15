import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Card from './Pages/Card';
import Help from './Pages/Help';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Welcome from './Pages/Welcome';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/home-card' element={<Home show="card" />} />
                <Route path='/home-input' element={<Home show="input" />} />
                <Route path='/help' element={<Help />} />
                <Route path='/welcome/:firstname/:lastname' element={<Welcome />} />
                <Route path='/card/:id' element={<Card />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;

