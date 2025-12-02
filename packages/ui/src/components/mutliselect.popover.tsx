import * as React from "react";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";

// You would typically import these from a UI library
import { Button } from "@sana/ui/components/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@sana/ui/components/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@sana/ui/components/popover";
import tr from "zod/v4/locales/tr.cjs";
import { treeifyError } from "zod";
import { fa } from "zod/v4/locales/index.cjs";

type Option = {
    label: string;
    value: string;
};

type MultiselectPopoverProps = {
    options: Option[];
    placeholder?: string;
    clasasName?: string;
    initialValue?: Option[],
    expandPlaceholder?: boolean,
    onChange: (option: Option[]) => void
};

export function
    MultiSelectPopver({
        options,
        placeholder = "Select options",
        initialValue = [],
        expandPlaceholder = true,
        onChange
    }: MultiselectPopoverProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

    React.useEffect(() => {
        onChange(selectedOptions)
    }, [selectedOptions]);

    React.useEffect(() => {
        if (initialValue) setSelectedOptions(initialValue)
    }, [])

    return (
        <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-sm font-normal text-[#64748B] rounded-full h-[44px] border-gray-400"
                >
                    {selectedOptions.length > 0
                        ? expandPlaceholder ?
                            selectedOptions
                                .map((option) => option.label)
                                .join(", ")
                            : `${selectedOptions.length} مورد انتخاب شده`
                        : placeholder}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-fit p-0">
                <Command>
                    <CommandGroup>
                        {options.map((option) => {
                            const isSelected = selectedOptions.some(
                                (selected) => selected.value === option.value
                            );
                            return (
                                <CommandItem
                                    key={option.value}
                                    onSelect={() => {
                                        if (isSelected) {
                                            setSelectedOptions((current) =>
                                                current.filter(
                                                    (selected) =>
                                                        selected.value !==
                                                        option.value
                                                )
                                            );
                                        } else {
                                            setSelectedOptions((current) => [
                                                ...current,
                                                option,
                                            ]);
                                        }
                                    }}
                                >
                                    <div className={`w-5 h-5 flex items-center justify-center border rounded-full ${isSelected ? 'border-primary-50' : ''}`}>
                                        <Check
                                            className={`h-4 w-4 ${isSelected ? "opacity-100 text-primary-400" : "opacity-0"
                                                }`}
                                        />
                                    </div>
                                    {option.label}
                                </CommandItem>
                            );
                        })}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}