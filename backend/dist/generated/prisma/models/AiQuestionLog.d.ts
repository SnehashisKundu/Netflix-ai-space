import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AiQuestionLog
 *
 */
export type AiQuestionLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AiQuestionLogPayload>;
export type AggregateAiQuestionLog = {
    _count: AiQuestionLogCountAggregateOutputType | null;
    _avg: AiQuestionLogAvgAggregateOutputType | null;
    _sum: AiQuestionLogSumAggregateOutputType | null;
    _min: AiQuestionLogMinAggregateOutputType | null;
    _max: AiQuestionLogMaxAggregateOutputType | null;
};
export type AiQuestionLogAvgAggregateOutputType = {
    at: number | null;
};
export type AiQuestionLogSumAggregateOutputType = {
    at: number | null;
};
export type AiQuestionLogMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    titleId: string | null;
    watchSpaceId: string | null;
    question: string | null;
    at: number | null;
    createdAt: Date | null;
};
export type AiQuestionLogMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    titleId: string | null;
    watchSpaceId: string | null;
    question: string | null;
    at: number | null;
    createdAt: Date | null;
};
export type AiQuestionLogCountAggregateOutputType = {
    id: number;
    userId: number;
    titleId: number;
    watchSpaceId: number;
    question: number;
    at: number;
    createdAt: number;
    _all: number;
};
export type AiQuestionLogAvgAggregateInputType = {
    at?: true;
};
export type AiQuestionLogSumAggregateInputType = {
    at?: true;
};
export type AiQuestionLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    titleId?: true;
    watchSpaceId?: true;
    question?: true;
    at?: true;
    createdAt?: true;
};
export type AiQuestionLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    titleId?: true;
    watchSpaceId?: true;
    question?: true;
    at?: true;
    createdAt?: true;
};
export type AiQuestionLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    titleId?: true;
    watchSpaceId?: true;
    question?: true;
    at?: true;
    createdAt?: true;
    _all?: true;
};
export type AiQuestionLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AiQuestionLog to aggregate.
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiQuestionLogs to fetch.
     */
    orderBy?: Prisma.AiQuestionLogOrderByWithRelationInput | Prisma.AiQuestionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AiQuestionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiQuestionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiQuestionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AiQuestionLogs
    **/
    _count?: true | AiQuestionLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AiQuestionLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AiQuestionLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AiQuestionLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AiQuestionLogMaxAggregateInputType;
};
export type GetAiQuestionLogAggregateType<T extends AiQuestionLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAiQuestionLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiQuestionLog[P]> : Prisma.GetScalarType<T[P], AggregateAiQuestionLog[P]>;
};
export type AiQuestionLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiQuestionLogWhereInput;
    orderBy?: Prisma.AiQuestionLogOrderByWithAggregationInput | Prisma.AiQuestionLogOrderByWithAggregationInput[];
    by: Prisma.AiQuestionLogScalarFieldEnum[] | Prisma.AiQuestionLogScalarFieldEnum;
    having?: Prisma.AiQuestionLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiQuestionLogCountAggregateInputType | true;
    _avg?: AiQuestionLogAvgAggregateInputType;
    _sum?: AiQuestionLogSumAggregateInputType;
    _min?: AiQuestionLogMinAggregateInputType;
    _max?: AiQuestionLogMaxAggregateInputType;
};
export type AiQuestionLogGroupByOutputType = {
    id: string;
    userId: string;
    titleId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt: Date;
    _count: AiQuestionLogCountAggregateOutputType | null;
    _avg: AiQuestionLogAvgAggregateOutputType | null;
    _sum: AiQuestionLogSumAggregateOutputType | null;
    _min: AiQuestionLogMinAggregateOutputType | null;
    _max: AiQuestionLogMaxAggregateOutputType | null;
};
export type GetAiQuestionLogGroupByPayload<T extends AiQuestionLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiQuestionLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiQuestionLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiQuestionLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiQuestionLogGroupByOutputType[P]>;
}>>;
export type AiQuestionLogWhereInput = {
    AND?: Prisma.AiQuestionLogWhereInput | Prisma.AiQuestionLogWhereInput[];
    OR?: Prisma.AiQuestionLogWhereInput[];
    NOT?: Prisma.AiQuestionLogWhereInput | Prisma.AiQuestionLogWhereInput[];
    id?: Prisma.StringFilter<"AiQuestionLog"> | string;
    userId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    titleId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    watchSpaceId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    question?: Prisma.StringFilter<"AiQuestionLog"> | string;
    at?: Prisma.FloatFilter<"AiQuestionLog"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiQuestionLog"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
};
export type AiQuestionLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    title?: Prisma.TitleOrderByWithRelationInput;
    watchSpace?: Prisma.WatchSpaceOrderByWithRelationInput;
};
export type AiQuestionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AiQuestionLogWhereInput | Prisma.AiQuestionLogWhereInput[];
    OR?: Prisma.AiQuestionLogWhereInput[];
    NOT?: Prisma.AiQuestionLogWhereInput | Prisma.AiQuestionLogWhereInput[];
    userId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    titleId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    watchSpaceId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    question?: Prisma.StringFilter<"AiQuestionLog"> | string;
    at?: Prisma.FloatFilter<"AiQuestionLog"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiQuestionLog"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
}, "id">;
export type AiQuestionLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AiQuestionLogCountOrderByAggregateInput;
    _avg?: Prisma.AiQuestionLogAvgOrderByAggregateInput;
    _max?: Prisma.AiQuestionLogMaxOrderByAggregateInput;
    _min?: Prisma.AiQuestionLogMinOrderByAggregateInput;
    _sum?: Prisma.AiQuestionLogSumOrderByAggregateInput;
};
export type AiQuestionLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiQuestionLogScalarWhereWithAggregatesInput | Prisma.AiQuestionLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiQuestionLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiQuestionLogScalarWhereWithAggregatesInput | Prisma.AiQuestionLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AiQuestionLog"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"AiQuestionLog"> | string;
    titleId?: Prisma.StringWithAggregatesFilter<"AiQuestionLog"> | string;
    watchSpaceId?: Prisma.StringWithAggregatesFilter<"AiQuestionLog"> | string;
    question?: Prisma.StringWithAggregatesFilter<"AiQuestionLog"> | string;
    at?: Prisma.FloatWithAggregatesFilter<"AiQuestionLog"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiQuestionLog"> | Date | string;
};
export type AiQuestionLogCreateInput = {
    id?: string;
    question: string;
    at: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAiQuestionLogsInput;
    title: Prisma.TitleCreateNestedOneWithoutAiQuestionLogsInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutAiQuestionLogsInput;
};
export type AiQuestionLogUncheckedCreateInput = {
    id?: string;
    userId: string;
    titleId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
};
export type AiQuestionLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogCreateManyInput = {
    id?: string;
    userId: string;
    titleId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogListRelationFilter = {
    every?: Prisma.AiQuestionLogWhereInput;
    some?: Prisma.AiQuestionLogWhereInput;
    none?: Prisma.AiQuestionLogWhereInput;
};
export type AiQuestionLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiQuestionLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiQuestionLogAvgOrderByAggregateInput = {
    at?: Prisma.SortOrder;
};
export type AiQuestionLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiQuestionLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiQuestionLogSumOrderByAggregateInput = {
    at?: Prisma.SortOrder;
};
export type AiQuestionLogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput> | Prisma.AiQuestionLogCreateWithoutUserInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutUserInput | Prisma.AiQuestionLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AiQuestionLogCreateManyUserInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput> | Prisma.AiQuestionLogCreateWithoutUserInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutUserInput | Prisma.AiQuestionLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AiQuestionLogCreateManyUserInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput> | Prisma.AiQuestionLogCreateWithoutUserInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutUserInput | Prisma.AiQuestionLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutUserInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AiQuestionLogCreateManyUserInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutUserInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutUserInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput> | Prisma.AiQuestionLogCreateWithoutUserInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutUserInput | Prisma.AiQuestionLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutUserInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AiQuestionLogCreateManyUserInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutUserInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutUserInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput> | Prisma.AiQuestionLogCreateWithoutTitleInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput | Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.AiQuestionLogCreateManyTitleInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUncheckedCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput> | Prisma.AiQuestionLogCreateWithoutTitleInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput | Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.AiQuestionLogCreateManyTitleInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput> | Prisma.AiQuestionLogCreateWithoutTitleInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput | Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutTitleInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.AiQuestionLogCreateManyTitleInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutTitleInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutTitleInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput> | Prisma.AiQuestionLogCreateWithoutTitleInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput | Prisma.AiQuestionLogCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutTitleInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.AiQuestionLogCreateManyTitleInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutTitleInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutTitleInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput> | Prisma.AiQuestionLogCreateWithoutWatchSpaceInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput | Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.AiQuestionLogCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput> | Prisma.AiQuestionLogCreateWithoutWatchSpaceInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput | Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.AiQuestionLogCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
};
export type AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput> | Prisma.AiQuestionLogCreateWithoutWatchSpaceInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput | Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.AiQuestionLogCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput> | Prisma.AiQuestionLogCreateWithoutWatchSpaceInput[] | Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput | Prisma.AiQuestionLogCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.AiQuestionLogUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.AiQuestionLogCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    disconnect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    delete?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    connect?: Prisma.AiQuestionLogWhereUniqueInput | Prisma.AiQuestionLogWhereUniqueInput[];
    update?: Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.AiQuestionLogUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.AiQuestionLogUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.AiQuestionLogUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
};
export type AiQuestionLogCreateWithoutUserInput = {
    id?: string;
    question: string;
    at: number;
    createdAt?: Date | string;
    title: Prisma.TitleCreateNestedOneWithoutAiQuestionLogsInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutAiQuestionLogsInput;
};
export type AiQuestionLogUncheckedCreateWithoutUserInput = {
    id?: string;
    titleId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogCreateOrConnectWithoutUserInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput>;
};
export type AiQuestionLogCreateManyUserInputEnvelope = {
    data: Prisma.AiQuestionLogCreateManyUserInput | Prisma.AiQuestionLogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AiQuestionLogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutUserInput, Prisma.AiQuestionLogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutUserInput, Prisma.AiQuestionLogUncheckedCreateWithoutUserInput>;
};
export type AiQuestionLogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutUserInput, Prisma.AiQuestionLogUncheckedUpdateWithoutUserInput>;
};
export type AiQuestionLogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AiQuestionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateManyMutationInput, Prisma.AiQuestionLogUncheckedUpdateManyWithoutUserInput>;
};
export type AiQuestionLogScalarWhereInput = {
    AND?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
    OR?: Prisma.AiQuestionLogScalarWhereInput[];
    NOT?: Prisma.AiQuestionLogScalarWhereInput | Prisma.AiQuestionLogScalarWhereInput[];
    id?: Prisma.StringFilter<"AiQuestionLog"> | string;
    userId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    titleId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    watchSpaceId?: Prisma.StringFilter<"AiQuestionLog"> | string;
    question?: Prisma.StringFilter<"AiQuestionLog"> | string;
    at?: Prisma.FloatFilter<"AiQuestionLog"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiQuestionLog"> | Date | string;
};
export type AiQuestionLogCreateWithoutTitleInput = {
    id?: string;
    question: string;
    at: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAiQuestionLogsInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutAiQuestionLogsInput;
};
export type AiQuestionLogUncheckedCreateWithoutTitleInput = {
    id?: string;
    userId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogCreateOrConnectWithoutTitleInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput>;
};
export type AiQuestionLogCreateManyTitleInputEnvelope = {
    data: Prisma.AiQuestionLogCreateManyTitleInput | Prisma.AiQuestionLogCreateManyTitleInput[];
    skipDuplicates?: boolean;
};
export type AiQuestionLogUpsertWithWhereUniqueWithoutTitleInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutTitleInput, Prisma.AiQuestionLogUncheckedUpdateWithoutTitleInput>;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutTitleInput, Prisma.AiQuestionLogUncheckedCreateWithoutTitleInput>;
};
export type AiQuestionLogUpdateWithWhereUniqueWithoutTitleInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutTitleInput, Prisma.AiQuestionLogUncheckedUpdateWithoutTitleInput>;
};
export type AiQuestionLogUpdateManyWithWhereWithoutTitleInput = {
    where: Prisma.AiQuestionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateManyMutationInput, Prisma.AiQuestionLogUncheckedUpdateManyWithoutTitleInput>;
};
export type AiQuestionLogCreateWithoutWatchSpaceInput = {
    id?: string;
    question: string;
    at: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAiQuestionLogsInput;
    title: Prisma.TitleCreateNestedOneWithoutAiQuestionLogsInput;
};
export type AiQuestionLogUncheckedCreateWithoutWatchSpaceInput = {
    id?: string;
    userId: string;
    titleId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogCreateOrConnectWithoutWatchSpaceInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput>;
};
export type AiQuestionLogCreateManyWatchSpaceInputEnvelope = {
    data: Prisma.AiQuestionLogCreateManyWatchSpaceInput | Prisma.AiQuestionLogCreateManyWatchSpaceInput[];
    skipDuplicates?: boolean;
};
export type AiQuestionLogUpsertWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedUpdateWithoutWatchSpaceInput>;
    create: Prisma.XOR<Prisma.AiQuestionLogCreateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedCreateWithoutWatchSpaceInput>;
};
export type AiQuestionLogUpdateWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.AiQuestionLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateWithoutWatchSpaceInput, Prisma.AiQuestionLogUncheckedUpdateWithoutWatchSpaceInput>;
};
export type AiQuestionLogUpdateManyWithWhereWithoutWatchSpaceInput = {
    where: Prisma.AiQuestionLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateManyMutationInput, Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceInput>;
};
export type AiQuestionLogCreateManyUserInput = {
    id?: string;
    titleId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.TitleUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
};
export type AiQuestionLogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogCreateManyTitleInput = {
    id?: string;
    userId: string;
    watchSpaceId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
};
export type AiQuestionLogUncheckedUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogUncheckedUpdateManyWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogCreateManyWatchSpaceInput = {
    id?: string;
    userId: string;
    titleId: string;
    question: string;
    at: number;
    createdAt?: Date | string;
};
export type AiQuestionLogUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutAiQuestionLogsNestedInput;
};
export type AiQuestionLogUncheckedUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    at?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiQuestionLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    titleId?: boolean;
    watchSpaceId?: boolean;
    question?: boolean;
    at?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiQuestionLog"]>;
