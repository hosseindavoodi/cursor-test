import { VisaCountry } from "@sana/types/visa/visa";
import { DestructiveDialog } from "../../_components/destructive.dialog";
import { visaDurationMapper } from "@sana/utilities/mappers/visa.duration.mapper"
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper"
import { formatPrice } from "@sana/utilities/price.formatter.util"
import { cn } from "@sana/ui/lib/utils";
import { VisaGroupUpdateDialog } from "./visa.group.update.dialog";
import VisaPriceUpdateDialog from "./visa.price.update.dialog";
import VisaGroupPriceTable from "./visa.group.price.table";


function VisaGroupPrice(props: { country: VisaCountry }) {
    return <>
        {props.country.groups.map((group) => <>
            <div className="flex flex-col w-full">
                <div className="flex w-full justify-between items-center mt-[20px]">
                    <span className="h-[32px] bg-gray-100 px-[15px] py-[5px] rounded-full">
                        {group.startAge} تا {group.endAge} سال - {group.title}
                    </span>
                    <div className="flex items-center gap-x-2">
                        <VisaGroupUpdateDialog country={props.country} />
                        <DestructiveDialog
                            title="حذف گروه سنی"
                            message={`آیا از پاک کردن گروه سنی "${group.title}" اطمینان دارید!؟`}
                        />
                    </div>
                </div>
                <div className="mt-[12px] w-full">
                    <VisaGroupPriceTable country={props.country} group={group} />
                </div>
            </div>
        </>)}
    </>;
}

export default VisaGroupPrice;