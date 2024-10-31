"use client";
import { Table, TablePagination } from "@/components/custom-ui/table";
import { usePagination } from "@/hooks";
import { useEffect, useState } from "react";

interface GenericTableWrapperProps<T> {
    data: T[];
    tableHead: string[];
    children: (item: T) => React.ReactNode;

    showCheckbox?: boolean;
    onRowClick?: (item: T) => void;
    emptyState?: string | React.ReactNode;
    isLoading?: boolean;
    skeletonRows?: number;
    initialSelectedItems?: T[];
    onSelectionChange?: (selectedItems: T[]) => void;
}

const TableRowSkeleton = ({ columns, showCheckbox }: { columns: number; showCheckbox?: boolean }) => (
    <Table.Row className="animate-pulse">
        {showCheckbox && (
            <Table.Cell nonCapitalize className="w-[10px]">
                <div className="h-[18px] w-[18px] rounded-sm bg-gray-200" />
            </Table.Cell>
        )}

        {Array(columns)
            .fill(0)
            .map((_, index) => (
                <Table.Cell key={index}>
                    <div className="h-4 w-3/4 rounded bg-gray-200" />
                </Table.Cell>
            ))}
    </Table.Row>
);

export const GenericTableWrapper = <T,>(props: GenericTableWrapperProps<T>) => {
    const { data, tableHead, showCheckbox, children, onRowClick, emptyState, isLoading, skeletonRows, onSelectionChange, initialSelectedItems } =
        props;
    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(data, 8);
    const [selectedItems, setSelectedItems] = useState<T[]>(initialSelectedItems ?? []);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSelectedItems = e.target.checked ? [...currentItems] : [];
        setSelectedItems(newSelectedItems);
        onSelectionChange?.(newSelectedItems);
    };

    const handleSelectItem = (item: T, checked: boolean) => {
        const newSelectedItems = checked ? [...selectedItems, item] : selectedItems.filter((selectedItem) => selectedItem !== item);

        setSelectedItems(newSelectedItems);
        onSelectionChange?.(newSelectedItems);
    };
    useEffect(() => {
        setSelectedItems(initialSelectedItems ?? []);
    }, [initialSelectedItems]);

    // Render skeleton rows when loading
    const renderTableBody = () => {
        if (isLoading) {
            return Array(skeletonRows)
                .fill(0)
                .map((_, index) => (
                    <TableRowSkeleton key={`animate-fade-in skeleton-${index}`} columns={tableHead.length} showCheckbox={showCheckbox} />
                ));
        }

        return currentItems?.map((item, index) => {
            selectedItems.some((selectedItem) => {
                console.log({ selectedItem, item });
            });
            console.log("Hello", selectedItems, item);
            return (
                <Table.Row
                    key={index}
                    onClick={() => onRowClick && onRowClick(item)}
                    className="animate-fade-in !cursor-pointer border-l-[4px] border-transparent transition-all duration-300 ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                >
                    {showCheckbox && (
                        <Table.Cell nonCapitalize className="w-[10px]">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.some((selectedItem) => JSON.stringify(selectedItem) === JSON.stringify(item))}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleSelectItem(item, e.target.checked);
                                    }}
                                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-secondary focus:outline-none"
                                />
                            </label>
                        </Table.Cell>
                    )}
                    <>{children(item)}</>
                </Table.Row>
            );
        });
    };

    return (
        <Table
            emptyState={emptyState}
            isEmpty={!isLoading && data?.length === 0}
            paginator={
                <div className="py-6 ">
                    <TablePagination
                        currentPage={currentPage}
                        goToPage={goToPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        totalPages={totalPages}
                        itemsAmount={currentItems.length}
                        totalDataLength={totalDataLength}
                    />
                </div>
            }
        >
            <Table.Head>
                {showCheckbox && (
                    <Table.HeaderCell>
                        <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectedItems?.length === currentItems.length && currentItems.length > 0}
                            className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-secondary focus:outline-none"
                        />
                    </Table.HeaderCell>
                )}

                {tableHead.map((head) => (
                    <Table.HeaderCell key={head}>{head}</Table.HeaderCell>
                ))}
            </Table.Head>

            <Table.Body>{renderTableBody()}</Table.Body>
        </Table>
    );
};
