import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TimelineEvent
 *
 */
export type TimelineEventModel = runtime.Types.Result.DefaultSelection<Prisma.$TimelineEventPayload>;
export type AggregateTimelineEvent = {
    _count: TimelineEventCountAggregateOutputType | null;
    _avg: TimelineEventAvgAggregateOutputType | null;
    _sum: TimelineEventSumAggregateOutputType | null;
    _min: TimelineEventMinAggregateOutputType | null;
    _max: TimelineEventMaxAggregateOutputType | null;
};
export type TimelineEventAvgAggregateOutputType = {
    startTime: number | null;
    endTime: number | null;
};
export type TimelineEventSumAggregateOutputType = {
    startTime: number | null;
    endTime: number | null;
};
export type TimelineEventMinAggregateOutputType = {
    id: string | null;
    titleId: string | null;
    type: $Enums.TimelineEventType | null;
    startTime: number | null;
    endTime: number | null;
    eventTitle: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimelineEventMaxAggregateOutputType = {
    id: string | null;
    titleId: string | null;
    type: $Enums.TimelineEventType | null;
    startTime: number | null;
    endTime: number | null;
    eventTitle: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimelineEventCountAggregateOutputType = {
    id: number;
    titleId: number;
    type: number;
    startTime: number;
    endTime: number;
    eventTitle: number;
    description: number;
    payload: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TimelineEventAvgAggregateInputType = {
    startTime?: true;
    endTime?: true;
};
export type TimelineEventSumAggregateInputType = {
    startTime?: true;
    endTime?: true;
};
export type TimelineEventMinAggregateInputType = {
    id?: true;
    titleId?: true;
    type?: true;
    startTime?: true;
    endTime?: true;
    eventTitle?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimelineEventMaxAggregateInputType = {
    id?: true;
    titleId?: true;
    type?: true;
    startTime?: true;
    endTime?: true;
    eventTitle?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimelineEventCountAggregateInputType = {
    id?: true;
    titleId?: true;
    type?: true;
    startTime?: true;
    endTime?: true;
    eventTitle?: true;
    description?: true;
    payload?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TimelineEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEvent to aggregate.
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: Prisma.TimelineEventOrderByWithRelationInput | Prisma.TimelineEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TimelineEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TimelineEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TimelineEvents
    **/
    _count?: true | TimelineEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TimelineEventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TimelineEventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TimelineEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TimelineEventMaxAggregateInputType;
};
export type GetTimelineEventAggregateType<T extends TimelineEventAggregateArgs> = {
    [P in keyof T & keyof AggregateTimelineEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTimelineEvent[P]> : Prisma.GetScalarType<T[P], AggregateTimelineEvent[P]>;
};
export type TimelineEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimelineEventWhereInput;
    orderBy?: Prisma.TimelineEventOrderByWithAggregationInput | Prisma.TimelineEventOrderByWithAggregationInput[];
    by: Prisma.TimelineEventScalarFieldEnum[] | Prisma.TimelineEventScalarFieldEnum;
    having?: Prisma.TimelineEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TimelineEventCountAggregateInputType | true;
    _avg?: TimelineEventAvgAggregateInputType;
    _sum?: TimelineEventSumAggregateInputType;
    _min?: TimelineEventMinAggregateInputType;
    _max?: TimelineEventMaxAggregateInputType;
};
export type TimelineEventGroupByOutputType = {
    id: string;
    titleId: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime: number | null;
    eventTitle: string | null;
    description: string | null;
    payload: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TimelineEventCountAggregateOutputType | null;
    _avg: TimelineEventAvgAggregateOutputType | null;
    _sum: TimelineEventSumAggregateOutputType | null;
    _min: TimelineEventMinAggregateOutputType | null;
    _max: TimelineEventMaxAggregateOutputType | null;
};
export type GetTimelineEventGroupByPayload<T extends TimelineEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TimelineEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TimelineEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TimelineEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TimelineEventGroupByOutputType[P]>;
}>>;
export type TimelineEventWhereInput = {
    AND?: Prisma.TimelineEventWhereInput | Prisma.TimelineEventWhereInput[];
    OR?: Prisma.TimelineEventWhereInput[];
    NOT?: Prisma.TimelineEventWhereInput | Prisma.TimelineEventWhereInput[];
    id?: Prisma.StringFilter<"TimelineEvent"> | string;
    titleId?: Prisma.StringFilter<"TimelineEvent"> | string;
    type?: Prisma.EnumTimelineEventTypeFilter<"TimelineEvent"> | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFilter<"TimelineEvent"> | number;
    endTime?: Prisma.FloatNullableFilter<"TimelineEvent"> | number | null;
    eventTitle?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    description?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    payload?: Prisma.JsonNullableFilter<"TimelineEvent">;
    createdAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    variations?: Prisma.VariationOptionListRelationFilter;
};
export type TimelineEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    title?: Prisma.TitleOrderByWithRelationInput;
    variations?: Prisma.VariationOptionOrderByRelationAggregateInput;
};
export type TimelineEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TimelineEventWhereInput | Prisma.TimelineEventWhereInput[];
    OR?: Prisma.TimelineEventWhereInput[];
    NOT?: Prisma.TimelineEventWhereInput | Prisma.TimelineEventWhereInput[];
    titleId?: Prisma.StringFilter<"TimelineEvent"> | string;
    type?: Prisma.EnumTimelineEventTypeFilter<"TimelineEvent"> | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFilter<"TimelineEvent"> | number;
    endTime?: Prisma.FloatNullableFilter<"TimelineEvent"> | number | null;
    eventTitle?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    description?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    payload?: Prisma.JsonNullableFilter<"TimelineEvent">;
    createdAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
    title?: Prisma.XOR<Prisma.TitleScalarRelationFilter, Prisma.TitleWhereInput>;
    variations?: Prisma.VariationOptionListRelationFilter;
}, "id">;
export type TimelineEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TimelineEventCountOrderByAggregateInput;
    _avg?: Prisma.TimelineEventAvgOrderByAggregateInput;
    _max?: Prisma.TimelineEventMaxOrderByAggregateInput;
    _min?: Prisma.TimelineEventMinOrderByAggregateInput;
    _sum?: Prisma.TimelineEventSumOrderByAggregateInput;
};
export type TimelineEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.TimelineEventScalarWhereWithAggregatesInput | Prisma.TimelineEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.TimelineEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TimelineEventScalarWhereWithAggregatesInput | Prisma.TimelineEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TimelineEvent"> | string;
    titleId?: Prisma.StringWithAggregatesFilter<"TimelineEvent"> | string;
    type?: Prisma.EnumTimelineEventTypeWithAggregatesFilter<"TimelineEvent"> | $Enums.TimelineEventType;
    startTime?: Prisma.FloatWithAggregatesFilter<"TimelineEvent"> | number;
    endTime?: Prisma.FloatNullableWithAggregatesFilter<"TimelineEvent"> | number | null;
    eventTitle?: Prisma.StringNullableWithAggregatesFilter<"TimelineEvent"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"TimelineEvent"> | string | null;
    payload?: Prisma.JsonNullableWithAggregatesFilter<"TimelineEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TimelineEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TimelineEvent"> | Date | string;
};
export type TimelineEventCreateInput = {
    id?: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    title: Prisma.TitleCreateNestedOneWithoutTimelineEventsInput;
    variations?: Prisma.VariationOptionCreateNestedManyWithoutTimelineEventInput;
};
export type TimelineEventUncheckedCreateInput = {
    id?: string;
    titleId: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variations?: Prisma.VariationOptionUncheckedCreateNestedManyWithoutTimelineEventInput;
};
export type TimelineEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.TitleUpdateOneRequiredWithoutTimelineEventsNestedInput;
    variations?: Prisma.VariationOptionUpdateManyWithoutTimelineEventNestedInput;
};
export type TimelineEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variations?: Prisma.VariationOptionUncheckedUpdateManyWithoutTimelineEventNestedInput;
};
export type TimelineEventCreateManyInput = {
    id?: string;
    titleId: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimelineEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimelineEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimelineEventListRelationFilter = {
    every?: Prisma.TimelineEventWhereInput;
    some?: Prisma.TimelineEventWhereInput;
    none?: Prisma.TimelineEventWhereInput;
};
export type TimelineEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TimelineEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    eventTitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimelineEventAvgOrderByAggregateInput = {
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
};
export type TimelineEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    eventTitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimelineEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    eventTitle?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimelineEventSumOrderByAggregateInput = {
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
};
export type TimelineEventScalarRelationFilter = {
    is?: Prisma.TimelineEventWhereInput;
    isNot?: Prisma.TimelineEventWhereInput;
};
export type TimelineEventCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput> | Prisma.TimelineEventCreateWithoutTitleInput[] | Prisma.TimelineEventUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutTitleInput | Prisma.TimelineEventCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.TimelineEventCreateManyTitleInputEnvelope;
    connect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
};
export type TimelineEventUncheckedCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput> | Prisma.TimelineEventCreateWithoutTitleInput[] | Prisma.TimelineEventUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutTitleInput | Prisma.TimelineEventCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.TimelineEventCreateManyTitleInputEnvelope;
    connect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
};
export type TimelineEventUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput> | Prisma.TimelineEventCreateWithoutTitleInput[] | Prisma.TimelineEventUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutTitleInput | Prisma.TimelineEventCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.TimelineEventUpsertWithWhereUniqueWithoutTitleInput | Prisma.TimelineEventUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.TimelineEventCreateManyTitleInputEnvelope;
    set?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    disconnect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    delete?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    connect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    update?: Prisma.TimelineEventUpdateWithWhereUniqueWithoutTitleInput | Prisma.TimelineEventUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.TimelineEventUpdateManyWithWhereWithoutTitleInput | Prisma.TimelineEventUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.TimelineEventScalarWhereInput | Prisma.TimelineEventScalarWhereInput[];
};
export type TimelineEventUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput> | Prisma.TimelineEventCreateWithoutTitleInput[] | Prisma.TimelineEventUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutTitleInput | Prisma.TimelineEventCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.TimelineEventUpsertWithWhereUniqueWithoutTitleInput | Prisma.TimelineEventUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.TimelineEventCreateManyTitleInputEnvelope;
    set?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    disconnect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    delete?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    connect?: Prisma.TimelineEventWhereUniqueInput | Prisma.TimelineEventWhereUniqueInput[];
    update?: Prisma.TimelineEventUpdateWithWhereUniqueWithoutTitleInput | Prisma.TimelineEventUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.TimelineEventUpdateManyWithWhereWithoutTitleInput | Prisma.TimelineEventUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.TimelineEventScalarWhereInput | Prisma.TimelineEventScalarWhereInput[];
};
export type EnumTimelineEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.TimelineEventType;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TimelineEventCreateNestedOneWithoutVariationsInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutVariationsInput, Prisma.TimelineEventUncheckedCreateWithoutVariationsInput>;
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutVariationsInput;
    connect?: Prisma.TimelineEventWhereUniqueInput;
};
export type TimelineEventUpdateOneRequiredWithoutVariationsNestedInput = {
    create?: Prisma.XOR<Prisma.TimelineEventCreateWithoutVariationsInput, Prisma.TimelineEventUncheckedCreateWithoutVariationsInput>;
    connectOrCreate?: Prisma.TimelineEventCreateOrConnectWithoutVariationsInput;
    upsert?: Prisma.TimelineEventUpsertWithoutVariationsInput;
    connect?: Prisma.TimelineEventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TimelineEventUpdateToOneWithWhereWithoutVariationsInput, Prisma.TimelineEventUpdateWithoutVariationsInput>, Prisma.TimelineEventUncheckedUpdateWithoutVariationsInput>;
};
export type TimelineEventCreateWithoutTitleInput = {
    id?: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variations?: Prisma.VariationOptionCreateNestedManyWithoutTimelineEventInput;
};
export type TimelineEventUncheckedCreateWithoutTitleInput = {
    id?: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variations?: Prisma.VariationOptionUncheckedCreateNestedManyWithoutTimelineEventInput;
};
export type TimelineEventCreateOrConnectWithoutTitleInput = {
    where: Prisma.TimelineEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput>;
};
export type TimelineEventCreateManyTitleInputEnvelope = {
    data: Prisma.TimelineEventCreateManyTitleInput | Prisma.TimelineEventCreateManyTitleInput[];
    skipDuplicates?: boolean;
};
export type TimelineEventUpsertWithWhereUniqueWithoutTitleInput = {
    where: Prisma.TimelineEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimelineEventUpdateWithoutTitleInput, Prisma.TimelineEventUncheckedUpdateWithoutTitleInput>;
    create: Prisma.XOR<Prisma.TimelineEventCreateWithoutTitleInput, Prisma.TimelineEventUncheckedCreateWithoutTitleInput>;
};
export type TimelineEventUpdateWithWhereUniqueWithoutTitleInput = {
    where: Prisma.TimelineEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimelineEventUpdateWithoutTitleInput, Prisma.TimelineEventUncheckedUpdateWithoutTitleInput>;
};
export type TimelineEventUpdateManyWithWhereWithoutTitleInput = {
    where: Prisma.TimelineEventScalarWhereInput;
    data: Prisma.XOR<Prisma.TimelineEventUpdateManyMutationInput, Prisma.TimelineEventUncheckedUpdateManyWithoutTitleInput>;
};
export type TimelineEventScalarWhereInput = {
    AND?: Prisma.TimelineEventScalarWhereInput | Prisma.TimelineEventScalarWhereInput[];
    OR?: Prisma.TimelineEventScalarWhereInput[];
    NOT?: Prisma.TimelineEventScalarWhereInput | Prisma.TimelineEventScalarWhereInput[];
    id?: Prisma.StringFilter<"TimelineEvent"> | string;
    titleId?: Prisma.StringFilter<"TimelineEvent"> | string;
    type?: Prisma.EnumTimelineEventTypeFilter<"TimelineEvent"> | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFilter<"TimelineEvent"> | number;
    endTime?: Prisma.FloatNullableFilter<"TimelineEvent"> | number | null;
    eventTitle?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    description?: Prisma.StringNullableFilter<"TimelineEvent"> | string | null;
    payload?: Prisma.JsonNullableFilter<"TimelineEvent">;
    createdAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimelineEvent"> | Date | string;
};
export type TimelineEventCreateWithoutVariationsInput = {
    id?: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    title: Prisma.TitleCreateNestedOneWithoutTimelineEventsInput;
};
export type TimelineEventUncheckedCreateWithoutVariationsInput = {
    id?: string;
    titleId: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimelineEventCreateOrConnectWithoutVariationsInput = {
    where: Prisma.TimelineEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimelineEventCreateWithoutVariationsInput, Prisma.TimelineEventUncheckedCreateWithoutVariationsInput>;
};
export type TimelineEventUpsertWithoutVariationsInput = {
    update: Prisma.XOR<Prisma.TimelineEventUpdateWithoutVariationsInput, Prisma.TimelineEventUncheckedUpdateWithoutVariationsInput>;
    create: Prisma.XOR<Prisma.TimelineEventCreateWithoutVariationsInput, Prisma.TimelineEventUncheckedCreateWithoutVariationsInput>;
    where?: Prisma.TimelineEventWhereInput;
};
export type TimelineEventUpdateToOneWithWhereWithoutVariationsInput = {
    where?: Prisma.TimelineEventWhereInput;
    data: Prisma.XOR<Prisma.TimelineEventUpdateWithoutVariationsInput, Prisma.TimelineEventUncheckedUpdateWithoutVariationsInput>;
};
export type TimelineEventUpdateWithoutVariationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    title?: Prisma.TitleUpdateOneRequiredWithoutTimelineEventsNestedInput;
};
export type TimelineEventUncheckedUpdateWithoutVariationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titleId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimelineEventCreateManyTitleInput = {
    id?: string;
    type: $Enums.TimelineEventType;
    startTime: number;
    endTime?: number | null;
    eventTitle?: string | null;
    description?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimelineEventUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variations?: Prisma.VariationOptionUpdateManyWithoutTimelineEventNestedInput;
};
export type TimelineEventUncheckedUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variations?: Prisma.VariationOptionUncheckedUpdateManyWithoutTimelineEventNestedInput;
};
export type TimelineEventUncheckedUpdateManyWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTimelineEventTypeFieldUpdateOperationsInput | $Enums.TimelineEventType;
    startTime?: Prisma.FloatFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    eventTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type TimelineEventCountOutputType
 */
