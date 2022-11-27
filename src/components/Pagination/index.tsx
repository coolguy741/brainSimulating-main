import { useContext } from "react";
import { PageContext } from "../../pages/Context";

const Pagination = ({ total } : any) => {
    const pageContext = useContext(PageContext);
    const [ curPage ] = pageContext;
    const items = Array(total).fill(0);
    return (
        <div className="w-full flex space-x-2 items-center justify-center absolute bottom-12">
            
            <div className="flex space-x-2 p-2 rounded-full bg-[#ffffff33]">
            {
                items.map((item, index) => {
                    return <div key={index} className={`w-3 h-3 rounded-full shadow-md transition-all ${index + 1 == curPage ? 'bg-white' : 'bg-[#ffffff66]'}`}></div>;
                })                
            }
            </div>
        </div>
    )
};

export default Pagination;