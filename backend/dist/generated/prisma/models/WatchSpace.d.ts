import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WatchSpace
 *
 */
export type WatchSpaceModel = runtime.Types.Result.DefaultSelection<Prisma.$WatchSpacePayload>;
export type AggregateWatchSpace = {
    _count: WatchSpaceCountAggregateOutputType | null;
    _avg: WatchSpaceAvgAggregateOutputType | null;
    _sum: WatchSpaceSumAggregateOutputType | null;
    _min: WatchSpaceMinAggregateOutputType | null;
    _max: WatchSpaceMaxAggregateOutputType | null;
};
export type WatchSpaceAvgAggregateOutputType = {
    maxParticipants: number | null;
};
export type WatchSpaceSumAggregateOutputType = {
    maxParticipants: number | null;
};
export type WatchSpaceMinAggregateOutputType = {
    id: string | null;
    titleId: string | null;
    hostId: string | null;
    name: string | null;
    status: $Enums.WatchSpaceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    endedAt: Date | null;
    joinCode: string | null;
    maxParticipants: number | null;
};
export type WatchSpaceMaxAggregateOutputType = {
    id: string | null;
    titleId: string | null;
    hostId: string | null;
    name: string | null;
    status: $Enums.WatchSpaceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    endedAt: Date | null;
    joinCode: string | null;
    maxParticipants: number | null;
};
export type WatchSpaceCountAggregateOutputType = {
    id: number;
    titleId: number;
    hostId: number;
    name: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    endedAt: number;
    joinCode: number;
    maxParticipants: number;
    _all: number;
};
export type WatchSpaceAvgAggregateInputType = {
    maxParticipants?: true;
};
export type WatchSpaceSumAggregateInputType = {
    maxParticipants?: true;
};
export type WatchSpaceMinAggregateInputType = {
    id?: true;
    titleId?: true;
    hostId?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    endedAt?: true;
    joinCode?: true;
    maxParticipants?: true;
};
export type WatchSpaceMaxAggregateInputType = {
    id?: true;
    titleId?: true;
    hostId?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    endedAt?: true;
    joinCode?: true;
    maxParticipants?: true;
};
export type WatchSpaceCountAggregateInputType = {
    id?: true;
    titleId?: true;
    hostId?: true;
    name?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    endedAt?: true;
    joinCode?: true;
    maxParticipants?: true;
    _all?: true;
};
export type WatchSpaceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WatchSpace to aggregate.
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaces to fetch.
     */
    orderBy?: Prisma.WatchSpaceOrderByWithRelationInput | Prisma.WatchSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WatchSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WatchSpaces
    **/
    _count?: true | WatchSpaceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: WatchSpaceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: WatchSpaceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WatchSpaceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WatchSpaceMaxAggregateInputType;
};
export type GetWatchSpaceAggregateType<T extends WatchSpaceAggregateArgs> = {
    [P in keyof T & keyof AggregateWatchSpace]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWatchSpace[P]> : Prisma.GetScalarType<T[P], AggregateWatchSpace[P]>;
};
export type WatchSpaceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WatchSpaceWhereInput;
    orderBy?: Prisma.WatchSpaceOrderByWithAggregationInput | Prisma.WatchSpaceOrderByWithAggregationInput[];
    by: Prisma.WatchSpaceScalarFieldEnum[] | Prisma.WatchSpaceScalarFieldEnum;
    having?: Prisma.WatchSpaceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WatchSpaceCountAggregateInputType | true;
    _avg?: WatchSpaceAvgAggregateInputType;
    _sum?: WatchSpaceSumAggregateInputType;
    _min?: WatchSpaceMinAggregateInputType;
    _max?: WatchSpaceMaxAggregateInputType;
};
export type WatchSpaceGroupByOutputType = {
    id: string;
    titleId: string;
    hostId: string;
    name: string | null;
    status: $Enums.WatchSpaceStatus;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date | null;
    joinCode: string;
    maxParticipants: number;
    _count: WatchSpaceCountAggregateOutputType | null;
    _avg: WatchSpaceAvgAggregateOutputType | null;
    _sum: WatchSpaceSumAggregateOutputType | null;
    _min: WatchSpaceMinAggregateOutputType | null;
    _max: WatchSpaceMaxAggregateOutputType | null;
};
export type GetWatchSpaceGroupByPayload<T extends WatchSpaceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WatchSpaceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WatchSpaceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WatchSpaceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WatchSpaceGroupByOutputType[P]>;
}>>;
export type WatchSpaceWhereInput = {
    AND?: Prisma.WatchSpaceWhereInput | Prisma.WatchSpaceWhereInput[];
    OR?: Prisma.WatchSpaceWhereInput[];
    NOT?: Prisma.WatchSpaceWhereInput | Prisma.WatchSpaceWhereInput[];
    id?: Prisma.StringFilter<"WatchSpace"> | string;
    titleId?: Prisma.StringFilter<"WatchSpace"> | string;
    hostId?: Prisma.StringFilter<"WatchSpace"> | string;
    name?: Prisma.StringNullableFilter<"WatchSpace"> | string | null;
    status?: Prisma.EnumWatchSpaceStatusFilter<"WatchSpace"> | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"WatchSpace"> | Date | string | null;
    joinCode?: Prisma.StringFilter<"WatchSpace"> | string;
    maxParticipants?: Prisma.IntFilter<"WatchSpace"> | number;
    chatMessages?: Prisma.ChatMessageListRelationFilter;
    playback?: Prisma.XOR<Prisma.PlaybackStateNullableScalarRelationFilter, Prisma.PlaybackStateWhereInput> | null;
    variationVotes?: Prisma.VariationVoteListRelationFilter;
    host?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    participants?: Prisma.WatchSpaceParticipantListRelationFilter;
    aiQuestionLogs?: Prisma.AiQuestionLogListRelationFilter;
};
export type WatchSpaceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    hostId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinCode?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    chatMessages?: Prisma.ChatMessageOrderByRelationAggregateInput;
    playback?: Prisma.PlaybackStateOrderByWithRelationInput;
    variationVotes?: Prisma.VariationVoteOrderByRelationAggregateInput;
    host?: Prisma.UserOrderByWithRelationInput;
    title?: Prisma.TitleOrderByWithRelationInput;
    participants?: Prisma.WatchSpaceParticipantOrderByRelationAggregateInput;
    aiQuestionLogs?: Prisma.AiQuestionLogOrderByRelationAggregateInput;
};
export type WatchSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    joinCode?: string;
    AND?: Prisma.WatchSpaceWhereInput | Prisma.WatchSpaceWhereInput[];
    OR?: Prisma.WatchSpaceWhereInput[];
    NOT?: Prisma.WatchSpaceWhereInput | Prisma.WatchSpaceWhereInput[];
    titleId?: Prisma.StringFilter<"WatchSpace"> | string;
    hostId?: Prisma.StringFilter<"WatchSpace"> | string;
    name?: Prisma.StringNullableFilter<"WatchSpace"> | string | null;
    status?: Prisma.EnumWatchSpaceStatusFilter<"WatchSpace"> | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"WatchSpace"> | Date | string | null;
    maxParticipants?: Prisma.IntFilter<"WatchSpace"> | number;
    chatMessages?: Prisma.ChatMessageListRelationFilter;
    playback?: Prisma.XOR<Prisma.PlaybackStateNullableScalarRelationFilter, Prisma.PlaybackStateWhereInput> | null;
    variationVotes?: Prisma.VariationVoteListRelationFilter;
    host?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    participants?: Prisma.WatchSpaceParticipantListRelationFilter;
    aiQuestionLogs?: Prisma.AiQuestionLogListRelationFilter;
}, "id" | "joinCode">;
export type WatchSpaceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    hostId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinCode?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    _count?: Prisma.WatchSpaceCountOrderByAggregateInput;
    _avg?: Prisma.WatchSpaceAvgOrderByAggregateInput;
    _max?: Prisma.WatchSpaceMaxOrderByAggregateInput;
    _min?: Prisma.WatchSpaceMinOrderByAggregateInput;
    _sum?: Prisma.WatchSpaceSumOrderByAggregateInput;
};
export type WatchSpaceScalarWhereWithAggregatesInput = {
    AND?: Prisma.WatchSpaceScalarWhereWithAggregatesInput | Prisma.WatchSpaceScalarWhereWithAggregatesInput[];
    OR?: Prisma.WatchSpaceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WatchSpaceScalarWhereWithAggregatesInput | Prisma.WatchSpaceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WatchSpace"> | string;
    titleId?: Prisma.StringWithAggregatesFilter<"WatchSpace"> | string;
    hostId?: Prisma.StringWithAggregatesFilter<"WatchSpace"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"WatchSpace"> | string | null;
    status?: Prisma.EnumWatchSpaceStatusWithAggregatesFilter<"WatchSpace"> | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WatchSpace"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WatchSpace"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WatchSpace"> | Date | string | null;
    joinCode?: Prisma.StringWithAggregatesFilter<"WatchSpace"> | string;
    maxParticipants?: Prisma.IntWithAggregatesFilter<"WatchSpace"> | number;
};
export type WatchSpaceCreateInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateManyInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
};
export type WatchSpaceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type WatchSpaceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type WatchSpaceListRelationFilter = {
    every?: Prisma.WatchSpaceWhereInput;
    some?: Prisma.WatchSpaceWhereInput;
    none?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WatchSpaceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    hostId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    joinCode?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
};
export type WatchSpaceAvgOrderByAggregateInput = {
    maxParticipants?: Prisma.SortOrder;
};
export type WatchSpaceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    hostId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    joinCode?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
};
export type WatchSpaceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    hostId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    joinCode?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
};
export type WatchSpaceSumOrderByAggregateInput = {
    maxParticipants?: Prisma.SortOrder;
};
export type WatchSpaceScalarRelationFilter = {
    is?: Prisma.WatchSpaceWhereInput;
    isNot?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceCreateNestedManyWithoutHostInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput> | Prisma.WatchSpaceCreateWithoutHostInput[] | Prisma.WatchSpaceUncheckedCreateWithoutHostInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutHostInput | Prisma.WatchSpaceCreateOrConnectWithoutHostInput[];
    createMany?: Prisma.WatchSpaceCreateManyHostInputEnvelope;
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
};
export type WatchSpaceUncheckedCreateNestedManyWithoutHostInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput> | Prisma.WatchSpaceCreateWithoutHostInput[] | Prisma.WatchSpaceUncheckedCreateWithoutHostInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutHostInput | Prisma.WatchSpaceCreateOrConnectWithoutHostInput[];
    createMany?: Prisma.WatchSpaceCreateManyHostInputEnvelope;
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
};
export type WatchSpaceUpdateManyWithoutHostNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput> | Prisma.WatchSpaceCreateWithoutHostInput[] | Prisma.WatchSpaceUncheckedCreateWithoutHostInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutHostInput | Prisma.WatchSpaceCreateOrConnectWithoutHostInput[];
    upsert?: Prisma.WatchSpaceUpsertWithWhereUniqueWithoutHostInput | Prisma.WatchSpaceUpsertWithWhereUniqueWithoutHostInput[];
    createMany?: Prisma.WatchSpaceCreateManyHostInputEnvelope;
    set?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    delete?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    update?: Prisma.WatchSpaceUpdateWithWhereUniqueWithoutHostInput | Prisma.WatchSpaceUpdateWithWhereUniqueWithoutHostInput[];
    updateMany?: Prisma.WatchSpaceUpdateManyWithWhereWithoutHostInput | Prisma.WatchSpaceUpdateManyWithWhereWithoutHostInput[];
    deleteMany?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
};
export type WatchSpaceUncheckedUpdateManyWithoutHostNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput> | Prisma.WatchSpaceCreateWithoutHostInput[] | Prisma.WatchSpaceUncheckedCreateWithoutHostInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutHostInput | Prisma.WatchSpaceCreateOrConnectWithoutHostInput[];
    upsert?: Prisma.WatchSpaceUpsertWithWhereUniqueWithoutHostInput | Prisma.WatchSpaceUpsertWithWhereUniqueWithoutHostInput[];
    createMany?: Prisma.WatchSpaceCreateManyHostInputEnvelope;
    set?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    delete?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    update?: Prisma.WatchSpaceUpdateWithWhereUniqueWithoutHostInput | Prisma.WatchSpaceUpdateWithWhereUniqueWithoutHostInput[];
    updateMany?: Prisma.WatchSpaceUpdateManyWithWhereWithoutHostInput | Prisma.WatchSpaceUpdateManyWithWhereWithoutHostInput[];
    deleteMany?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
};
export type WatchSpaceCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput> | Prisma.WatchSpaceCreateWithoutTitleInput[] | Prisma.WatchSpaceUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutTitleInput | Prisma.WatchSpaceCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.WatchSpaceCreateManyTitleInputEnvelope;
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
};
export type WatchSpaceUncheckedCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput> | Prisma.WatchSpaceCreateWithoutTitleInput[] | Prisma.WatchSpaceUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutTitleInput | Prisma.WatchSpaceCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.WatchSpaceCreateManyTitleInputEnvelope;
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
};
export type WatchSpaceUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput> | Prisma.WatchSpaceCreateWithoutTitleInput[] | Prisma.WatchSpaceUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutTitleInput | Prisma.WatchSpaceCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.WatchSpaceUpsertWithWhereUniqueWithoutTitleInput | Prisma.WatchSpaceUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.WatchSpaceCreateManyTitleInputEnvelope;
    set?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    delete?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    update?: Prisma.WatchSpaceUpdateWithWhereUniqueWithoutTitleInput | Prisma.WatchSpaceUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.WatchSpaceUpdateManyWithWhereWithoutTitleInput | Prisma.WatchSpaceUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
};
export type WatchSpaceUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput> | Prisma.WatchSpaceCreateWithoutTitleInput[] | Prisma.WatchSpaceUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutTitleInput | Prisma.WatchSpaceCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.WatchSpaceUpsertWithWhereUniqueWithoutTitleInput | Prisma.WatchSpaceUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.WatchSpaceCreateManyTitleInputEnvelope;
    set?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    delete?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    connect?: Prisma.WatchSpaceWhereUniqueInput | Prisma.WatchSpaceWhereUniqueInput[];
    update?: Prisma.WatchSpaceUpdateWithWhereUniqueWithoutTitleInput | Prisma.WatchSpaceUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.WatchSpaceUpdateManyWithWhereWithoutTitleInput | Prisma.WatchSpaceUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
};
export type EnumWatchSpaceStatusFieldUpdateOperationsInput = {
    set?: $Enums.WatchSpaceStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type WatchSpaceCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
};
export type WatchSpaceUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.WatchSpaceUpsertWithoutParticipantsInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WatchSpaceUpdateToOneWithWhereWithoutParticipantsInput, Prisma.WatchSpaceUpdateWithoutParticipantsInput>, Prisma.WatchSpaceUncheckedUpdateWithoutParticipantsInput>;
};
export type WatchSpaceCreateNestedOneWithoutPlaybackInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedCreateWithoutPlaybackInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutPlaybackInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
};
export type WatchSpaceUpdateOneRequiredWithoutPlaybackNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedCreateWithoutPlaybackInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutPlaybackInput;
    upsert?: Prisma.WatchSpaceUpsertWithoutPlaybackInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WatchSpaceUpdateToOneWithWhereWithoutPlaybackInput, Prisma.WatchSpaceUpdateWithoutPlaybackInput>, Prisma.WatchSpaceUncheckedUpdateWithoutPlaybackInput>;
};
export type WatchSpaceCreateNestedOneWithoutChatMessagesInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedCreateWithoutChatMessagesInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutChatMessagesInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
};
export type WatchSpaceUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedCreateWithoutChatMessagesInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutChatMessagesInput;
    upsert?: Prisma.WatchSpaceUpsertWithoutChatMessagesInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WatchSpaceUpdateToOneWithWhereWithoutChatMessagesInput, Prisma.WatchSpaceUpdateWithoutChatMessagesInput>, Prisma.WatchSpaceUncheckedUpdateWithoutChatMessagesInput>;
};
export type WatchSpaceCreateNestedOneWithoutVariationVotesInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedCreateWithoutVariationVotesInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutVariationVotesInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
};
export type WatchSpaceUpdateOneRequiredWithoutVariationVotesNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedCreateWithoutVariationVotesInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutVariationVotesInput;
    upsert?: Prisma.WatchSpaceUpsertWithoutVariationVotesInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WatchSpaceUpdateToOneWithWhereWithoutVariationVotesInput, Prisma.WatchSpaceUpdateWithoutVariationVotesInput>, Prisma.WatchSpaceUncheckedUpdateWithoutVariationVotesInput>;
};
export type WatchSpaceCreateNestedOneWithoutAiQuestionLogsInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedCreateWithoutAiQuestionLogsInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutAiQuestionLogsInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
};
export type WatchSpaceUpdateOneRequiredWithoutAiQuestionLogsNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceCreateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedCreateWithoutAiQuestionLogsInput>;
    connectOrCreate?: Prisma.WatchSpaceCreateOrConnectWithoutAiQuestionLogsInput;
    upsert?: Prisma.WatchSpaceUpsertWithoutAiQuestionLogsInput;
    connect?: Prisma.WatchSpaceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WatchSpaceUpdateToOneWithWhereWithoutAiQuestionLogsInput, Prisma.WatchSpaceUpdateWithoutAiQuestionLogsInput>, Prisma.WatchSpaceUncheckedUpdateWithoutAiQuestionLogsInput>;
};
export type WatchSpaceCreateWithoutHostInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutHostInput = {
    id?: string;
    titleId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutHostInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput>;
};
export type WatchSpaceCreateManyHostInputEnvelope = {
    data: Prisma.WatchSpaceCreateManyHostInput | Prisma.WatchSpaceCreateManyHostInput[];
    skipDuplicates?: boolean;
};
export type WatchSpaceUpsertWithWhereUniqueWithoutHostInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutHostInput, Prisma.WatchSpaceUncheckedUpdateWithoutHostInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutHostInput, Prisma.WatchSpaceUncheckedCreateWithoutHostInput>;
};
export type WatchSpaceUpdateWithWhereUniqueWithoutHostInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutHostInput, Prisma.WatchSpaceUncheckedUpdateWithoutHostInput>;
};
export type WatchSpaceUpdateManyWithWhereWithoutHostInput = {
    where: Prisma.WatchSpaceScalarWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateManyMutationInput, Prisma.WatchSpaceUncheckedUpdateManyWithoutHostInput>;
};
export type WatchSpaceScalarWhereInput = {
    AND?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
    OR?: Prisma.WatchSpaceScalarWhereInput[];
    NOT?: Prisma.WatchSpaceScalarWhereInput | Prisma.WatchSpaceScalarWhereInput[];
    id?: Prisma.StringFilter<"WatchSpace"> | string;
    titleId?: Prisma.StringFilter<"WatchSpace"> | string;
    hostId?: Prisma.StringFilter<"WatchSpace"> | string;
    name?: Prisma.StringNullableFilter<"WatchSpace"> | string | null;
    status?: Prisma.EnumWatchSpaceStatusFilter<"WatchSpace"> | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WatchSpace"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"WatchSpace"> | Date | string | null;
    joinCode?: Prisma.StringFilter<"WatchSpace"> | string;
    maxParticipants?: Prisma.IntFilter<"WatchSpace"> | number;
};
export type WatchSpaceCreateWithoutTitleInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutTitleInput = {
    id?: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutTitleInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput>;
};
export type WatchSpaceCreateManyTitleInputEnvelope = {
    data: Prisma.WatchSpaceCreateManyTitleInput | Prisma.WatchSpaceCreateManyTitleInput[];
    skipDuplicates?: boolean;
};
export type WatchSpaceUpsertWithWhereUniqueWithoutTitleInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutTitleInput, Prisma.WatchSpaceUncheckedUpdateWithoutTitleInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutTitleInput, Prisma.WatchSpaceUncheckedCreateWithoutTitleInput>;
};
export type WatchSpaceUpdateWithWhereUniqueWithoutTitleInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutTitleInput, Prisma.WatchSpaceUncheckedUpdateWithoutTitleInput>;
};
export type WatchSpaceUpdateManyWithWhereWithoutTitleInput = {
    where: Prisma.WatchSpaceScalarWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateManyMutationInput, Prisma.WatchSpaceUncheckedUpdateManyWithoutTitleInput>;
};
export type WatchSpaceCreateWithoutParticipantsInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedCreateWithoutParticipantsInput>;
};
export type WatchSpaceUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.WatchSpaceWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutParticipantsInput, Prisma.WatchSpaceUncheckedUpdateWithoutParticipantsInput>;
};
export type WatchSpaceUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateWithoutPlaybackInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutPlaybackInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutPlaybackInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedCreateWithoutPlaybackInput>;
};
export type WatchSpaceUpsertWithoutPlaybackInput = {
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedUpdateWithoutPlaybackInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedCreateWithoutPlaybackInput>;
    where?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceUpdateToOneWithWhereWithoutPlaybackInput = {
    where?: Prisma.WatchSpaceWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutPlaybackInput, Prisma.WatchSpaceUncheckedUpdateWithoutPlaybackInput>;
};
export type WatchSpaceUpdateWithoutPlaybackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutPlaybackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateWithoutChatMessagesInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutChatMessagesInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutChatMessagesInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedCreateWithoutChatMessagesInput>;
};
export type WatchSpaceUpsertWithoutChatMessagesInput = {
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedUpdateWithoutChatMessagesInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedCreateWithoutChatMessagesInput>;
    where?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: Prisma.WatchSpaceWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutChatMessagesInput, Prisma.WatchSpaceUncheckedUpdateWithoutChatMessagesInput>;
};
export type WatchSpaceUpdateWithoutChatMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutChatMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateWithoutVariationVotesInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutVariationVotesInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutVariationVotesInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedCreateWithoutVariationVotesInput>;
};
export type WatchSpaceUpsertWithoutVariationVotesInput = {
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedUpdateWithoutVariationVotesInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedCreateWithoutVariationVotesInput>;
    where?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceUpdateToOneWithWhereWithoutVariationVotesInput = {
    where?: Prisma.WatchSpaceWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutVariationVotesInput, Prisma.WatchSpaceUncheckedUpdateWithoutVariationVotesInput>;
};
export type WatchSpaceUpdateWithoutVariationVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutVariationVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateWithoutAiQuestionLogsInput = {
    id?: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteCreateNestedManyWithoutWatchSpaceInput;
    host: Prisma.UserCreateNestedOneWithoutCreatedWatchSpacesInput;
    title: Prisma.TitleCreateNestedOneWithoutWatchSpacesInput;
    participants?: Prisma.WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceUncheckedCreateWithoutAiQuestionLogsInput = {
    id?: string;
    titleId: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutWatchSpaceInput;
    playback?: Prisma.PlaybackStateUncheckedCreateNestedOneWithoutWatchSpaceInput;
    variationVotes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutWatchSpaceInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput;
};
export type WatchSpaceCreateOrConnectWithoutAiQuestionLogsInput = {
    where: Prisma.WatchSpaceWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedCreateWithoutAiQuestionLogsInput>;
};
export type WatchSpaceUpsertWithoutAiQuestionLogsInput = {
    update: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedUpdateWithoutAiQuestionLogsInput>;
    create: Prisma.XOR<Prisma.WatchSpaceCreateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedCreateWithoutAiQuestionLogsInput>;
    where?: Prisma.WatchSpaceWhereInput;
};
export type WatchSpaceUpdateToOneWithWhereWithoutAiQuestionLogsInput = {
    where?: Prisma.WatchSpaceWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceUpdateWithoutAiQuestionLogsInput, Prisma.WatchSpaceUncheckedUpdateWithoutAiQuestionLogsInput>;
};
export type WatchSpaceUpdateWithoutAiQuestionLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutAiQuestionLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceCreateManyHostInput = {
    id?: string;
    titleId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
};
export type WatchSpaceUpdateWithoutHostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    title?: Prisma.TitleUpdateOneRequiredWithoutWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutHostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateManyWithoutHostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type WatchSpaceCreateManyTitleInput = {
    id?: string;
    hostId: string;
    name?: string | null;
    status?: $Enums.WatchSpaceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endedAt?: Date | string | null;
    joinCode: string;
    maxParticipants?: number;
};
export type WatchSpaceUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUpdateManyWithoutWatchSpaceNestedInput;
    host?: Prisma.UserUpdateOneRequiredWithoutCreatedWatchSpacesNestedInput;
    participants?: Prisma.WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    playback?: Prisma.PlaybackStateUncheckedUpdateOneWithoutWatchSpaceNestedInput;
    variationVotes?: Prisma.VariationVoteUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    participants?: Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput;
    aiQuestionLogs?: Prisma.AiQuestionLogUncheckedUpdateManyWithoutWatchSpaceNestedInput;
};
export type WatchSpaceUncheckedUpdateManyWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hostId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWatchSpaceStatusFieldUpdateOperationsInput | $Enums.WatchSpaceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    joinCode?: Prisma.StringFieldUpdateOperationsInput | string;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type WatchSpaceCountOutputType
 */
export type WatchSpaceCountOutputType = {
    chatMessages: number;
    variationVotes: number;
    participants: number;
    aiQuestionLogs: number;
};
export type WatchSpaceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatMessages?: boolean | WatchSpaceCountOutputTypeCountChatMessagesArgs;
    variationVotes?: boolean | WatchSpaceCountOutputTypeCountVariationVotesArgs;
    participants?: boolean | WatchSpaceCountOutputTypeCountParticipantsArgs;
    aiQuestionLogs?: boolean | WatchSpaceCountOutputTypeCountAiQuestionLogsArgs;
};
/**
 * WatchSpaceCountOutputType without action
 */
