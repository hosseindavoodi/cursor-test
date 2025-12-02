"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { getServices } from "../../../../../../lib/services";
import Filters from "./_components/filters";
import VisaOrdersTable from "./_components/orders";
import { useState } from "react";
import Paginator from "@sana/ui/components/paginator";
import { PrivateVisaOrderListQueries } from "@sana/types/order/visa";
function VisaOrdersPage() {
  const { orders } = getServices();
  const router = useRouter();
  const searchParmas = useSearchParams();

  const [filters, setFilters] = useState<PrivateVisaOrderListQueries>({
    page: parseInt(searchParmas.get("page") ?? "1"),
    perPage: 20,
  });
  const { data, refetch } = orders.usePrivateVisaOrderList({ queryKey: [filters, "VISA_ORDER_LIST"] });

  return (
    <div className="w-full flex flex-col gap-y-[25px] p-[32px]">
      {" "}
      <p className="text-[24px] font-semibold">سفارش های ویزا</p>
      <Filters
        filters={filters}
        setFilters={setFilters}
      />
      <VisaOrdersTable
        setSelectedOrder={(selected) => router.push(`/dashboard/orders/visa/list/${selected.id}`)}
        data={data}
      />
      <div className=" flex items-center justify-center">
        {" "}
        {data && (
          <Paginator
            page={filters.page}
            perPage={filters.perPage}
            totalPages={data?.pagination.totalPages}
            onPageClick={(page) => router.push(`/dashboard/orders/visa?page=${page}`)}
          />
        )}
      </div>
    </div>
  );
}

export default VisaOrdersPage;
