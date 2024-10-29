import { ReactElement } from "react";

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
    <div className="rounded-[16px] overflow-scroll h-full shadow-md bg-white">
      <table className={`border-collapse text-sm w-full custom-table ${className}`}>
        {children}
      </table>
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
  return (
    <td className={`${className} ${!nonCapitalize && "capitalize"}`}>
      {children}
    </td>
  );
};