export type WatchSpaceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpaceCountOutputType
     */
    select?: Prisma.WatchSpaceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * WatchSpaceCountOutputType without action
 */
export type WatchSpaceCountOutputTypeCountChatMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
};
/**
 * WatchSpaceCountOutputType without action
 */
export type WatchSpaceCountOutputTypeCountVariationVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariationVoteWhereInput;
};
/**
 * WatchSpaceCountOutputType without action
 */
export type WatchSpaceCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WatchSpaceParticipantWhereInput;
};
/**
 * WatchSpaceCountOutputType without action
 */
export type WatchSpaceCountOutputTypeCountAiQuestionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiQuestionLogWhereInput;
};
export type WatchSpaceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    hostId?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endedAt?: boolean;
    joinCode?: boolean;
    maxParticipants?: boolean;
    chatMessages?: boolean | Prisma.WatchSpace$chatMessagesArgs<ExtArgs>;
    playback?: boolean | Prisma.WatchSpace$playbackArgs<ExtArgs>;
    variationVotes?: boolean | Prisma.WatchSpace$variationVotesArgs<ExtArgs>;
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.WatchSpace$participantsArgs<ExtArgs>;
    aiQuestionLogs?: boolean | Prisma.WatchSpace$aiQuestionLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.WatchSpaceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpace"]>;
