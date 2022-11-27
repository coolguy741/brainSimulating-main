import { useContext } from "react";
import { PageContext } from "../../pages/Context";

const Pagination = ({ total } : any) => {
    const pageContext = useContext(PageContext);
    const [ curPage ] = pageContext;
    const items = Array(total).fill(0);
    return (
        <div className="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-12">
            {
                curPage < total - 1 && <div className="mouse_scroll">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
                </div>
            }   
            
            <div className="flex space-x-2 p-2">
            {
                items.map((item, index) => {
                    return <div key={index} className={`w-2 h-2 rounded-full shadow-md transition-all ${index + 1 == curPage ? 'bg-white' : 'bg-[#ffffff66]'}`}></div>;
                })                
            }
            </div>
        </div>
    )
};

export default Pagination;