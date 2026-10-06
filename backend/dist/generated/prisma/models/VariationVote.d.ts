import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VariationVote
 *
 */
export type VariationVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$VariationVotePayload>;
export type AggregateVariationVote = {
    _count: VariationVoteCountAggregateOutputType | null;
    _min: VariationVoteMinAggregateOutputType | null;
    _max: VariationVoteMaxAggregateOutputType | null;
};
export type VariationVoteMinAggregateOutputType = {
    id: string | null;
    watchSpaceId: string | null;
    timelineEventId: string | null;
    variationOptionId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariationVoteMaxAggregateOutputType = {
    id: string | null;
    watchSpaceId: string | null;
    timelineEventId: string | null;
    variationOptionId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariationVoteCountAggregateOutputType = {
    id: number;
    watchSpaceId: number;
    timelineEventId: number;
    variationOptionId: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VariationVoteMinAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    timelineEventId?: true;
    variationOptionId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariationVoteMaxAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    timelineEventId?: true;
    variationOptionId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariationVoteCountAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    timelineEventId?: true;
    variationOptionId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VariationVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VariationVote to aggregate.
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationVotes to fetch.
     */
    orderBy?: Prisma.VariationVoteOrderByWithRelationInput | Prisma.VariationVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VariationVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VariationVotes
    **/
    _count?: true | VariationVoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VariationVoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VariationVoteMaxAggregateInputType;
};
export type GetVariationVoteAggregateType<T extends VariationVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateVariationVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVariationVote[P]> : Prisma.GetScalarType<T[P], AggregateVariationVote[P]>;
};
export type VariationVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariationVoteWhereInput;
    orderBy?: Prisma.VariationVoteOrderByWithAggregationInput | Prisma.VariationVoteOrderByWithAggregationInput[];
    by: Prisma.VariationVoteScalarFieldEnum[] | Prisma.VariationVoteScalarFieldEnum;
    having?: Prisma.VariationVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VariationVoteCountAggregateInputType | true;
    _min?: VariationVoteMinAggregateInputType;
    _max?: VariationVoteMaxAggregateInputType;
};
export type VariationVoteGroupByOutputType = {
    id: string;
    watchSpaceId: string;
    timelineEventId: string;
    variationOptionId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: VariationVoteCountAggregateOutputType | null;
    _min: VariationVoteMinAggregateOutputType | null;
    _max: VariationVoteMaxAggregateOutputType | null;
};
export type GetVariationVoteGroupByPayload<T extends VariationVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VariationVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VariationVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VariationVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VariationVoteGroupByOutputType[P]>;
}>>;
export type VariationVoteWhereInput = {
    AND?: Prisma.VariationVoteWhereInput | Prisma.VariationVoteWhereInput[];
    OR?: Prisma.VariationVoteWhereInput[];
    NOT?: Prisma.VariationVoteWhereInput | Prisma.VariationVoteWhereInput[];
    id?: Prisma.StringFilter<"VariationVote"> | string;
    watchSpaceId?: Prisma.StringFilter<"VariationVote"> | string;
    timelineEventId?: Prisma.StringFilter<"VariationVote"> | string;
    variationOptionId?: Prisma.StringFilter<"VariationVote"> | string;
    userId?: Prisma.StringFilter<"VariationVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
    timelineEvent?: Prisma.XOR<Prisma.TimelineEventScalarRelationFilter, Prisma.TimelineEventWhereInput>;
    variationOption?: Prisma.XOR<Prisma.VariationOptionScalarRelationFilter, Prisma.VariationOptionWhereInput>;
};
export type VariationVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    variationOptionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    watchSpace?: Prisma.WatchSpaceOrderByWithRelationInput;
    timelineEvent?: Prisma.TimelineEventOrderByWithRelationInput;
    variationOption?: Prisma.VariationOptionOrderByWithRelationInput;
};
export type VariationVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    watchSpaceId_timelineEventId_userId?: Prisma.VariationVoteWatchSpaceIdTimelineEventIdUserIdCompoundUniqueInput;
    AND?: Prisma.VariationVoteWhereInput | Prisma.VariationVoteWhereInput[];
    OR?: Prisma.VariationVoteWhereInput[];
    NOT?: Prisma.VariationVoteWhereInput | Prisma.VariationVoteWhereInput[];
    watchSpaceId?: Prisma.StringFilter<"VariationVote"> | string;
    timelineEventId?: Prisma.StringFilter<"VariationVote"> | string;
    variationOptionId?: Prisma.StringFilter<"VariationVote"> | string;
    userId?: Prisma.StringFilter<"VariationVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
    timelineEvent?: Prisma.XOR<Prisma.TimelineEventScalarRelationFilter, Prisma.TimelineEventWhereInput>;
    variationOption?: Prisma.XOR<Prisma.VariationOptionScalarRelationFilter, Prisma.VariationOptionWhereInput>;
}, "id" | "watchSpaceId_timelineEventId_userId">;
export type VariationVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    variationOptionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VariationVoteCountOrderByAggregateInput;
    _max?: Prisma.VariationVoteMaxOrderByAggregateInput;
    _min?: Prisma.VariationVoteMinOrderByAggregateInput;
};
export type VariationVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.VariationVoteScalarWhereWithAggregatesInput | Prisma.VariationVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.VariationVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VariationVoteScalarWhereWithAggregatesInput | Prisma.VariationVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VariationVote"> | string;
    watchSpaceId?: Prisma.StringWithAggregatesFilter<"VariationVote"> | string;
    timelineEventId?: Prisma.StringWithAggregatesFilter<"VariationVote"> | string;
    variationOptionId?: Prisma.StringWithAggregatesFilter<"VariationVote"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"VariationVote"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VariationVote"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VariationVote"> | Date | string;
};
export type VariationVoteCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVariationVotesInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutVariationVotesInput;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationVotesInput;
    variationOption: Prisma.VariationOptionCreateNestedOneWithoutVotesInput;
};
export type VariationVoteUncheckedCreateInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVariationVotesNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutVariationVotesNestedInput;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationVotesNestedInput;
    variationOption?: Prisma.VariationOptionUpdateOneRequiredWithoutVotesNestedInput;
};
export type VariationVoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteCreateManyInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteListRelationFilter = {
    every?: Prisma.VariationVoteWhereInput;
    some?: Prisma.VariationVoteWhereInput;
    none?: Prisma.VariationVoteWhereInput;
};
export type VariationVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VariationVoteWatchSpaceIdTimelineEventIdUserIdCompoundUniqueInput = {
    watchSpaceId: string;
    timelineEventId: string;
    userId: string;
};
export type VariationVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    variationOptionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    variationOptionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    variationOptionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationVoteCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput> | Prisma.VariationVoteCreateWithoutUserInput[] | Prisma.VariationVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutUserInput | Prisma.VariationVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VariationVoteCreateManyUserInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput> | Prisma.VariationVoteCreateWithoutUserInput[] | Prisma.VariationVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutUserInput | Prisma.VariationVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VariationVoteCreateManyUserInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput> | Prisma.VariationVoteCreateWithoutUserInput[] | Prisma.VariationVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutUserInput | Prisma.VariationVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VariationVoteCreateManyUserInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutUserInput | Prisma.VariationVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput> | Prisma.VariationVoteCreateWithoutUserInput[] | Prisma.VariationVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutUserInput | Prisma.VariationVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VariationVoteCreateManyUserInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutUserInput | Prisma.VariationVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteCreateNestedManyWithoutTimelineEventInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationVoteCreateWithoutTimelineEventInput[] | Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput | Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput[];
    createMany?: Prisma.VariationVoteCreateManyTimelineEventInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUncheckedCreateNestedManyWithoutTimelineEventInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationVoteCreateWithoutTimelineEventInput[] | Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput | Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput[];
    createMany?: Prisma.VariationVoteCreateManyTimelineEventInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUpdateManyWithoutTimelineEventNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationVoteCreateWithoutTimelineEventInput[] | Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput | Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutTimelineEventInput[];
    createMany?: Prisma.VariationVoteCreateManyTimelineEventInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutTimelineEventInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutTimelineEventInput | Prisma.VariationVoteUpdateManyWithWhereWithoutTimelineEventInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteUncheckedUpdateManyWithoutTimelineEventNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationVoteCreateWithoutTimelineEventInput[] | Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput | Prisma.VariationVoteCreateOrConnectWithoutTimelineEventInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutTimelineEventInput[];
    createMany?: Prisma.VariationVoteCreateManyTimelineEventInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutTimelineEventInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutTimelineEventInput | Prisma.VariationVoteUpdateManyWithWhereWithoutTimelineEventInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteCreateNestedManyWithoutVariationOptionInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput> | Prisma.VariationVoteCreateWithoutVariationOptionInput[] | Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput | Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput[];
    createMany?: Prisma.VariationVoteCreateManyVariationOptionInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUncheckedCreateNestedManyWithoutVariationOptionInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput> | Prisma.VariationVoteCreateWithoutVariationOptionInput[] | Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput | Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput[];
    createMany?: Prisma.VariationVoteCreateManyVariationOptionInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUpdateManyWithoutVariationOptionNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput> | Prisma.VariationVoteCreateWithoutVariationOptionInput[] | Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput | Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutVariationOptionInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutVariationOptionInput[];
    createMany?: Prisma.VariationVoteCreateManyVariationOptionInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutVariationOptionInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutVariationOptionInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutVariationOptionInput | Prisma.VariationVoteUpdateManyWithWhereWithoutVariationOptionInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteUncheckedUpdateManyWithoutVariationOptionNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput> | Prisma.VariationVoteCreateWithoutVariationOptionInput[] | Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput | Prisma.VariationVoteCreateOrConnectWithoutVariationOptionInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutVariationOptionInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutVariationOptionInput[];
    createMany?: Prisma.VariationVoteCreateManyVariationOptionInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutVariationOptionInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutVariationOptionInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutVariationOptionInput | Prisma.VariationVoteUpdateManyWithWhereWithoutVariationOptionInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput> | Prisma.VariationVoteCreateWithoutWatchSpaceInput[] | Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput | Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.VariationVoteCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput> | Prisma.VariationVoteCreateWithoutWatchSpaceInput[] | Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput | Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.VariationVoteCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
};
export type VariationVoteUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput> | Prisma.VariationVoteCreateWithoutWatchSpaceInput[] | Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput | Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.VariationVoteCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.VariationVoteUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput> | Prisma.VariationVoteCreateWithoutWatchSpaceInput[] | Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput | Prisma.VariationVoteCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.VariationVoteUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.VariationVoteUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.VariationVoteCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    disconnect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    delete?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    connect?: Prisma.VariationVoteWhereUniqueInput | Prisma.VariationVoteWhereUniqueInput[];
    update?: Prisma.VariationVoteUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.VariationVoteUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.VariationVoteUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.VariationVoteUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
};
export type VariationVoteCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutVariationVotesInput;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationVotesInput;
    variationOption: Prisma.VariationOptionCreateNestedOneWithoutVotesInput;
};
export type VariationVoteUncheckedCreateWithoutUserInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    variationOptionId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteCreateOrConnectWithoutUserInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput>;
};
export type VariationVoteCreateManyUserInputEnvelope = {
    data: Prisma.VariationVoteCreateManyUserInput | Prisma.VariationVoteCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type VariationVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariationVoteUpdateWithoutUserInput, Prisma.VariationVoteUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutUserInput, Prisma.VariationVoteUncheckedCreateWithoutUserInput>;
};
export type VariationVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateWithoutUserInput, Prisma.VariationVoteUncheckedUpdateWithoutUserInput>;
};
export type VariationVoteUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.VariationVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyWithoutUserInput>;
};
export type VariationVoteScalarWhereInput = {
    AND?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
    OR?: Prisma.VariationVoteScalarWhereInput[];
    NOT?: Prisma.VariationVoteScalarWhereInput | Prisma.VariationVoteScalarWhereInput[];
    id?: Prisma.StringFilter<"VariationVote"> | string;
    watchSpaceId?: Prisma.StringFilter<"VariationVote"> | string;
    timelineEventId?: Prisma.StringFilter<"VariationVote"> | string;
    variationOptionId?: Prisma.StringFilter<"VariationVote"> | string;
    userId?: Prisma.StringFilter<"VariationVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationVote"> | Date | string;
};
export type VariationVoteCreateWithoutTimelineEventInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVariationVotesInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutVariationVotesInput;
    variationOption: Prisma.VariationOptionCreateNestedOneWithoutVotesInput;
};
export type VariationVoteUncheckedCreateWithoutTimelineEventInput = {
    id?: string;
    watchSpaceId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteCreateOrConnectWithoutTimelineEventInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput>;
};
export type VariationVoteCreateManyTimelineEventInputEnvelope = {
    data: Prisma.VariationVoteCreateManyTimelineEventInput | Prisma.VariationVoteCreateManyTimelineEventInput[];
    skipDuplicates?: boolean;
};
export type VariationVoteUpsertWithWhereUniqueWithoutTimelineEventInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariationVoteUpdateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedUpdateWithoutTimelineEventInput>;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedCreateWithoutTimelineEventInput>;
};
export type VariationVoteUpdateWithWhereUniqueWithoutTimelineEventInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateWithoutTimelineEventInput, Prisma.VariationVoteUncheckedUpdateWithoutTimelineEventInput>;
};
export type VariationVoteUpdateManyWithWhereWithoutTimelineEventInput = {
    where: Prisma.VariationVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyWithoutTimelineEventInput>;
};
export type VariationVoteCreateWithoutVariationOptionInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVariationVotesInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutVariationVotesInput;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationVotesInput;
};
export type VariationVoteUncheckedCreateWithoutVariationOptionInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteCreateOrConnectWithoutVariationOptionInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput>;
};
export type VariationVoteCreateManyVariationOptionInputEnvelope = {
    data: Prisma.VariationVoteCreateManyVariationOptionInput | Prisma.VariationVoteCreateManyVariationOptionInput[];
    skipDuplicates?: boolean;
};
export type VariationVoteUpsertWithWhereUniqueWithoutVariationOptionInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariationVoteUpdateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedUpdateWithoutVariationOptionInput>;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedCreateWithoutVariationOptionInput>;
};
export type VariationVoteUpdateWithWhereUniqueWithoutVariationOptionInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateWithoutVariationOptionInput, Prisma.VariationVoteUncheckedUpdateWithoutVariationOptionInput>;
};
export type VariationVoteUpdateManyWithWhereWithoutVariationOptionInput = {
    where: Prisma.VariationVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyWithoutVariationOptionInput>;
};
export type VariationVoteCreateWithoutWatchSpaceInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVariationVotesInput;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationVotesInput;
    variationOption: Prisma.VariationOptionCreateNestedOneWithoutVotesInput;
};
export type VariationVoteUncheckedCreateWithoutWatchSpaceInput = {
    id?: string;
    timelineEventId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteCreateOrConnectWithoutWatchSpaceInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput>;
};
export type VariationVoteCreateManyWatchSpaceInputEnvelope = {
    data: Prisma.VariationVoteCreateManyWatchSpaceInput | Prisma.VariationVoteCreateManyWatchSpaceInput[];
    skipDuplicates?: boolean;
};
export type VariationVoteUpsertWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariationVoteUpdateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedUpdateWithoutWatchSpaceInput>;
    create: Prisma.XOR<Prisma.VariationVoteCreateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedCreateWithoutWatchSpaceInput>;
};
export type VariationVoteUpdateWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.VariationVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateWithoutWatchSpaceInput, Prisma.VariationVoteUncheckedUpdateWithoutWatchSpaceInput>;
};
export type VariationVoteUpdateManyWithWhereWithoutWatchSpaceInput = {
    where: Prisma.VariationVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceInput>;
};
export type VariationVoteCreateManyUserInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    variationOptionId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutVariationVotesNestedInput;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationVotesNestedInput;
    variationOption?: Prisma.VariationOptionUpdateOneRequiredWithoutVotesNestedInput;
};
export type VariationVoteUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteCreateManyTimelineEventInput = {
    id?: string;
    watchSpaceId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVariationVotesNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutVariationVotesNestedInput;
    variationOption?: Prisma.VariationOptionUpdateOneRequiredWithoutVotesNestedInput;
};
export type VariationVoteUncheckedUpdateWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteUncheckedUpdateManyWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteCreateManyVariationOptionInput = {
    id?: string;
    watchSpaceId: string;
    timelineEventId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateWithoutVariationOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVariationVotesNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutVariationVotesNestedInput;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationVotesNestedInput;
};
export type VariationVoteUncheckedUpdateWithoutVariationOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteUncheckedUpdateManyWithoutVariationOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteCreateManyWatchSpaceInput = {
    id?: string;
    timelineEventId: string;
    variationOptionId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationVoteUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVariationVotesNestedInput;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationVotesNestedInput;
    variationOption?: Prisma.VariationOptionUpdateOneRequiredWithoutVotesNestedInput;
};
export type VariationVoteUncheckedUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteUncheckedUpdateManyWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    variationOptionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    timelineEventId?: boolean;
    variationOptionId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationVote"]>;