export type WatchSpaceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    hostId?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endedAt?: boolean;
    joinCode?: boolean;
    maxParticipants?: boolean;
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpace"]>;
export type WatchSpaceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    hostId?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endedAt?: boolean;
    joinCode?: boolean;
    maxParticipants?: boolean;
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpace"]>;
export type WatchSpaceSelectScalar = {
    id?: boolean;
    titleId?: boolean;
    hostId?: boolean;
    name?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endedAt?: boolean;
    joinCode?: boolean;
    maxParticipants?: boolean;
};
export type WatchSpaceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titleId" | "hostId" | "name" | "status" | "createdAt" | "updatedAt" | "endedAt" | "joinCode" | "maxParticipants", ExtArgs["result"]["watchSpace"]>;
export type WatchSpaceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatMessages?: boolean | Prisma.WatchSpace$chatMessagesArgs<ExtArgs>;
    playback?: boolean | Prisma.WatchSpace$playbackArgs<ExtArgs>;
    variationVotes?: boolean | Prisma.WatchSpace$variationVotesArgs<ExtArgs>;
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.WatchSpace$participantsArgs<ExtArgs>;
    aiQuestionLogs?: boolean | Prisma.WatchSpace$aiQuestionLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.WatchSpaceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WatchSpaceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
};
export type WatchSpaceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    host?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
};
export type $WatchSpacePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WatchSpace";
    objects: {
        chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
        playback: Prisma.$PlaybackStatePayload<ExtArgs> | null;
        variationVotes: Prisma.$VariationVotePayload<ExtArgs>[];
        host: Prisma.$UserPayload<ExtArgs>;
        title: Prisma.$TitlePayload<ExtArgs>;
        participants: Prisma.$WatchSpaceParticipantPayload<ExtArgs>[];
        aiQuestionLogs: Prisma.$AiQuestionLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titleId: string;
        hostId: string;
        name: string | null;
        status: $Enums.WatchSpaceStatus;
        createdAt: Date;
        updatedAt: Date;
        endedAt: Date | null;
        joinCode: string;
        maxParticipants: number;
    }, ExtArgs["result"]["watchSpace"]>;
    composites: {};
};
export type WatchSpaceGetPayload<S extends boolean | null | undefined | WatchSpaceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload, S>;
export type WatchSpaceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WatchSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WatchSpaceCountAggregateInputType | true;
};
export interface WatchSpaceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WatchSpace'];
        meta: {
            name: 'WatchSpace';
        };
    };
    /**
     * Find zero or one WatchSpace that matches the filter.
     * @param {WatchSpaceFindUniqueArgs} args - Arguments to find a WatchSpace
     * @example
     * // Get one WatchSpace
     * const watchSpace = await prisma.watchSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchSpaceFindUniqueArgs>(args: Prisma.SelectSubset<T, WatchSpaceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WatchSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchSpaceFindUniqueOrThrowArgs} args - Arguments to find a WatchSpace
     * @example
     * // Get one WatchSpace
     * const watchSpace = await prisma.watchSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchSpaceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WatchSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WatchSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceFindFirstArgs} args - Arguments to find a WatchSpace
     * @example
     * // Get one WatchSpace
     * const watchSpace = await prisma.watchSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchSpaceFindFirstArgs>(args?: Prisma.SelectSubset<T, WatchSpaceFindFirstArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WatchSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceFindFirstOrThrowArgs} args - Arguments to find a WatchSpace
     * @example
     * // Get one WatchSpace
     * const watchSpace = await prisma.watchSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchSpaceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WatchSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WatchSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchSpaces
     * const watchSpaces = await prisma.watchSpace.findMany()
     *
     * // Get first 10 WatchSpaces
     * const watchSpaces = await prisma.watchSpace.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const watchSpaceWithIdOnly = await prisma.watchSpace.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WatchSpaceFindManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WatchSpace.
     * @param {WatchSpaceCreateArgs} args - Arguments to create a WatchSpace.
     * @example
     * // Create one WatchSpace
     * const WatchSpace = await prisma.watchSpace.create({
     *   data: {
     *     // ... data to create a WatchSpace
     *   }
     * })
     *
     */
    create<T extends WatchSpaceCreateArgs>(args: Prisma.SelectSubset<T, WatchSpaceCreateArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WatchSpaces.
     * @param {WatchSpaceCreateManyArgs} args - Arguments to create many WatchSpaces.
     * @example
     * // Create many WatchSpaces
     * const watchSpace = await prisma.watchSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WatchSpaceCreateManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WatchSpaces and returns the data saved in the database.
     * @param {WatchSpaceCreateManyAndReturnArgs} args - Arguments to create many WatchSpaces.
     * @example
     * // Create many WatchSpaces
     * const watchSpace = await prisma.watchSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WatchSpaces and only return the `id`
     * const watchSpaceWithIdOnly = await prisma.watchSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WatchSpaceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WatchSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WatchSpace.
     * @param {WatchSpaceDeleteArgs} args - Arguments to delete one WatchSpace.
     * @example
     * // Delete one WatchSpace
     * const WatchSpace = await prisma.watchSpace.delete({
     *   where: {
     *     // ... filter to delete one WatchSpace
     *   }
     * })
     *
     */
    delete<T extends WatchSpaceDeleteArgs>(args: Prisma.SelectSubset<T, WatchSpaceDeleteArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WatchSpace.
     * @param {WatchSpaceUpdateArgs} args - Arguments to update one WatchSpace.
     * @example
     * // Update one WatchSpace
     * const watchSpace = await prisma.watchSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WatchSpaceUpdateArgs>(args: Prisma.SelectSubset<T, WatchSpaceUpdateArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WatchSpaces.
     * @param {WatchSpaceDeleteManyArgs} args - Arguments to filter WatchSpaces to delete.
     * @example
     * // Delete a few WatchSpaces
     * const { count } = await prisma.watchSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WatchSpaceDeleteManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WatchSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchSpaces
     * const watchSpace = await prisma.watchSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WatchSpaceUpdateManyArgs>(args: Prisma.SelectSubset<T, WatchSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WatchSpaces and returns the data updated in the database.
     * @param {WatchSpaceUpdateManyAndReturnArgs} args - Arguments to update many WatchSpaces.
     * @example
     * // Update many WatchSpaces
     * const watchSpace = await prisma.watchSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WatchSpaces and only return the `id`
     * const watchSpaceWithIdOnly = await prisma.watchSpace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchSpaceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WatchSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WatchSpace.
     * @param {WatchSpaceUpsertArgs} args - Arguments to update or create a WatchSpace.
     * @example
     * // Update or create a WatchSpace
     * const watchSpace = await prisma.watchSpace.upsert({
     *   create: {
     *     // ... data to create a WatchSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchSpace we want to update
     *   }
     * })
     */
    upsert<T extends WatchSpaceUpsertArgs>(args: Prisma.SelectSubset<T, WatchSpaceUpsertArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceClient<runtime.Types.Result.GetResult<Prisma.$WatchSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WatchSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceCountArgs} args - Arguments to filter WatchSpaces to count.
     * @example
     * // Count the number of WatchSpaces
     * const count = await prisma.watchSpace.count({
     *   where: {
     *     // ... the filter for the WatchSpaces we want to count
     *   }
     * })
    **/
    count<T extends WatchSpaceCountArgs>(args?: Prisma.Subset<T, WatchSpaceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WatchSpaceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WatchSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchSpaceAggregateArgs>(args: Prisma.Subset<T, WatchSpaceAggregateArgs>): Prisma.PrismaPromise<GetWatchSpaceAggregateType<T>>;
    /**
     * Group by WatchSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WatchSpaceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WatchSpaceGroupByArgs['orderBy'];
    } : {
        orderBy?: WatchSpaceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WatchSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WatchSpace model
     */
    readonly fields: WatchSpaceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WatchSpace.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WatchSpaceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chatMessages<T extends Prisma.WatchSpace$chatMessagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpace$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    playback<T extends Prisma.WatchSpace$playbackArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpace$playbackArgs<ExtArgs>>): Prisma.Prisma__PlaybackStateClient<runtime.Types.Result.GetResult<Prisma.$PlaybackStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    variationVotes<T extends Prisma.WatchSpace$variationVotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpace$variationVotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    host<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    title<T extends Prisma.TitleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TitleDefaultArgs<ExtArgs>>): Prisma.Prisma__TitleClient<runtime.Types.Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.WatchSpace$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpace$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    aiQuestionLogs<T extends Prisma.WatchSpace$aiQuestionLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WatchSpace$aiQuestionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiQuestionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the WatchSpace model
 */
export interface WatchSpaceFieldRefs {
    readonly id: Prisma.FieldRef<"WatchSpace", 'String'>;
    readonly titleId: Prisma.FieldRef<"WatchSpace", 'String'>;
    readonly hostId: Prisma.FieldRef<"WatchSpace", 'String'>;
    readonly name: Prisma.FieldRef<"WatchSpace", 'String'>;
    readonly status: Prisma.FieldRef<"WatchSpace", 'WatchSpaceStatus'>;
    readonly createdAt: Prisma.FieldRef<"WatchSpace", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WatchSpace", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"WatchSpace", 'DateTime'>;
    readonly joinCode: Prisma.FieldRef<"WatchSpace", 'String'>;
    readonly maxParticipants: Prisma.FieldRef<"WatchSpace", 'Int'>;
}
/**
 * WatchSpace findUnique
 */
export type WatchSpaceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which WatchSpace to fetch.
     */
    where: Prisma.WatchSpaceWhereUniqueInput;
};
/**
 * WatchSpace findUniqueOrThrow
 */
export type WatchSpaceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which WatchSpace to fetch.
     */
    where: Prisma.WatchSpaceWhereUniqueInput;
};
/**
 * WatchSpace findFirst
 */
export type WatchSpaceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which WatchSpace to fetch.
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaces to fetch.
     */
    orderBy?: Prisma.WatchSpaceOrderByWithRelationInput | Prisma.WatchSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WatchSpaces.
     */
    cursor?: Prisma.WatchSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaces.
     */
    distinct?: Prisma.WatchSpaceScalarFieldEnum | Prisma.WatchSpaceScalarFieldEnum[];
};
/**
 * WatchSpace findFirstOrThrow
 */
