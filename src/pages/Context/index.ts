import React, { useCallback, useContext } from "react";

export const PageContext = React.createContext<any>(()=>{});

export const usePagination = () => {
    const pageContext = useContext(PageContext);
    const [curPage, setCurPage] = pageContext;

    const nextPage = useCallback(() => {
        setCurPage(curPage + 1);
    }, [curPage, setCurPage]);

    return [
      nextPage
    ];
};