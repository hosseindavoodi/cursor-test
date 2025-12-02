import Padding from "../../../_components/padding";
import FailedPayment from "./_components/failed";

function VisaCallback() {
  return (
    <Padding>
      <div className="w-full flex-col pt-[200px] flex justify-center items-center">
        <FailedPayment />
      </div>
    </Padding>
  );
}

export default VisaCallback;