export type WatchSpaceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which WatchSpace to fetch.
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaces to fetch.
     */
    orderBy?: Prisma.WatchSpaceOrderByWithRelationInput | Prisma.WatchSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WatchSpaces.
     */
    cursor?: Prisma.WatchSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaces.
     */
    distinct?: Prisma.WatchSpaceScalarFieldEnum | Prisma.WatchSpaceScalarFieldEnum[];
};
/**
 * WatchSpace findMany
 */
export type WatchSpaceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter, which WatchSpaces to fetch.
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaces to fetch.
     */
    orderBy?: Prisma.WatchSpaceOrderByWithRelationInput | Prisma.WatchSpaceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WatchSpaces.
     */
    cursor?: Prisma.WatchSpaceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaces.
     */
    distinct?: Prisma.WatchSpaceScalarFieldEnum | Prisma.WatchSpaceScalarFieldEnum[];
};
/**
 * WatchSpace create
 */
export type WatchSpaceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * The data needed to create a WatchSpace.
     */
    data: Prisma.XOR<Prisma.WatchSpaceCreateInput, Prisma.WatchSpaceUncheckedCreateInput>;
};
/**
 * WatchSpace createMany
 */
export type WatchSpaceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchSpaces.
     */
    data: Prisma.WatchSpaceCreateManyInput | Prisma.WatchSpaceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WatchSpace createManyAndReturn
 */
