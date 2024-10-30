import { IDropdownItem } from "@/components/custom-ui/form/Select";

export const getDropdownValue = <T>(dropdown: IDropdownItem[], value: string | boolean | null | undefined) => {
    const defaults = { label: "", value: "" };

    if (value == null || value == undefined) return defaults;

    const foundValue = dropdown.find((item) => item.value === value);

    if (!foundValue) return defaults;

    return foundValue ? foundValue : defaults;
};