export type TimelineEventCountOutputType = {
    variations: number;
};
export type TimelineEventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variations?: boolean | TimelineEventCountOutputTypeCountVariationsArgs;
};
/**
 * TimelineEventCountOutputType without action
 */
export type TimelineEventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEventCountOutputType
     */
    select?: Prisma.TimelineEventCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TimelineEventCountOutputType without action
 */
export type TimelineEventCountOutputTypeCountVariationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariationOptionWhereInput;
};
export type TimelineEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    type?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    eventTitle?: boolean;
    description?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    variations?: boolean | Prisma.TimelineEvent$variationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TimelineEventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timelineEvent"]>;
export type TimelineEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    type?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    eventTitle?: boolean;
    description?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timelineEvent"]>;
export type TimelineEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titleId?: boolean;
    type?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    eventTitle?: boolean;
    description?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timelineEvent"]>;
export type TimelineEventSelectScalar = {
    id?: boolean;
    titleId?: boolean;
    type?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    eventTitle?: boolean;
    description?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TimelineEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titleId" | "type" | "startTime" | "endTime" | "eventTitle" | "description" | "payload" | "createdAt" | "updatedAt", ExtArgs["result"]["timelineEvent"]>;
export type TimelineEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
    variations?: boolean | Prisma.TimelineEvent$variationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TimelineEventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TimelineEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
};
export type TimelineEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    title?: boolean | Prisma.TitleDefaultArgs<ExtArgs>;
};
export type $TimelineEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TimelineEvent";
    objects: {
        title: Prisma.$TitlePayload<ExtArgs>;
        variations: Prisma.$VariationOptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titleId: string;
        type: $Enums.TimelineEventType;
        startTime: number;
        endTime: number | null;
        eventTitle: string | null;
        description: string | null;
        payload: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["timelineEvent"]>;
    composites: {};
};
export type TimelineEventGetPayload<S extends boolean | null | undefined | TimelineEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload, S>;
export type TimelineEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TimelineEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TimelineEventCountAggregateInputType | true;
};
export interface TimelineEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TimelineEvent'];
        meta: {
            name: 'TimelineEvent';
        };
    };
    /**
     * Find zero or one TimelineEvent that matches the filter.
     * @param {TimelineEventFindUniqueArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineEventFindUniqueArgs>(args: Prisma.SelectSubset<T, TimelineEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TimelineEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineEventFindUniqueOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TimelineEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TimelineEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindFirstArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineEventFindFirstArgs>(args?: Prisma.SelectSubset<T, TimelineEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TimelineEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindFirstOrThrowArgs} args - Arguments to find a TimelineEvent
     * @example
     * // Get one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TimelineEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TimelineEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany()
     *
     * // Get first 10 TimelineEvents
     * const timelineEvents = await prisma.timelineEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TimelineEventFindManyArgs>(args?: Prisma.SelectSubset<T, TimelineEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TimelineEvent.
     * @param {TimelineEventCreateArgs} args - Arguments to create a TimelineEvent.
     * @example
     * // Create one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.create({
     *   data: {
     *     // ... data to create a TimelineEvent
     *   }
     * })
     *
     */
    create<T extends TimelineEventCreateArgs>(args: Prisma.SelectSubset<T, TimelineEventCreateArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TimelineEvents.
     * @param {TimelineEventCreateManyArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TimelineEventCreateManyArgs>(args?: Prisma.SelectSubset<T, TimelineEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TimelineEvents and returns the data saved in the database.
     * @param {TimelineEventCreateManyAndReturnArgs} args - Arguments to create many TimelineEvents.
     * @example
     * // Create many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TimelineEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TimelineEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TimelineEvent.
     * @param {TimelineEventDeleteArgs} args - Arguments to delete one TimelineEvent.
     * @example
     * // Delete one TimelineEvent
     * const TimelineEvent = await prisma.timelineEvent.delete({
     *   where: {
     *     // ... filter to delete one TimelineEvent
     *   }
     * })
     *
     */
    delete<T extends TimelineEventDeleteArgs>(args: Prisma.SelectSubset<T, TimelineEventDeleteArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TimelineEvent.
     * @param {TimelineEventUpdateArgs} args - Arguments to update one TimelineEvent.
     * @example
     * // Update one TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TimelineEventUpdateArgs>(args: Prisma.SelectSubset<T, TimelineEventUpdateArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TimelineEvents.
     * @param {TimelineEventDeleteManyArgs} args - Arguments to filter TimelineEvents to delete.
     * @example
     * // Delete a few TimelineEvents
     * const { count } = await prisma.timelineEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TimelineEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, TimelineEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TimelineEventUpdateManyArgs>(args: Prisma.SelectSubset<T, TimelineEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TimelineEvents and returns the data updated in the database.
     * @param {TimelineEventUpdateManyAndReturnArgs} args - Arguments to update many TimelineEvents.
     * @example
     * // Update many TimelineEvents
     * const timelineEvent = await prisma.timelineEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TimelineEvents and only return the `id`
     * const timelineEventWithIdOnly = await prisma.timelineEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimelineEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TimelineEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TimelineEvent.
     * @param {TimelineEventUpsertArgs} args - Arguments to update or create a TimelineEvent.
     * @example
     * // Update or create a TimelineEvent
     * const timelineEvent = await prisma.timelineEvent.upsert({
     *   create: {
     *     // ... data to create a TimelineEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineEvent we want to update
     *   }
     * })
     */
    upsert<T extends TimelineEventUpsertArgs>(args: Prisma.SelectSubset<T, TimelineEventUpsertArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TimelineEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventCountArgs} args - Arguments to filter TimelineEvents to count.
     * @example
     * // Count the number of TimelineEvents
     * const count = await prisma.timelineEvent.count({
     *   where: {
     *     // ... the filter for the TimelineEvents we want to count
     *   }
     * })
    **/
    count<T extends TimelineEventCountArgs>(args?: Prisma.Subset<T, TimelineEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TimelineEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineEventAggregateArgs>(args: Prisma.Subset<T, TimelineEventAggregateArgs>): Prisma.PrismaPromise<GetTimelineEventAggregateType<T>>;
    /**
     * Group by TimelineEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TimelineEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TimelineEventGroupByArgs['orderBy'];
    } : {
        orderBy?: TimelineEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TimelineEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TimelineEvent model
     */
    readonly fields: TimelineEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TimelineEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TimelineEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    title<T extends Prisma.TitleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TitleDefaultArgs<ExtArgs>>): Prisma.Prisma__TitleClient<runtime.Types.Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variations<T extends Prisma.TimelineEvent$variationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimelineEvent$variationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the TimelineEvent model
 */
export interface TimelineEventFieldRefs {
    readonly id: Prisma.FieldRef<"TimelineEvent", 'String'>;
    readonly titleId: Prisma.FieldRef<"TimelineEvent", 'String'>;
    readonly type: Prisma.FieldRef<"TimelineEvent", 'TimelineEventType'>;
    readonly startTime: Prisma.FieldRef<"TimelineEvent", 'Float'>;
    readonly endTime: Prisma.FieldRef<"TimelineEvent", 'Float'>;
    readonly eventTitle: Prisma.FieldRef<"TimelineEvent", 'String'>;
    readonly description: Prisma.FieldRef<"TimelineEvent", 'String'>;
    readonly payload: Prisma.FieldRef<"TimelineEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"TimelineEvent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TimelineEvent", 'DateTime'>;
}
/**
 * TimelineEvent findUnique
 */
export type TimelineEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where: Prisma.TimelineEventWhereUniqueInput;
};
/**
 * TimelineEvent findUniqueOrThrow
 */
export type TimelineEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where: Prisma.TimelineEventWhereUniqueInput;
};
/**
 * TimelineEvent findFirst
 */
export type TimelineEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: Prisma.TimelineEventOrderByWithRelationInput | Prisma.TimelineEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TimelineEvents.
     */
    cursor?: Prisma.TimelineEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TimelineEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TimelineEvents.
     */
    distinct?: Prisma.TimelineEventScalarFieldEnum | Prisma.TimelineEventScalarFieldEnum[];
};
/**
 * TimelineEvent findFirstOrThrow
 */
export type TimelineEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter, which TimelineEvent to fetch.
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: Prisma.TimelineEventOrderByWithRelationInput | Prisma.TimelineEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TimelineEvents.
     */
    cursor?: Prisma.TimelineEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TimelineEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TimelineEvents.
     */
    distinct?: Prisma.TimelineEventScalarFieldEnum | Prisma.TimelineEventScalarFieldEnum[];
};
/**
 * TimelineEvent findMany
 */
export type TimelineEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter, which TimelineEvents to fetch.
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TimelineEvents to fetch.
     */
    orderBy?: Prisma.TimelineEventOrderByWithRelationInput | Prisma.TimelineEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TimelineEvents.
     */
    cursor?: Prisma.TimelineEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TimelineEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TimelineEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TimelineEvents.
     */
    distinct?: Prisma.TimelineEventScalarFieldEnum | Prisma.TimelineEventScalarFieldEnum[];
};
/**
 * TimelineEvent create
 */
