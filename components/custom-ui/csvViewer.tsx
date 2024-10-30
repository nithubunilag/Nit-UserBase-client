import { Table } from "@/components/custom-ui/table";

interface ICSVViewerProps {
    csvData: string[][];
}

export const CSVViewer = (props: ICSVViewerProps) => {
    const { csvData } = props;

    const MAX_DISPLAY_ITEMS = 10;

    return (
        <div>
            {/* {csvData.length > 0 && (
                <TableContainer>
                    <Table height={200}>
                        <TableHead items={csvData[0]} />
                        <TableBody>
                            {csvData.slice(1, MAX_DISPLAY_ITEMS + 1).map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <TableCell key={cellIndex}>{cell}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )} */}

            {csvData.length > 0 && (
                <Table>
                    <Table.Head>
                        {csvData[0].map((header, index) => (
                            <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                        ))}
                    </Table.Head>
                    <Table.Body>
                        {csvData.slice(1, MAX_DISPLAY_ITEMS + 1).map((row, rowIndex) => (
                            <Table.Row key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}

            {csvData.length > MAX_DISPLAY_ITEMS && (
                <p>
                    Showing {MAX_DISPLAY_ITEMS} items out of {csvData.length}
                </p>
            )}
        </div>
    );
};
