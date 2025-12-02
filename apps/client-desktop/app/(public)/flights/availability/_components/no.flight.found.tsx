import NoFlightIcon from "@sana/assets/icons/flight/availability/no-flight-found.svg";
function NoFlightFound() {
  return (
    <div className="w-full mt-20 flex gap-y-[32px] flex-col justify-center items-center">
      <NoFlightIcon />
      <div>
        <p className="font-semibold text-[24px]">ظرفیت پروازها در این تاریخ تکمیل شده است</p>
      </div>
    </div>
  );
}

export default NoFlightFound;