export type VariationVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    timelineEventId?: boolean;
    variationOptionId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationVote"]>;
export type VariationVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    timelineEventId?: boolean;
    variationOptionId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationVote"]>;
export type VariationVoteSelectScalar = {
    id?: boolean;
    watchSpaceId?: boolean;
    timelineEventId?: boolean;
    variationOptionId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VariationVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "watchSpaceId" | "timelineEventId" | "variationOptionId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["variationVote"]>;
export type VariationVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
};
export type VariationVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
};
export type VariationVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    variationOption?: boolean | Prisma.VariationOptionDefaultArgs<ExtArgs>;
};
export type $VariationVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VariationVote";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        watchSpace: Prisma.$WatchSpacePayload<ExtArgs>;
        timelineEvent: Prisma.$TimelineEventPayload<ExtArgs>;
        variationOption: Prisma.$VariationOptionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        watchSpaceId: string;
        timelineEventId: string;
        variationOptionId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["variationVote"]>;
    composites: {};
};
export type VariationVoteGetPayload<S extends boolean | null | undefined | VariationVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VariationVotePayload, S>;
export type VariationVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VariationVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VariationVoteCountAggregateInputType | true;
};
export interface VariationVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VariationVote'];
        meta: {
            name: 'VariationVote';
        };
    };
    /**
     * Find zero or one VariationVote that matches the filter.
     * @param {VariationVoteFindUniqueArgs} args - Arguments to find a VariationVote
     * @example
     * // Get one VariationVote
     * const variationVote = await prisma.variationVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, VariationVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VariationVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationVoteFindUniqueOrThrowArgs} args - Arguments to find a VariationVote
     * @example
     * // Get one VariationVote
     * const variationVote = await prisma.variationVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VariationVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VariationVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteFindFirstArgs} args - Arguments to find a VariationVote
     * @example
     * // Get one VariationVote
     * const variationVote = await prisma.variationVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, VariationVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VariationVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteFindFirstOrThrowArgs} args - Arguments to find a VariationVote
     * @example
     * // Get one VariationVote
     * const variationVote = await prisma.variationVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VariationVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VariationVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariationVotes
     * const variationVotes = await prisma.variationVote.findMany()
     *
     * // Get first 10 VariationVotes
     * const variationVotes = await prisma.variationVote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const variationVoteWithIdOnly = await prisma.variationVote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VariationVoteFindManyArgs>(args?: Prisma.SelectSubset<T, VariationVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VariationVote.
     * @param {VariationVoteCreateArgs} args - Arguments to create a VariationVote.
     * @example
     * // Create one VariationVote
     * const VariationVote = await prisma.variationVote.create({
     *   data: {
     *     // ... data to create a VariationVote
     *   }
     * })
     *
     */
    create<T extends VariationVoteCreateArgs>(args: Prisma.SelectSubset<T, VariationVoteCreateArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VariationVotes.
     * @param {VariationVoteCreateManyArgs} args - Arguments to create many VariationVotes.
     * @example
     * // Create many VariationVotes
     * const variationVote = await prisma.variationVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VariationVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, VariationVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VariationVotes and returns the data saved in the database.
     * @param {VariationVoteCreateManyAndReturnArgs} args - Arguments to create many VariationVotes.
     * @example
     * // Create many VariationVotes
     * const variationVote = await prisma.variationVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VariationVotes and only return the `id`
     * const variationVoteWithIdOnly = await prisma.variationVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VariationVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VariationVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VariationVote.
     * @param {VariationVoteDeleteArgs} args - Arguments to delete one VariationVote.
     * @example
     * // Delete one VariationVote
     * const VariationVote = await prisma.variationVote.delete({
     *   where: {
     *     // ... filter to delete one VariationVote
     *   }
     * })
     *
     */
    delete<T extends VariationVoteDeleteArgs>(args: Prisma.SelectSubset<T, VariationVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VariationVote.
     * @param {VariationVoteUpdateArgs} args - Arguments to update one VariationVote.
     * @example
     * // Update one VariationVote
     * const variationVote = await prisma.variationVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VariationVoteUpdateArgs>(args: Prisma.SelectSubset<T, VariationVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VariationVotes.
     * @param {VariationVoteDeleteManyArgs} args - Arguments to filter VariationVotes to delete.
     * @example
     * // Delete a few VariationVotes
     * const { count } = await prisma.variationVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VariationVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, VariationVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VariationVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariationVotes
     * const variationVote = await prisma.variationVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VariationVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, VariationVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VariationVotes and returns the data updated in the database.
     * @param {VariationVoteUpdateManyAndReturnArgs} args - Arguments to update many VariationVotes.
     * @example
     * // Update many VariationVotes
     * const variationVote = await prisma.variationVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VariationVotes and only return the `id`
     * const variationVoteWithIdOnly = await prisma.variationVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VariationVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VariationVote.
     * @param {VariationVoteUpsertArgs} args - Arguments to update or create a VariationVote.
     * @example
     * // Update or create a VariationVote
     * const variationVote = await prisma.variationVote.upsert({
     *   create: {
     *     // ... data to create a VariationVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariationVote we want to update
     *   }
     * })
     */
    upsert<T extends VariationVoteUpsertArgs>(args: Prisma.SelectSubset<T, VariationVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__VariationVoteClient<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VariationVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteCountArgs} args - Arguments to filter VariationVotes to count.
     * @example
     * // Count the number of VariationVotes
     * const count = await prisma.variationVote.count({
     *   where: {
     *     // ... the filter for the VariationVotes we want to count
     *   }
     * })
    **/
    count<T extends VariationVoteCountArgs>(args?: Prisma.Subset<T, VariationVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VariationVoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VariationVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationVoteAggregateArgs>(args: Prisma.Subset<T, VariationVoteAggregateArgs>): Prisma.PrismaPromise<GetVariationVoteAggregateType<T>>;
    /**
     * Group by VariationVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationVoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VariationVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VariationVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: VariationVoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VariationVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VariationVote model
     */
    readonly fields: VariationVoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VariationVote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VariationVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    watchSpace<T extends Prisma.WatchSpaceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpaceDefaultArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    timelineEvent<T extends Prisma.TimelineEventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimelineEventDefaultArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variationOption<T extends Prisma.VariationOptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VariationOptionDefaultArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the VariationVote model
 */
export interface VariationVoteFieldRefs {
    readonly id: Prisma.FieldRef<"VariationVote", 'String'>;
    readonly watchSpaceId: Prisma.FieldRef<"VariationVote", 'String'>;
    readonly timelineEventId: Prisma.FieldRef<"VariationVote", 'String'>;
    readonly variationOptionId: Prisma.FieldRef<"VariationVote", 'String'>;
    readonly userId: Prisma.FieldRef<"VariationVote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"VariationVote", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VariationVote", 'DateTime'>;
}
/**
 * VariationVote findUnique
 */
export type VariationVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter, which VariationVote to fetch.
     */
    where: Prisma.VariationVoteWhereUniqueInput;
};
/**
 * VariationVote findUniqueOrThrow
 */
export type VariationVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter, which VariationVote to fetch.
     */
    where: Prisma.VariationVoteWhereUniqueInput;
};
/**
 * VariationVote findFirst
 */
export type VariationVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter, which VariationVote to fetch.
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationVotes to fetch.
     */
    orderBy?: Prisma.VariationVoteOrderByWithRelationInput | Prisma.VariationVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VariationVotes.
     */
    cursor?: Prisma.VariationVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationVotes.
     */
    distinct?: Prisma.VariationVoteScalarFieldEnum | Prisma.VariationVoteScalarFieldEnum[];
};
/**
 * VariationVote findFirstOrThrow
 */
export type VariationVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter, which VariationVote to fetch.
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationVotes to fetch.
     */
    orderBy?: Prisma.VariationVoteOrderByWithRelationInput | Prisma.VariationVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VariationVotes.
     */
    cursor?: Prisma.VariationVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationVotes.
     */
    distinct?: Prisma.VariationVoteScalarFieldEnum | Prisma.VariationVoteScalarFieldEnum[];
};
/**
 * VariationVote findMany
 */