export type WatchSpaceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * The data used to create many WatchSpaces.
     */
    data: Prisma.WatchSpaceCreateManyInput | Prisma.WatchSpaceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WatchSpace update
 */
export type WatchSpaceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * The data needed to update a WatchSpace.
     */
    data: Prisma.XOR<Prisma.WatchSpaceUpdateInput, Prisma.WatchSpaceUncheckedUpdateInput>;
    /**
     * Choose, which WatchSpace to update.
     */
    where: Prisma.WatchSpaceWhereUniqueInput;
};
/**
 * WatchSpace updateMany
 */
export type WatchSpaceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchSpaces.
     */
    data: Prisma.XOR<Prisma.WatchSpaceUpdateManyMutationInput, Prisma.WatchSpaceUncheckedUpdateManyInput>;
    /**
     * Filter which WatchSpaces to update
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * Limit how many WatchSpaces to update.
     */
    limit?: number;
};
/**
 * WatchSpace updateManyAndReturn
 */
export type WatchSpaceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * The data used to update WatchSpaces.
     */
    data: Prisma.XOR<Prisma.WatchSpaceUpdateManyMutationInput, Prisma.WatchSpaceUncheckedUpdateManyInput>;
    /**
     * Filter which WatchSpaces to update
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * Limit how many WatchSpaces to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WatchSpace upsert
 */