export type AiQuestionLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    titleId?: boolean;
    watchSpaceId?: boolean;
    question?: boolean;
    at?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiQuestionLog"]>;
export type AiQuestionLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    titleId?: boolean;
    watchSpaceId?: boolean;
    question?: boolean;
    at?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiQuestionLog"]>;
export type AiQuestionLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    titleId?: boolean;
    watchSpaceId?: boolean;
    question?: boolean;
    at?: boolean;
    createdAt?: boolean;
};
export type AiQuestionLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "titleId" | "watchSpaceId" | "question" | "at" | "createdAt", ExtArgs["result"]["aiQuestionLog"]>;
export type AiQuestionLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type AiQuestionLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type AiQuestionLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type $AiQuestionLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiQuestionLog";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        title: Prisma.$TitlePayload<ExtArgs>;
        watchSpace: Prisma.$WatchSpacePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        titleId: string;
        watchSpaceId: string;
        question: string;
        at: number;
        createdAt: Date;
    }, ExtArgs["result"]["aiQuestionLog"]>;
    composites: {};
};
export type AiQuestionLogGetPayload<S extends boolean | null | undefined | AiQuestionLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload, S>;
export type AiQuestionLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiQuestionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiQuestionLogCountAggregateInputType | true;
};
export interface AiQuestionLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiQuestionLog'];
        meta: {
            name: 'AiQuestionLog';
        };
    };
    /**
     * Find zero or one AiQuestionLog that matches the filter.
     * @param {AiQuestionLogFindUniqueArgs} args - Arguments to find a AiQuestionLog
     * @example
     * // Get one AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiQuestionLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AiQuestionLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AiQuestionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiQuestionLogFindUniqueOrThrowArgs} args - Arguments to find a AiQuestionLog
     * @example
     * // Get one AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiQuestionLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiQuestionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AiQuestionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogFindFirstArgs} args - Arguments to find a AiQuestionLog
     * @example
     * // Get one AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiQuestionLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AiQuestionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogFindFirstOrThrowArgs} args - Arguments to find a AiQuestionLog
     * @example
     * // Get one AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiQuestionLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AiQuestionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiQuestionLogs
     * const aiQuestionLogs = await prisma.aiQuestionLog.findMany()
     *
     * // Get first 10 AiQuestionLogs
     * const aiQuestionLogs = await prisma.aiQuestionLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aiQuestionLogWithIdOnly = await prisma.aiQuestionLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AiQuestionLogFindManyArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AiQuestionLog.
     * @param {AiQuestionLogCreateArgs} args - Arguments to create a AiQuestionLog.
     * @example
     * // Create one AiQuestionLog
     * const AiQuestionLog = await prisma.aiQuestionLog.create({
     *   data: {
     *     // ... data to create a AiQuestionLog
     *   }
     * })
     *
     */
    create<T extends AiQuestionLogCreateArgs>(args: Prisma.SelectSubset<T, AiQuestionLogCreateArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AiQuestionLogs.
     * @param {AiQuestionLogCreateManyArgs} args - Arguments to create many AiQuestionLogs.
     * @example
     * // Create many AiQuestionLogs
     * const aiQuestionLog = await prisma.aiQuestionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AiQuestionLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AiQuestionLogs and returns the data saved in the database.
     * @param {AiQuestionLogCreateManyAndReturnArgs} args - Arguments to create many AiQuestionLogs.
     * @example
     * // Create many AiQuestionLogs
     * const aiQuestionLog = await prisma.aiQuestionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AiQuestionLogs and only return the `id`
     * const aiQuestionLogWithIdOnly = await prisma.aiQuestionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AiQuestionLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AiQuestionLog.
     * @param {AiQuestionLogDeleteArgs} args - Arguments to delete one AiQuestionLog.
     * @example
     * // Delete one AiQuestionLog
     * const AiQuestionLog = await prisma.aiQuestionLog.delete({
     *   where: {
     *     // ... filter to delete one AiQuestionLog
     *   }
     * })
     *
     */
    delete<T extends AiQuestionLogDeleteArgs>(args: Prisma.SelectSubset<T, AiQuestionLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AiQuestionLog.
     * @param {AiQuestionLogUpdateArgs} args - Arguments to update one AiQuestionLog.
     * @example
     * // Update one AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AiQuestionLogUpdateArgs>(args: Prisma.SelectSubset<T, AiQuestionLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AiQuestionLogs.
     * @param {AiQuestionLogDeleteManyArgs} args - Arguments to filter AiQuestionLogs to delete.
     * @example
     * // Delete a few AiQuestionLogs
     * const { count } = await prisma.aiQuestionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AiQuestionLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiQuestionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AiQuestionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiQuestionLogs
     * const aiQuestionLog = await prisma.aiQuestionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AiQuestionLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AiQuestionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AiQuestionLogs and returns the data updated in the database.
     * @param {AiQuestionLogUpdateManyAndReturnArgs} args - Arguments to update many AiQuestionLogs.
     * @example
     * // Update many AiQuestionLogs
     * const aiQuestionLog = await prisma.aiQuestionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AiQuestionLogs and only return the `id`
     * const aiQuestionLogWithIdOnly = await prisma.aiQuestionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AiQuestionLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiQuestionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AiQuestionLog.
     * @param {AiQuestionLogUpsertArgs} args - Arguments to update or create a AiQuestionLog.
     * @example
     * // Update or create a AiQuestionLog
     * const aiQuestionLog = await prisma.aiQuestionLog.upsert({
     *   create: {
     *     // ... data to create a AiQuestionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiQuestionLog we want to update
     *   }
     * })
     */
    upsert<T extends AiQuestionLogUpsertArgs>(args: Prisma.SelectSubset<T, AiQuestionLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AiQuestionLogClient<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AiQuestionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogCountArgs} args - Arguments to filter AiQuestionLogs to count.
     * @example
     * // Count the number of AiQuestionLogs
     * const count = await prisma.aiQuestionLog.count({
     *   where: {
     *     // ... the filter for the AiQuestionLogs we want to count
     *   }
     * })
    **/
    count<T extends AiQuestionLogCountArgs>(args?: Prisma.Subset<T, AiQuestionLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiQuestionLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AiQuestionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiQuestionLogAggregateArgs>(args: Prisma.Subset<T, AiQuestionLogAggregateArgs>): Prisma.PrismaPromise<GetAiQuestionLogAggregateType<T>>;
    /**
     * Group by AiQuestionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiQuestionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AiQuestionLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiQuestionLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AiQuestionLogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiQuestionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiQuestionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AiQuestionLog model
     */
    readonly fields: AiQuestionLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AiQuestionLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AiQuestionLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    title<T extends Prisma.TitleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TitleDefaultArgs<ExtArgs>>): Prisma.Prisma__TitleClient<runtime.Types.Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    watchSpace<T extends Prisma.WatchSpaceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpaceDefaultArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AiQuestionLog model
 */
export interface AiQuestionLogFieldRefs {
    readonly id: Prisma.FieldRef<"AiQuestionLog", 'String'>;
    readonly userId: Prisma.FieldRef<"AiQuestionLog", 'String'>;
    readonly titleId: Prisma.FieldRef<"AiQuestionLog", 'String'>;
    readonly watchSpaceId: Prisma.FieldRef<"AiQuestionLog", 'String'>;
    readonly question: Prisma.FieldRef<"AiQuestionLog", 'String'>;
    readonly at: Prisma.FieldRef<"AiQuestionLog", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"AiQuestionLog", 'DateTime'>;
}
/**
 * AiQuestionLog findUnique
 */
export type AiQuestionLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter, which AiQuestionLog to fetch.
     */
    where: Prisma.AiQuestionLogWhereUniqueInput;
};
/**
 * AiQuestionLog findUniqueOrThrow
 */
export type AiQuestionLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter, which AiQuestionLog to fetch.
     */
    where: Prisma.AiQuestionLogWhereUniqueInput;
};
/**
 * AiQuestionLog findFirst
 */