export type TimelineEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * The data needed to create a TimelineEvent.
     */
    data: Prisma.XOR<Prisma.TimelineEventCreateInput, Prisma.TimelineEventUncheckedCreateInput>;
};
/**
 * TimelineEvent createMany
 */
export type TimelineEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineEvents.
     */
    data: Prisma.TimelineEventCreateManyInput | Prisma.TimelineEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TimelineEvent createManyAndReturn
 */
export type TimelineEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * The data used to create many TimelineEvents.
     */
    data: Prisma.TimelineEventCreateManyInput | Prisma.TimelineEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TimelineEvent update
 */
export type TimelineEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * The data needed to update a TimelineEvent.
     */
    data: Prisma.XOR<Prisma.TimelineEventUpdateInput, Prisma.TimelineEventUncheckedUpdateInput>;
    /**
     * Choose, which TimelineEvent to update.
     */
    where: Prisma.TimelineEventWhereUniqueInput;
};
/**
 * TimelineEvent updateMany
 */
export type TimelineEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineEvents.
     */
    data: Prisma.XOR<Prisma.TimelineEventUpdateManyMutationInput, Prisma.TimelineEventUncheckedUpdateManyInput>;
    /**
     * Filter which TimelineEvents to update
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * Limit how many TimelineEvents to update.
     */
    limit?: number;
};
/**
 * TimelineEvent updateManyAndReturn
 */
