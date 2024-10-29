import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export interface ITablePaginationProps {
    prevPage: () => void;
    nextPage: () => void;
    goToPage: (pageNumber: number) => void;
    currentPage: number;
    totalPages: number;
    itemsAmount: number;
    totalDataLength: number;
}

export const TablePagination = (props: ITablePaginationProps) => {
    const { goToPage, nextPage, prevPage, currentPage, totalPages, itemsAmount, totalDataLength } = props;

    return (
        <div className="flex w-full flex-col items-center justify-between px-6 py-4 md:flex-row">
            <p className="text-[10px] font-normal text-[#8D8D8D]">
                Showing <strong>1-{itemsAmount}</strong> from <strong>{totalDataLength}</strong> data
            </p>

            <div className="flex items-center gap-2">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    <BsCaretLeftFill className="text-2xl text-[#646464]" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={`flex items-center justify-center rounded-full border border-[#A1A1A1] px-4 py-[10px] text-sm text-[#3B3B3B] transition-all duration-300 ease-in-out  ${
                            currentPage === i + 1 ? "border-none bg-[#37449F] text-white" : "bg-transparent"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                {/* </div> */}

                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    <BsCaretRightFill className="text-2xl text-[#646464]" />
                </button>
            </div>
        </div>
    );
};
