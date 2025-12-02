import Banner from "./_components/banner";
import Comment from "./_components/comment";
import Tickets from "./_components/tickets";
import Tours from "./_components/tours";
import WalletCard from "./_components/wallet";

function OverviewPage() {
  return (
    <div className="w-full flex flex-col gap-y-[20px] ">
      <Comment />
      <Banner />
      <div className="flex items-center gap-x-[20px]">
        <WalletCard />
        <Tours />
        <Tickets />
      </div>
    </div>
  );
}

export default OverviewPage;