export type AiQuestionLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter, which AiQuestionLog to fetch.
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiQuestionLogs to fetch.
     */
    orderBy?: Prisma.AiQuestionLogOrderByWithRelationInput | Prisma.AiQuestionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiQuestionLogs.
     */
    cursor?: Prisma.AiQuestionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiQuestionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiQuestionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiQuestionLogs.
     */
    distinct?: Prisma.AiQuestionLogScalarFieldEnum | Prisma.AiQuestionLogScalarFieldEnum[];
};
/**
 * AiQuestionLog findFirstOrThrow
 */
export type AiQuestionLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter, which AiQuestionLog to fetch.
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiQuestionLogs to fetch.
     */
    orderBy?: Prisma.AiQuestionLogOrderByWithRelationInput | Prisma.AiQuestionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiQuestionLogs.
     */
    cursor?: Prisma.AiQuestionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiQuestionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiQuestionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiQuestionLogs.
     */
    distinct?: Prisma.AiQuestionLogScalarFieldEnum | Prisma.AiQuestionLogScalarFieldEnum[];
};
/**
 * AiQuestionLog findMany
 */
export type AiQuestionLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter, which AiQuestionLogs to fetch.
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiQuestionLogs to fetch.
     */
    orderBy?: Prisma.AiQuestionLogOrderByWithRelationInput | Prisma.AiQuestionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AiQuestionLogs.
     */
    cursor?: Prisma.AiQuestionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiQuestionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiQuestionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiQuestionLogs.
     */
    distinct?: Prisma.AiQuestionLogScalarFieldEnum | Prisma.AiQuestionLogScalarFieldEnum[];
};
/**
 * AiQuestionLog create
 */
