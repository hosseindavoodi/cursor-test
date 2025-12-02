import { ResidencyType } from "@sana/types/residency/residency";
import { Button } from "@sana/ui/components/button";
import { EllipsisVertical } from "lucide-react";

function ResidencyTypesTable(props: { types: ResidencyType[] }) {
    return (<table className="w-full border-separate text-center border-spacing-x-0">
        <thead>
            <tr className="bg-gray-100 text-gray-600 font-semibold text-[14px] h-[50px] rounded-lg">
                <td className="border-y border-r rounded-tr-lg">نام</td>
                <td className="border-y">توضیحات</td>
                <td className="border-y">یادداشت</td>
                <td className="border-y border-l rounded-tl-lg px-3"></td>

            </tr>
        </thead>
        <tbody>
            {
                props.types.map((type) => {
                    const isLastIndex = props.types.findIndex((t) => t === type) === (props.types.length - 1) ? true : false
                    return (<tr className="min-h-fit">
                        <td className={`border-r p-5 px-4 border-b ${isLastIndex && 'rounded-br-lg'}`}>{type.name}</td>
                        <td className={`border-b p-5`}>{type.description}</td>
                        <td className={`border-b p-5`}>{type.note}</td>
                        <td className={`border-l p-5 border-b flex justify-end ${isLastIndex && 'rounded-bl-lg'}`}>
                            <EllipsisVertical />
                        </td>
                    </tr>)
                })
            }
        </tbody>
    </table>
    );
}

export default ResidencyTypesTable;