export type TimelineEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * The data used to update TimelineEvents.
     */
    data: Prisma.XOR<Prisma.TimelineEventUpdateManyMutationInput, Prisma.TimelineEventUncheckedUpdateManyInput>;
    /**
     * Filter which TimelineEvents to update
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * Limit how many TimelineEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TimelineEvent upsert
 */
export type TimelineEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * The filter to search for the TimelineEvent to update in case it exists.
     */
    where: Prisma.TimelineEventWhereUniqueInput;
    /**
     * In case the TimelineEvent found by the `where` argument doesn't exist, create a new TimelineEvent with this data.
     */
    create: Prisma.XOR<Prisma.TimelineEventCreateInput, Prisma.TimelineEventUncheckedCreateInput>;
    /**
     * In case the TimelineEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TimelineEventUpdateInput, Prisma.TimelineEventUncheckedUpdateInput>;
};
/**
 * TimelineEvent delete
 */
export type TimelineEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
    /**
     * Filter which TimelineEvent to delete.
     */
    where: Prisma.TimelineEventWhereUniqueInput;
};
/**
 * TimelineEvent deleteMany
 */
export type TimelineEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEvents to delete
     */
    where?: Prisma.TimelineEventWhereInput;
    /**
     * Limit how many TimelineEvents to delete.
     */
    limit?: number;
};
/**
 * TimelineEvent.variations
 */
export type TimelineEvent$variationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationOption
     */
    select?: Prisma.VariationOptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationOption
     */
    omit?: Prisma.VariationOptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationOptionInclude<ExtArgs> | null;
    where?: Prisma.VariationOptionWhereInput;
    orderBy?: Prisma.VariationOptionOrderByWithRelationInput | Prisma.VariationOptionOrderByWithRelationInput[];
    cursor?: Prisma.VariationOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariationOptionScalarFieldEnum | Prisma.VariationOptionScalarFieldEnum[];
};
/**
 * TimelineEvent without action
 */
export type TimelineEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEvent
     */
    select?: Prisma.TimelineEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TimelineEvent
     */
    omit?: Prisma.TimelineEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TimelineEventInclude<ExtArgs> | null;
};
//# sourceMappingURL=TimelineEvent.d.ts.map