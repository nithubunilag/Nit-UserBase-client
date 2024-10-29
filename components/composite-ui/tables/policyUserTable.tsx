import { usePagination } from "@/hooks";
import { CiSearch } from "react-icons/ci";
import {
    TableBodyContainer,
    TableBodyRow,
    TableBodyRowChild,
    TableHead,
    TableHeadContainer,
    TableLayout,
    TablePagination,
} from "@/components/custom-ui/table";

export const PolicyUsers = () => {
    const tableHead = ["Users", "Attached Via", "Creation Time", "Description"];

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(policyUsersData, 10);
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
                        {policyUsersData?.length === 0 && (
                            <tr className="!bg-transparent ">
                                <td colSpan={tableHead.length + 1}>No Applicants</td>
                            </tr>
                        )}

                        {policyUsersData?.length > 0 && (
                            <>
                                {currentItems?.map((item, index) => (
                                    <TableBodyRow
                                        className="
                    !cursor-pointer border-l-[4px] border-transparent transition-all duration-300  ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                                        key={index}
                                    >
                                        <TableBodyRowChild nonCapitalize className="w-[10px]">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-[#6B7AE3] focus:outline-none"
                                                />
                                            </label>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize className="flex items-center gap-4">
                                            <span className="text-sm font-medium text-[#A1A1A1]">{item.userName}</span>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild>{item.attachedVia}</TableBodyRowChild>
                                        <TableBodyRowChild>{item.creationTime}</TableBodyRowChild>
                                        <TableBodyRowChild>{item.description}</TableBodyRowChild>
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

const policyUsersData = [
    {
        id: 1,
        policyName: "RegistryFullAccess",
        attachedVia: "Group Eks-user",
        userName: "David",
        creationTime: "22 January 2023",
        editedTime: "A week ago",
        description: "Grants account administrative permission to review....",
    },
    {
        id: 2,
        policyName: "EC2FullAccess",
        attachedVia: "Group Developers",
        userName: "Ivy",
        creationTime: "5 April 2023",
        editedTime: "Yesterday",
        description: "Grants full access to all EC2 resources.",
    },
    {
        id: 3,
        policyName: "S3ReadOnlyAccess",
        attachedVia: "Role DataAnalyst",
        userName: "Jack",
        creationTime: "10 February 2023",
        editedTime: "2 weeks ago",
        description: "Provides read-only access to specified buckets in the storage service.",
    },
    {
        id: 4,
        policyName: "LambdaInvokeFunction",
        attachedVia: "Group DevOps",
        userName: "Olivia",
        creationTime: "8 August 2023",
        editedTime: "2 weeks ago",
        description: "Grants permission to invoke AWS Lambda functions.",
    },
    {
        id: 5,
        policyName: "IAMFullAccess",
        attachedVia: "Group Admins",
        userName: "Liam",
        creationTime: "30 June 2023",
        editedTime: "4 days ago",
        description: "Allows viewing IAM users and their permissions.",
    },
    {
        id: 6,
        policyName: "SNSPublishPolicy",
        attachedVia: "User JohnDoe",
        userName: "Mia",
        creationTime: "12 May 2023",
        editedTime: "A week ago",
        description: "Allows publishing messages to Amazon SNS topics.",
    },
    {
        id: 7,
        policyName: "GlacierReadOnlyAccess",
        attachedVia: "Role BackupAdmin",
        userName: "Noah",
        creationTime: "20 November 2023",
        editedTime: "3 days ago",
        description: "Provides read-only access to specified buckets in the storage service.",
    },
    {
        id: 8,
        policyName: "RDSFullAccess",
        attachedVia: "Group DBAdmins",
        userName: "Emma",
        creationTime: "17 October 2023",
        editedTime: "Yesterday",
        description: "Provides read-only access to specified DynamoDB tables.",
    },
    {
        id: 9,
        policyName: "SQSSendMessagePolicy",
        attachedVia: "User JaneSmith",
        userName: "Taylor",
        creationTime: "25 December 2023",
        editedTime: "A week ago",
        description: "Grants permission to send messages to SQS queues.",
    },
    {
        id: 10,
        policyName: "CloudWatchLogsReadOnlyAccess",
        attachedVia: "Group Monitoring",
        userName: "Quinn",
        creationTime: "3 January 2024",
        editedTime: "2 weeks ago",
        description: "Provides read-only access to CloudWatch Logs.",
    },
    {
        id: 11,
        policyName: "DynamoDBFullAccess",
        attachedVia: "Role DataEngineer",
        userName: "Charlie",
        creationTime: "9 February 2024",
        editedTime: "Yesterday",
        description: "Enables modification of RDS instances and configurations.",
    },
    {
        id: 12,
        policyName: "RedshiftReadOnlyAccess",
        attachedVia: "Group Analytics",
        userName: "Rachel",
        creationTime: "20 April 2024",
        editedTime: "A week ago",
        description: "Provides read-only access to Elastic Beanstalk resources.",
    },
    {
        id: 13,
        policyName: "KinesisFirehoseReadOnly",
        attachedVia: "Role DataPipeline",
        userName: "Peter",
        creationTime: "5 May 2024",
        editedTime: "2 weeks ago",
        description: "Enables modification of Glacier vaults and archives.",
    },
    {
        id: 14,
        policyName: "Route53DomainsFullAccess",
        attachedVia: "Group DNSAdmins",
        userName: "Frank",
        creationTime: "10 June 2024",
        editedTime: "Yesterday",
        description: "Grants full access to Amazon Redshift clusters.",
    },
    {
        id: 15,
        policyName: "ElastiCacheFullAccess",
        attachedVia: "Role CacheAdmin",
        userName: "Sam",
        creationTime: "15 July 2024",
        editedTime: "3 days ago",
        description: "Allows describing Kinesis data streams.",
    },
    {
        id: 16,
        policyName: "ECRReadOnly",
        attachedVia: "User DockerBuilder",
        userName: "Grace",
        creationTime: "20 August 2024",
        editedTime: "A week ago",
        description: "Provides read access to Route 53 resources.",
    },
    {
        id: 17,
        policyName: "IAMReadOnlyAccess",
        attachedVia: "Group Auditors",
        userName: "Bob",
        creationTime: "25 September 2024",
        editedTime: "2 weeks ago",
        description: "Enables modification of CloudFormation stacks and resources.",
    },
    {
        id: 18,
        policyName: "AthenaFullAccess",
        attachedVia: "Role Analyst",
        userName: "Henry",
        creationTime: "1 October 2024",
        editedTime: "Yesterday",
        description: "Grants full access to Amazon EKS clusters.",
    },
    {
        id: 19,
        policyName: "CloudFormationModify",
        attachedVia: "Group DevOps",
        userName: "Alice",
        creationTime: "22 January 2023",
        editedTime: "A week ago",
        description: "Grants account administrative permission to review....",
    },
    {
        id: 20,
        policyName: "EKSFullAccess",
        attachedVia: "Role KubernetesAdmin",
        userName: "Katie",
        creationTime: "15 March 2023",
        editedTime: "3 days ago",
        description: "Allows modification of security groups for specified resources.",
    },
];
