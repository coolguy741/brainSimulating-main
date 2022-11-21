import { PageTransition } from '@steveeeie/react-page-transition';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Brain from '../components/Brain';
import Encourage from './Encourage';
import EndLine from './EndLine';
import Home from './Home';

export const Pages = () => {
    const location = useLocation();

    return (
        <PageTransition
            preset={"fall"}
            transitionKey={location.pathname}
            enterAnimation={""}
            exitAnimation={""}
        >
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/brain" element={<Brain />} />
                <Route path="/encourage" element={<Encourage />} />
                <Route path="/end" element={<EndLine />} />
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </PageTransition>
    )
}

export default Pages