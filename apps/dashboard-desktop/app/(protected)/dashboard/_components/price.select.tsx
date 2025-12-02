import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@sana/ui/components/select"
import { useState } from "react"
import Toman from "@sana/assets/icons/toman.svg"
import { PriceUnits } from "@sana/utilities/prices/price.units"
import { priceUnitMapper } from "@sana/utilities/prices/price.units.mapper"
interface PriceSelectProps<T> {
    onValueChange: (value: T) => void
    values: T[]
    currentValue: T
}

export function PriceSelect<T>(props: PriceSelectProps<T>) {

    const priceUnitToIconMapper = {
        IRR: <Toman />
    }

    return (
        <Select onValueChange={(value) => {
            props.onValueChange(value as T)
        }}>
            <SelectTrigger className="border-none focus-visible:border-none focus-visible:ring-0" size="sm" dir="rl">
                <p>{props.currentValue as string}</p>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        PriceUnits.map((pu) => <SelectItem value={pu}>
                            {pu}
                        </SelectItem>)
                    }
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}
