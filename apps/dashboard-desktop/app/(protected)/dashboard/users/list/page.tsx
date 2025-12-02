"use client"

import { Input } from "@sana/ui/components/input";
import { getServices } from "../../../../../lib/services";
import { UserListRequest } from "@sana/types/user/user";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UserTable from "./_components/user.table";
import NoResult from "@sana/assets/no-result.svg"
import { LoaderCircle, LoaderIcon } from "lucide-react";
import Paginator from "@sana/ui/components/paginator";
import { useCallback } from "react";


function UsersList() {

    const services = getServices()
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const requestKey: UserListRequest = {
        page: searchParams.get("page") ?? "1",
        perPage: "10",
        userRole: ""
    }
    const { data: users, isPending } = services.user.useUserList({
        queryKey: [requestKey]
    })
    console.log(users)
    return (<div className="w-full space-y-3">
        <div className="flex w-full justify-between px-4 mt-4">
            <p className="text-[24px] font-semibold">لیست کاربران</p>
            <Input className="w-[290px]" placeholder="جستجو کنید" />
        </div>
        {
            isPending ? <div className="flex items-center justify-center w-full h-[80dvh]">
                <div className="flex">

                    <p className="flex gap-x-2 items-center">
                        <LoaderCircle className="animate-spin" size={18} />
                        در حال دریافت اطلاعات
                    </p>
                </div>
            </div> : users ? <UserTable users={users} /> : <div className="flex w-full h-[80dvh] items-center justify-center">
                <div className="flex flex-col items-center gap-y-[16px]">
                    <NoResult />
                    <p>داده‌ای برای نمایش وجود ندارد.</p>
                </div>
                {
                    users ?
                        <Paginator page={parseInt(searchParams.get("page") || "1")} perPage={10} totalPages={100} onPageClick={(page) => { }} />
                        : 'eee'
                }
            </div>
        }
    </div>);
}

export default UsersList;