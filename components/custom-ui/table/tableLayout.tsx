import React, { createContext, ReactElement, ReactNode } from "react";

interface BaseLayoutProps {
    className?: string;
}

interface ITableLayoutProps extends BaseLayoutProps {
    children: JSX.Element[];
    paginator?: React.ReactNode;
    className?: string;
}

export const TableLayout = (props: ITableLayoutProps) => {
    const { children, className, paginator } = props;
    return (
        <div className="h-full overflow-scroll rounded-[16px] bg-white shadow-md">
            <table className={`custom-table w-full border-collapse text-sm ${className}`}>{children}</table>
            {paginator}
        </div>
    );
};

interface ITableHeadContainerProps extends BaseLayoutProps {
    children: ReactElement;
}

export const TableHeadContainer = (props: ITableHeadContainerProps) => {
    const { children, className } = props;
    return (
        <thead>
            <tr className={className}>{children}</tr>
        </thead>
    );
};

interface ITableBodyContainerProps extends BaseLayoutProps {
    children: ReactElement;
}

export const TableBodyContainer = (props: ITableBodyContainerProps) => {
    const { children, className } = props;
    return <tbody className={className}>{children}</tbody>;
};

interface ITableHeadProps extends BaseLayoutProps {
    label: string | ReactElement;
}

export const TableHead = (props: ITableHeadProps) => {
    const { label, className } = props;
    return <th className={className}>{label}</th>;
};

interface ITableBodyRowProps extends BaseLayoutProps {
    children: ReactElement[];
    onClick?: React.MouseEventHandler<HTMLTableRowElement>;
}

export const TableBodyRow = (props: ITableBodyRowProps) => {
    const { children, className, onClick } = props;
    return (
        <tr onClick={onClick} className={className}>
            {children}
        </tr>
    );
};

interface ITableBodyRowChildProps extends BaseLayoutProps {
    children: any;
    nonCapitalize?: boolean;
}

export const TableBodyRowChild = (props: ITableBodyRowChildProps) => {
    const { children, className, nonCapitalize } = props;
    return <td className={`${className} ${!nonCapitalize && "capitalize"}`}>{children}</td>;
};

// Context to share table state if needed
const TableContext = createContext<any>(null);

const DefaultEmptyState = ({ tableLength }: { tableLength: number }) => (
    <tr>
        <td colSpan={tableLength + 1} className="h-[400px] w-full text-center">
            <div className="flex w-full items-center justify-center text-secondary">No data available</div>
        </td>
    </tr>
);

interface TableProps {
    children: ReactNode;
    headerLength?: number;
    className?: string;
    paginator?: ReactNode;
    emptyState?: ReactNode;
    isEmpty?: boolean;
}
// Main Table component
export const Table = ({ children, className, paginator, emptyState, isEmpty, headerLength }: TableProps) => {
    const childrenArray = React.Children.toArray(children);
    const headerContent = childrenArray.find((child) => React.isValidElement(child) && child.type === Head);
    const bodyContent = childrenArray.find((child) => React.isValidElement(child) && child.type === Body);

    return (
        <TableContext.Provider value={{}}>
            <div className="h-full overflow-scroll rounded-[16px] bg-white shadow-md">
                <table className={` w-full border-collapse text-sm ${className}`}>
                    {headerContent}

                    {isEmpty ? <tbody>{emptyState || <DefaultEmptyState tableLength={headerLength || 5} />}</tbody> : bodyContent}
                </table>
                {paginator}
            </div>
        </TableContext.Provider>
    );
};

// Sub-components
const Head = ({ children, className }: { children: ReactNode; className?: string }) => (
    <thead className="mb-2.5 bg-[#f9f9f9] shadow-[0px_4px_4px_rgba(0,0,0,0.04)]">
        <tr className={`bg-inherit ${className}`}>{children}</tr>
    </thead>
);
Head.displayName = "Table.Head";

const Body = ({ children, className }: { children: ReactNode; className?: string }) => <tbody className={className}>{children}</tbody>;

Body.displayName = "Table.Body";

const HeaderCell = ({ children, className }: { children: ReactNode; className?: string }) => (
    <th className={`p-[22px] pl-10 text-start text-sm font-medium text-secondary ${className}`}>{children}</th>
);

HeaderCell.displayName = "Table.HeaderCell";

interface ITableBodyRowPropss {
    children: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLTableRowElement>;
}

const Row = ({ children, className, onClick }: ITableBodyRowPropss) => (
    <tr onClick={onClick} className={`bg-white ${className}`}>
        {children}
    </tr>
);

Row.displayName = "Table.Row";

const Cell = ({ children, className, nonCapitalize = false }: { children: ReactNode; className?: string; nonCapitalize?: boolean }) => (
    <td
        className={`relative border-l border-l-[#ccc] p-[22px] pl-10 text-start text-sm font-medium text-[#646464] md:border-b md:border-l-0 md:border-b-[#cacaca] ${className} ${!nonCapitalize && "capitalize"}`}
    >
        {children}
    </td>
);
Cell.displayName = "Table.Cell";

// Attach sub-components to main Table component
Table.Head = Head;
Table.Body = Body;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.Cell = Cell;

Table.displayName = "Table";