export type WatchSpaceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * The filter to search for the WatchSpace to update in case it exists.
     */
    where: Prisma.WatchSpaceWhereUniqueInput;
    /**
     * In case the WatchSpace found by the `where` argument doesn't exist, create a new WatchSpace with this data.
     */
    create: Prisma.XOR<Prisma.WatchSpaceCreateInput, Prisma.WatchSpaceUncheckedCreateInput>;
    /**
     * In case the WatchSpace was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WatchSpaceUpdateInput, Prisma.WatchSpaceUncheckedUpdateInput>;
};
/**
 * WatchSpace delete
 */
export type WatchSpaceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
    /**
     * Filter which WatchSpace to delete.
     */
    where: Prisma.WatchSpaceWhereUniqueInput;
};
/**
 * WatchSpace deleteMany
 */
export type WatchSpaceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WatchSpaces to delete
     */
    where?: Prisma.WatchSpaceWhereInput;
    /**
     * Limit how many WatchSpaces to delete.
     */
    limit?: number;
};
/**
 * WatchSpace.chatMessages
 */
export type WatchSpace$chatMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
/**
 * WatchSpace.playback
 */
export type WatchSpace$playbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaybackState
     */
    select?: Prisma.PlaybackStateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlaybackState
     */
    omit?: Prisma.PlaybackStateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlaybackStateInclude<ExtArgs> | null;
    where?: Prisma.PlaybackStateWhereInput;
};
/**
 * WatchSpace.variationVotes
 */
