function PassengerSkeleton() {
  return (
    <div className="p-[25px] rounded-[25px]  border">
      <div className="w-full flex justify-between items-center">
        <p className="bg-gray-100 h-[44px] rounded-full animate-pulse w-[90px] "></p>
        <div className="bg-gray-100 w-[170px] rounded-full animate-pulse h-[30px]" />
      </div>

      <div className="grid mt-7 grid-cols-3 gap-[20px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="w-full h-[52px] bg-gray-100 rounded-full" />
        ))}
        <div className="col-span-3 grid grid-cols-3 gap-[20px]   mt-4">
          <p className="w-[140px] col-span-3 rounded-full h-[50px] bg-gray-100"></p>

          {Array.from({ length: 3 }).map((_, index) => (
            <div className="w-full bg-gray-100 rounded-xl animate-pulse  h-[200px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PassengerSkeleton;
