"use client";
import { useState } from "react";
import { getServices } from "../../../../../../lib/services";
import Filters from "./_components/filters";
import { GetPrivateResidencyOrderListQueries } from "@sana/types/order/residency";
import { useRouter, useSearchParams } from "next/navigation";
import ResidencyOrdersTable from "./_components/orders";
import Paginator from "@sana/ui/components/paginator";

function ResidencyOrdersList() {
  const { orders } = getServices();
  const searchParmas = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState<GetPrivateResidencyOrderListQueries>({
    page: parseInt(searchParmas.get("page") ?? "1"),
    perPage: 20,
  });

  const { data } = orders.usePrivateResidencyOrderList({
    queryKey: [filters, "RESIDENCY_ORDER_LIST"],
  });

  return (
    <div className="p-[32px] flex flex-col gap-y-[16px]">
      <p className="text-[24px] font-semibold">سفارش های اقامت</p>

      <Filters
        filters={filters}
        setFilters={setFilters}
      />

      <ResidencyOrdersTable
        setSelectedOrder={() => {}}
        data={data}
      />

      <div className="flex items-center justify-center">
        {data && (
          <Paginator
            page={data.pagination.page}
            perPage={data.pagination.perPage}
            totalPages={data.pagination.totalPages}
            onPageClick={(page) => router.push(`/dashboard/orders/residecny/list?page=${page}`)}
          />
        )}
      </div>
    </div>
  );
}

export default ResidencyOrdersList;
