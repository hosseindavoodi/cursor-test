import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactPaginate from "react-paginate";

function Paginator(props: { perPage: number; page: number; totalPages: number; onPageClick: (selectedPage: number) => void }) {
  return (
    <div style={{ direction: "ltr" }}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRight size={20} />}
        onPageChange={(selectedItem) => props.onPageClick(selectedItem.selected)}
        pageRangeDisplayed={2}
        forcePage={props.page - 1}
        className="flex border border-gray-300 items-center rounded-[8px]"
        pageCount={props.totalPages}
        pageClassName="w-[40px] border border-gray-300 border-x border-y-0 h-[40px] flex justify-center items-center font-inter"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        activeClassName="bg-primary-500 text-white"
        nextLinkClassName="w-full h-full flex items-center justify-center"
        previousClassName="w-[40px] h-[40px] flex items-center justify-center"
        nextClassName="w-[40px] h-[40px] flex items-center justify-center"
        disabledLinkClassName="text-gray-500 pointer-events-none"
        previousLabel={<ArrowLeft size={20} />}
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
}

export default Paginator;
