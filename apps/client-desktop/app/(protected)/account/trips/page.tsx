"use client";
import { getServices } from "../../../../lib/services";
import Filters from "./_components/filters";
import Orders from "./_components/orders";
import Paginator from "@sana/ui/components/paginator";
import { useOrderStore } from "./_store/orders.store";
import { OrdersListRequestKeys, ProductType } from "@sana/types/order/order";
import { useRouter, useSearchParams } from "next/navigation";
import OrderCard from "./_components/order.card";
import { Suspense } from "react";
import OrderCardSkeleton from "./_components/order.card.skeleton";

function Trips() {
  const { orders } = getServices();
  const { filters, setStore, selectedOrder } = useOrderStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestKeys: OrdersListRequestKeys = {
    page: parseInt(searchParams.get("page") ?? "1"),
    perPage: 5,
    fromDate: filters.fromDate ?? undefined,
    toDate: filters.toDate ?? undefined,
    orderNumber: filters.orderNumber ?? undefined,
    productType: filters.productType === "ALL" ? undefined : (filters.productType as ProductType),
  };

  const { data, isPending } = orders.userOrders({ queryKey: [requestKeys], refetchOnMount: true, staleTime: 0 });

  return (
    <div className="w-full flex flex-col gap-y-[30px]">
      <Filters />
      <Orders>
        {isPending
          ? Array.from({ length: 10 }).map((_, index) => <OrderCardSkeleton />)
          : data?.orders.map((order) => (
              <OrderCard
                order={order}
                key={order.id}
              />
            ))}
        <div className="flex   justify-center items-center">
          {data?.orders && (
            <Paginator
              onPageClick={(selectedPage) => {
                router.push(`/account/trips?page=${selectedPage + 1}`);
              }}
              page={data.pagination.page}
              perPage={data.pagination.perPage}
              totalPages={data.pagination.totalPages}
            />
          )}
        </div>
      </Orders>
    </div>
  );
}

export default Trips;