export type VariationVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter, which VariationVotes to fetch.
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationVotes to fetch.
     */
    orderBy?: Prisma.VariationVoteOrderByWithRelationInput | Prisma.VariationVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VariationVotes.
     */
    cursor?: Prisma.VariationVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationVotes.
     */
    distinct?: Prisma.VariationVoteScalarFieldEnum | Prisma.VariationVoteScalarFieldEnum[];
};
/**
 * VariationVote create
 */
export type VariationVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a VariationVote.
     */
    data: Prisma.XOR<Prisma.VariationVoteCreateInput, Prisma.VariationVoteUncheckedCreateInput>;
};
/**
 * VariationVote createMany
 */
export type VariationVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariationVotes.
     */
    data: Prisma.VariationVoteCreateManyInput | Prisma.VariationVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VariationVote createManyAndReturn
 */
export type VariationVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * The data used to create many VariationVotes.
     */
    data: Prisma.VariationVoteCreateManyInput | Prisma.VariationVoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VariationVote update
 */
export type VariationVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a VariationVote.
     */
    data: Prisma.XOR<Prisma.VariationVoteUpdateInput, Prisma.VariationVoteUncheckedUpdateInput>;
    /**
     * Choose, which VariationVote to update.
     */
    where: Prisma.VariationVoteWhereUniqueInput;
};
/**
 * VariationVote updateMany
 */
