"use client"

import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import { LoaderCircle, Plus } from "lucide-react";
import NoResult from "@sana/assets/no-result.svg"
import { getServices } from "../../../../lib/services";
import { useRouter } from "next/navigation";
import VisaCountryComponent from "./_components/visa.country";
import Paginator from "@sana/ui/components/paginator";
import { useCreateVisaStore } from "./create/_store/create.visa.store";
import { useEffect } from "react";

function DashboardVisa() {
    const services = getServices()
    const { data: visaCountries, isPending } = services.visa.useVisaCountryList({ queryKey: [{ page: 1, perPage: 20 }, "visa"] })
    const router = useRouter()
    const { flushStore } = useCreateVisaStore()

    useEffect(() => {
        flushStore()
    }, []);

    return (
        <div className="w-full space-y-4">
            <div className="flex w-full justify-between px-[32px] mt-[5px]">
                <p className="text-[24px] font-semibold">لیست ویزا</p>
                <div className="flex gap-x-3">
                    <Input className="rounded-lg h-[54px] w-[280px] px-4" placeholder="جستجو کنید" />
                    <Button
                        className="h-[54px] w-[200px] px-10"
                        onClick={() => router.push("/dashboard/visa/create")}
                    >
                        <Plus size={20} />
                        <span>افزودن کشور</span>
                    </Button>
                </div>
            </div>
            {
                isPending ? <div className="w-full h-[80dvh]  flex justify-center items-center">
                    <div className="flex gap-x-2 items-center">
                        <LoaderCircle className="animate-spin text-primary-500" />
                        <p className="text-md text-gray-700">در حال دریافت اطلاعات</p>
                    </div>
                </div> : visaCountries ?
                    <div className="flex-col flex w-full h-[80dvh] px-[32px] gap-y-[16px]">
                        {visaCountries.countries.map((country) => <VisaCountryComponent key={country.id} country={country} />)}
                    </div> :
                    <div className="flex w-full h-[80dvh] items-center justify-center">
                        <div className="flex flex-col items-center gap-y-[16px]">
                            <NoResult />
                            <p>داده‌ای برای نمایش وجود ندارد.</p>
                        </div>
                    </div>
            }
        </div>
    );
}

export default DashboardVisa;