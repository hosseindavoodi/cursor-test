import { VisaCountry, VisaGroupFullResponse } from "@sana/types/visa/visa";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper"
import { visaDurationMapper } from "@sana/utilities/mappers/visa.duration.mapper";
import VisaPriceUpdateDialog from "./visa.price.update.dialog";

function VisaGroupPriceTable(props: { country: VisaCountry, group: VisaGroupFullResponse }) {
    return (<table className="w-full border-separate text-center border-spacing-x-0">
        <thead>
            <tr className="bg-gray-100 text-gray-600 font-semibold text-[14px] h-[50px] rounded-lg">
                <td className="border-y border-r rounded-tr-lg">نوع ویزا</td>
                {
                    props.country.durations.map((duration) => {
                        return <td className="border-y">{visaDurationMapper[duration.durationInDays.toString()]}</td>
                    })}
                <td className="border-y border-l rounded-tl-lg px-3"></td>
            </tr>
        </thead>
        {
            props.country.types.map((type, typeIndex) => {
                const isLastIndex = (typeIndex === props.country.types.length - 1)
                return (
                    <tbody>
                        <tr>
                            <td className={`border-r border-b p-5 ${isLastIndex && 'rounded-br-lg'}`}>{visaTypeMapper[type]}</td>
                            {
                                props.group.prices
                                    .filter((price) => (price.type === type) && (price.priceUnit === "IRR"))
                                    .map((price) => {

                                        return <td className="border-b p-5">{price.priceAmount}</td>

                                    })
                            }
                            <td className={`border-b border-l flex justify-end p-5 ${isLastIndex ? 'rounded-bl-lg' : ''}`}>
                                <VisaPriceUpdateDialog country={props.country} type={type} groupId={props.group.id} />
                            </td>

                        </tr>
                    </tbody>
                )
            })
        }

    </table >);
}

export default VisaGroupPriceTable;