export type AiQuestionLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AiQuestionLog.
     */
    data: Prisma.XOR<Prisma.AiQuestionLogCreateInput, Prisma.AiQuestionLogUncheckedCreateInput>;
};
/**
 * AiQuestionLog createMany
 */
export type AiQuestionLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiQuestionLogs.
     */
    data: Prisma.AiQuestionLogCreateManyInput | Prisma.AiQuestionLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AiQuestionLog createManyAndReturn
 */
export type AiQuestionLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * The data used to create many AiQuestionLogs.
     */
    data: Prisma.AiQuestionLogCreateManyInput | Prisma.AiQuestionLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AiQuestionLog update
 */
export type AiQuestionLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AiQuestionLog.
     */
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateInput, Prisma.AiQuestionLogUncheckedUpdateInput>;
    /**
     * Choose, which AiQuestionLog to update.
     */
    where: Prisma.AiQuestionLogWhereUniqueInput;
};
/**
 * AiQuestionLog updateMany
 */
export type AiQuestionLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AiQuestionLogs.
     */
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateManyMutationInput, Prisma.AiQuestionLogUncheckedUpdateManyInput>;
    /**
     * Filter which AiQuestionLogs to update
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * Limit how many AiQuestionLogs to update.
     */
    limit?: number;
};
/**
 * AiQuestionLog updateManyAndReturn
 */
