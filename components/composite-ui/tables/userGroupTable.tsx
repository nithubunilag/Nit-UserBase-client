import {
    TableBodyContainer,
    TableBodyRow,
    TableBodyRowChild,
    TableHead,
    TableHeadContainer,
    TableLayout,
    TablePagination,
} from "@/components/custom-ui/table";
import { usePagination } from "@/hooks";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export const UserGroupTable = () => {
    const tableHead = ["Group Name", "Creation Time", "Edited Time", "Description"];
    const router = useRouter();

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(userGroupsData, 10);
    return (
        <div>
            <div className="relative mb-6 flex items-center gap-4 rounded-lg border border-[#CACACA] bg-transparent p-2 md:w-[300px]">
                <CiSearch className="text-3xl font-bold text-[#CACACA]" />
                <input
                    type="text"
                    className="relative border-none bg-transparent text-sm outline-none placeholder:text-sm placeholder:text-[#A1A1A1]"
                    placeholder="Search"
                />
            </div>

            <TableLayout
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
                <TableHeadContainer>
                    <>
                        {/* Checkbox Column */}
                        <TableHead label={""} />

                        {/* Other Headers */}
                        {tableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>

                <TableBodyContainer>
                    <>
                        {userGroupsData?.length === 0 && (
                            <tr className="!bg-transparent ">
                                <td colSpan={tableHead.length + 1}>No Applicants</td>
                            </tr>
                        )}

                        {userGroupsData?.length > 0 && (
                            <>
                                {currentItems?.map((item, index) => (
                                    <TableBodyRow
                                        className="
                    !cursor-pointer border-l-[4px] border-transparent transition-all duration-300  ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                                        key={index}
                                        onClick={() => router.push(`/permissions/user-groups/${item.id}`)}
                                    >
                                        <TableBodyRowChild nonCapitalize className="w-[10px]">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-[#6B7AE3] focus:outline-none"
                                                />
                                            </label>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize className=" text-sm font-medium">
                                            Group
                                            <span className=" text-[#6B7AE3]"> {item.groupName}</span>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild>{item.creationTime}</TableBodyRowChild>
                                        <TableBodyRowChild>{item.editedTime}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.description}</TableBodyRowChild>
                                    </TableBodyRow>
                                ))}
                            </>
                        )}
                    </>
                </TableBodyContainer>
            </TableLayout>
        </div>
    );
};

const userGroupsData = [
    {
        id: 1,
        groupName: "RegistryFullAccess",
        creationTime: "22 January 2023",
        editedTime: "A week ago",
        description: "Grants account administrative permission to review....",
    },
    {
        id: 2,
        groupName: "SecurityGroupModify",
        creationTime: "15 March 2023",
        editedTime: "3 days ago",
        description: "Allows modification of security groups for specified resources.",
    },
    {
        id: 3,
        groupName: "BucketReadOnly",
        creationTime: "10 February 2023",
        editedTime: "2 weeks ago",
        description: "Provides read-only access to specified buckets in the storage service.",
    },
    {
        id: 4,
        groupName: "EC2FullAccess",
        creationTime: "5 April 2023",
        editedTime: "Yesterday",
        description: "Grants full access to all EC2 resources.",
    },
    {
        id: 5,
        groupName: "IAMUserViewOnly",
        creationTime: "30 June 2023",
        editedTime: "4 days ago",
        description: "Allows viewing IAM users and their permissions.",
    },
    {
        id: 6,
        groupName: "RDSModify",
        creationTime: "12 May 2023",
        editedTime: "A week ago",
        description: "Enables modification of RDS instances and configurations.",
    },
    {
        id: 7,
        groupName: "LambdaInvoke",
        creationTime: "8 August 2023",
        editedTime: "2 weeks ago",
        description: "Grants permission to invoke AWS Lambda functions.",
    },
    {
        id: 8,
        groupName: "DynamoDBReadOnly",
        creationTime: "17 October 2023",
        editedTime: "Yesterday",
        description: "Provides read-only access to specified DynamoDB tables.",
    },
    {
        id: 9,
        groupName: "S3WriteOnly",
        creationTime: "20 November 2023",
        editedTime: "3 days ago",
        description: "Allows writing objects to specified S3 buckets.",
    },
    {
        id: 10,
        groupName: "SQSSendMessage",
        creationTime: "25 December 2023",
        editedTime: "A week ago",
        description: "Grants permission to send messages to SQS queues.",
    },
    {
        id: 11,
        groupName: "CloudWatchLogsReadOnly",
        creationTime: "3 January 2024",
        editedTime: "2 weeks ago",
        description: "Provides read-only access to CloudWatch Logs.",
    },
    {
        id: 12,
        groupName: "SNSPublish",
        creationTime: "9 February 2024",
        editedTime: "Yesterday",
        description: "Allows publishing messages to Amazon SNS topics.",
    },
    {
        id: 13,
        groupName: "IAMPolicyFullAccess",
        creationTime: "14 March 2024",
        editedTime: "3 days ago",
        description: "Grants full access to IAM policies.",
    },
    {
        id: 14,
        groupName: "ElasticBeanstalkReadOnly",
        creationTime: "20 April 2024",
        editedTime: "A week ago",
        description: "Provides read-only access to Elastic Beanstalk resources.",
    },
    {
        id: 15,
        groupName: "GlacierModify",
        creationTime: "5 May 2024",
        editedTime: "2 weeks ago",
        description: "Enables modification of Glacier vaults and archives.",
    },
    {
        id: 16,
        groupName: "RedshiftFullAccess",
        creationTime: "10 June 2024",
        editedTime: "Yesterday",
        description: "Grants full access to Amazon Redshift clusters.",
    },
    {
        id: 17,
        groupName: "KinesisDescribeStream",
        creationTime: "15 July 2024",
        editedTime: "3 days ago",
        description: "Allows describing Kinesis data streams.",
    },
    {
        id: 18,
        groupName: "Route53Read",
        creationTime: "20 August 2024",
        editedTime: "A week ago",
        description: "Provides read access to Route 53 resources.",
    },
    {
        id: 19,
        groupName: "CloudFormationModify",
        creationTime: "25 September 2024",
        editedTime: "2 weeks ago",
        description: "Enables modification of CloudFormation stacks and resources.",
    },
    {
        id: 20,
        groupName: "EKSFullAccess",
        creationTime: "1 October 2024",
        editedTime: "Yesterday",
        description: "Grants full access to Amazon EKS clusters.",
    },
];
