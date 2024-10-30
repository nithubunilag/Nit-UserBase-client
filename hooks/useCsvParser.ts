import { useState } from "react";
import { IDropZoneHandlerProps } from "./useDropZone";

interface ICSVProperties {
    data: string[][];
    file: File | null;
    deleted: boolean;
}

export const useCsvParser = () => {
    const [csv, setCsv] = useState<ICSVProperties>({
        data: [],
        file: null,
        deleted: false,
    });

    const handleFileUpload = (uploadedContent: IDropZoneHandlerProps) => {
        if (uploadedContent.file) {
            const reader = new FileReader();
            reader.onload = (e) => handleFileRead(e, uploadedContent.file);
            reader.readAsText(uploadedContent.file);
        }
    };

    const handleFileRead = (event: ProgressEvent<FileReader>, file: File) => {
        const csvData = event.target && (event.target.result as string);

        if (csvData) {
            const rows = csvData.split("\n").map((row) => row.split(","));

            setCsv({ ...csv, data: rows, file: file, deleted: false });
        }
    };

    const deleteCSV = () => {
        setCsv({
            file: null,
            data: [],
            deleted: true,
        });
    };

    return {
        handleFileUpload,
        deleteCSV,
        csvData: csv.data,
        csvDeleted: csv.deleted,
    };
};
