import { PageTransition } from '@steveeeie/react-page-transition';
import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Brain from '../components/Brain';
import Pagination from '../components/Pagination';
import Agreement from './Agreement';
import { PageContext } from './Context';
import Encourage from './Encourage';
import EndLine from './EndLine';
import Home from './Home';

export const Pages = () => {
    const location = useLocation();
    const [curPage, setCurPage] = useState<number>(1);

    return (
        <PageContext.Provider value={[curPage, setCurPage]}>
            <PageTransition
                preset={"moveToLeftFromRight"}
                transitionKey={location.pathname}
                enterAnimation={""}
                exitAnimation={""}
            >
                <Routes location={location}>
                    <Route path="/agreement" element={<Agreement />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/brain" element={<Brain />} />
                    <Route path="/encourage" element={<Encourage />} />
                    <Route path="/end" element={<EndLine />} />
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </PageTransition>
            <Pagination total={8} />
        </PageContext.Provider>
        
    )
}

export default Pages