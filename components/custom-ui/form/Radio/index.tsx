type TRadioProps = {
    checked: boolean
    onChange: (val: boolean) => void
    className?: string
}

export const Radio = (props: TRadioProps) => {
    return (
        <label className="m-0 inline-block p-0">
            <input
                type="checkbox"
                name="checkbox"
                className={`m-0 cursor-pointer appearance-none rounded-full border border-[#CACACA] bg-white duration-200 ease-linear checked:border-[5px] checked:border-primary md:checked:border-[10px] ${props.className}`}
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked ? false : true)}
            />
        </label>
    )
}