export type AiQuestionLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * The data used to update AiQuestionLogs.
     */
    data: Prisma.XOR<Prisma.AiQuestionLogUpdateManyMutationInput, Prisma.AiQuestionLogUncheckedUpdateManyInput>;
    /**
     * Filter which AiQuestionLogs to update
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * Limit how many AiQuestionLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AiQuestionLog upsert
 */
export type AiQuestionLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AiQuestionLog to update in case it exists.
     */
    where: Prisma.AiQuestionLogWhereUniqueInput;
    /**
     * In case the AiQuestionLog found by the `where` argument doesn't exist, create a new AiQuestionLog with this data.
     */
    create: Prisma.XOR<Prisma.AiQuestionLogCreateInput, Prisma.AiQuestionLogUncheckedCreateInput>;
    /**
     * In case the AiQuestionLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AiQuestionLogUpdateInput, Prisma.AiQuestionLogUncheckedUpdateInput>;
};
/**
 * AiQuestionLog delete
 */
export type AiQuestionLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
    /**
     * Filter which AiQuestionLog to delete.
     */
    where: Prisma.AiQuestionLogWhereUniqueInput;
};
/**
 * AiQuestionLog deleteMany
 */
export type AiQuestionLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AiQuestionLogs to delete
     */
    where?: Prisma.AiQuestionLogWhereInput;
    /**
     * Limit how many AiQuestionLogs to delete.
     */
    limit?: number;
};
/**
 * AiQuestionLog without action
 */
export type AiQuestionLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiQuestionLog
     */
    select?: Prisma.AiQuestionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiQuestionLog
     */
    omit?: Prisma.AiQuestionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiQuestionLogInclude<ExtArgs> | null;
};
//# sourceMappingURL=AiQuestionLog.d.ts.map