export type WatchSpace$variationVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.VariationVoteWhereInput;
    orderBy?: Prisma.VariationVoteOrderByWithRelationInput | Prisma.VariationVoteOrderByWithRelationInput[];
    cursor?: Prisma.VariationVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariationVoteScalarFieldEnum | Prisma.VariationVoteScalarFieldEnum[];
};
/**
 * WatchSpace.participants
 */
export type WatchSpace$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpaceParticipant
     */
    select?: Prisma.WatchSpaceParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpaceParticipant
     */
    omit?: Prisma.WatchSpaceParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceParticipantInclude<ExtArgs> | null;
    where?: Prisma.WatchSpaceParticipantWhereInput;
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithRelationInput | Prisma.WatchSpaceParticipantOrderByWithRelationInput[];
    cursor?: Prisma.WatchSpaceParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WatchSpaceParticipantScalarFieldEnum | Prisma.WatchSpaceParticipantScalarFieldEnum[];
};
/**
 * WatchSpace.aiQuestionLogs
 */
export type WatchSpace$aiQuestionLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AiQuestionLogWhereInput;
    orderBy?: Prisma.AiQuestionLogOrderByWithRelationInput | Prisma.AiQuestionLogOrderByWithRelationInput[];
    cursor?: Prisma.AiQuestionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiQuestionLogScalarFieldEnum | Prisma.AiQuestionLogScalarFieldEnum[];
};
/**
 * WatchSpace without action
 */
export type WatchSpaceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpace
     */
    select?: Prisma.WatchSpaceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpace
     */
    omit?: Prisma.WatchSpaceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceInclude<ExtArgs> | null;
};
//# sourceMappingURL=WatchSpace.d.ts.map