export type VariationVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VariationVotes.
     */
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyInput>;
    /**
     * Filter which VariationVotes to update
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * Limit how many VariationVotes to update.
     */
    limit?: number;
};
/**
 * VariationVote updateManyAndReturn
 */
export type VariationVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * The data used to update VariationVotes.
     */
    data: Prisma.XOR<Prisma.VariationVoteUpdateManyMutationInput, Prisma.VariationVoteUncheckedUpdateManyInput>;
    /**
     * Filter which VariationVotes to update
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * Limit how many VariationVotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VariationVote upsert
 */
export type VariationVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the VariationVote to update in case it exists.
     */
    where: Prisma.VariationVoteWhereUniqueInput;
    /**
     * In case the VariationVote found by the `where` argument doesn't exist, create a new VariationVote with this data.
     */
    create: Prisma.XOR<Prisma.VariationVoteCreateInput, Prisma.VariationVoteUncheckedCreateInput>;
    /**
     * In case the VariationVote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VariationVoteUpdateInput, Prisma.VariationVoteUncheckedUpdateInput>;
};
/**
 * VariationVote delete
 */
export type VariationVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
    /**
     * Filter which VariationVote to delete.
     */
    where: Prisma.VariationVoteWhereUniqueInput;
};
/**
 * VariationVote deleteMany
 */
export type VariationVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VariationVotes to delete
     */
    where?: Prisma.VariationVoteWhereInput;
    /**
     * Limit how many VariationVotes to delete.
     */
    limit?: number;
};
/**
 * VariationVote without action
 */
export type VariationVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationVote
     */
    select?: Prisma.VariationVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationVote
     */
    omit?: Prisma.VariationVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationVoteInclude<ExtArgs> | null;
};
//# sourceMappingURL=VariationVote.d.ts.map