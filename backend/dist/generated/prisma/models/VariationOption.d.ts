import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VariationOption
 *
 */
export type VariationOptionModel = runtime.Types.Result.DefaultSelection<Prisma.$VariationOptionPayload>;
export type AggregateVariationOption = {
    _count: VariationOptionCountAggregateOutputType | null;
    _min: VariationOptionMinAggregateOutputType | null;
    _max: VariationOptionMaxAggregateOutputType | null;
};
export type VariationOptionMinAggregateOutputType = {
    id: string | null;
    timelineEventId: string | null;
    label: string | null;
    content: string | null;
    locale: string | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariationOptionMaxAggregateOutputType = {
    id: string | null;
    timelineEventId: string | null;
    label: string | null;
    content: string | null;
    locale: string | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariationOptionCountAggregateOutputType = {
    id: number;
    timelineEventId: number;
    label: number;
    content: number;
    locale: number;
    isDefault: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VariationOptionMinAggregateInputType = {
    id?: true;
    timelineEventId?: true;
    label?: true;
    content?: true;
    locale?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariationOptionMaxAggregateInputType = {
    id?: true;
    timelineEventId?: true;
    label?: true;
    content?: true;
    locale?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariationOptionCountAggregateInputType = {
    id?: true;
    timelineEventId?: true;
    label?: true;
    content?: true;
    locale?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VariationOptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VariationOption to aggregate.
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationOptions to fetch.
     */
    orderBy?: Prisma.VariationOptionOrderByWithRelationInput | Prisma.VariationOptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VariationOptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VariationOptions
    **/
    _count?: true | VariationOptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VariationOptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VariationOptionMaxAggregateInputType;
};
export type GetVariationOptionAggregateType<T extends VariationOptionAggregateArgs> = {
    [P in keyof T & keyof AggregateVariationOption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVariationOption[P]> : Prisma.GetScalarType<T[P], AggregateVariationOption[P]>;
};
export type VariationOptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariationOptionWhereInput;
    orderBy?: Prisma.VariationOptionOrderByWithAggregationInput | Prisma.VariationOptionOrderByWithAggregationInput[];
    by: Prisma.VariationOptionScalarFieldEnum[] | Prisma.VariationOptionScalarFieldEnum;
    having?: Prisma.VariationOptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VariationOptionCountAggregateInputType | true;
    _min?: VariationOptionMinAggregateInputType;
    _max?: VariationOptionMaxAggregateInputType;
};
export type VariationOptionGroupByOutputType = {
    id: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: VariationOptionCountAggregateOutputType | null;
    _min: VariationOptionMinAggregateOutputType | null;
    _max: VariationOptionMaxAggregateOutputType | null;
};
export type GetVariationOptionGroupByPayload<T extends VariationOptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VariationOptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VariationOptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VariationOptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VariationOptionGroupByOutputType[P]>;
}>>;
export type VariationOptionWhereInput = {
    AND?: Prisma.VariationOptionWhereInput | Prisma.VariationOptionWhereInput[];
    OR?: Prisma.VariationOptionWhereInput[];
    NOT?: Prisma.VariationOptionWhereInput | Prisma.VariationOptionWhereInput[];
    id?: Prisma.StringFilter<"VariationOption"> | string;
    timelineEventId?: Prisma.StringFilter<"VariationOption"> | string;
    label?: Prisma.StringFilter<"VariationOption"> | string;
    content?: Prisma.StringFilter<"VariationOption"> | string;
    locale?: Prisma.StringNullableFilter<"VariationOption"> | string | null;
    isDefault?: Prisma.BoolFilter<"VariationOption"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
    timelineEvent?: Prisma.XOR<Prisma.TimelineEventScalarRelationFilter, Prisma.TimelineEventWhereInput>;
    votes?: Prisma.VariationVoteListRelationFilter;
};
export type VariationOptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    locale?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    timelineEvent?: Prisma.TimelineEventOrderByWithRelationInput;
    votes?: Prisma.VariationVoteOrderByRelationAggregateInput;
};
export type VariationOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VariationOptionWhereInput | Prisma.VariationOptionWhereInput[];
    OR?: Prisma.VariationOptionWhereInput[];
    NOT?: Prisma.VariationOptionWhereInput | Prisma.VariationOptionWhereInput[];
    timelineEventId?: Prisma.StringFilter<"VariationOption"> | string;
    label?: Prisma.StringFilter<"VariationOption"> | string;
    content?: Prisma.StringFilter<"VariationOption"> | string;
    locale?: Prisma.StringNullableFilter<"VariationOption"> | string | null;
    isDefault?: Prisma.BoolFilter<"VariationOption"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
    timelineEvent?: Prisma.XOR<Prisma.TimelineEventScalarRelationFilter, Prisma.TimelineEventWhereInput>;
    votes?: Prisma.VariationVoteListRelationFilter;
}, "id">;
export type VariationOptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    locale?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VariationOptionCountOrderByAggregateInput;
    _max?: Prisma.VariationOptionMaxOrderByAggregateInput;
    _min?: Prisma.VariationOptionMinOrderByAggregateInput;
};
export type VariationOptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.VariationOptionScalarWhereWithAggregatesInput | Prisma.VariationOptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.VariationOptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VariationOptionScalarWhereWithAggregatesInput | Prisma.VariationOptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VariationOption"> | string;
    timelineEventId?: Prisma.StringWithAggregatesFilter<"VariationOption"> | string;
    label?: Prisma.StringWithAggregatesFilter<"VariationOption"> | string;
    content?: Prisma.StringWithAggregatesFilter<"VariationOption"> | string;
    locale?: Prisma.StringNullableWithAggregatesFilter<"VariationOption"> | string | null;
    isDefault?: Prisma.BoolWithAggregatesFilter<"VariationOption"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VariationOption"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VariationOption"> | Date | string;
};
export type VariationOptionCreateInput = {
    id?: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationsInput;
    votes?: Prisma.VariationVoteCreateNestedManyWithoutVariationOptionInput;
};
export type VariationOptionUncheckedCreateInput = {
    id?: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    votes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutVariationOptionInput;
};
export type VariationOptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationsNestedInput;
    votes?: Prisma.VariationVoteUpdateManyWithoutVariationOptionNestedInput;
};
export type VariationOptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: Prisma.VariationVoteUncheckedUpdateManyWithoutVariationOptionNestedInput;
};
export type VariationOptionCreateManyInput = {
    id?: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationOptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationOptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationOptionListRelationFilter = {
    every?: Prisma.VariationOptionWhereInput;
    some?: Prisma.VariationOptionWhereInput;
    none?: Prisma.VariationOptionWhereInput;
};
export type VariationOptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VariationOptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationOptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationOptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    timelineEventId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariationOptionScalarRelationFilter = {
    is?: Prisma.VariationOptionWhereInput;
    isNot?: Prisma.VariationOptionWhereInput;
};
export type VariationOptionCreateNestedManyWithoutTimelineEventInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationOptionCreateWithoutTimelineEventInput[] | Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput | Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput[];
    createMany?: Prisma.VariationOptionCreateManyTimelineEventInputEnvelope;
    connect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
};
export type VariationOptionUncheckedCreateNestedManyWithoutTimelineEventInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationOptionCreateWithoutTimelineEventInput[] | Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput | Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput[];
    createMany?: Prisma.VariationOptionCreateManyTimelineEventInputEnvelope;
    connect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
};
export type VariationOptionUpdateManyWithoutTimelineEventNestedInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationOptionCreateWithoutTimelineEventInput[] | Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput | Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput[];
    upsert?: Prisma.VariationOptionUpsertWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationOptionUpsertWithWhereUniqueWithoutTimelineEventInput[];
    createMany?: Prisma.VariationOptionCreateManyTimelineEventInputEnvelope;
    set?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    disconnect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    delete?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    connect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    update?: Prisma.VariationOptionUpdateWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationOptionUpdateWithWhereUniqueWithoutTimelineEventInput[];
    updateMany?: Prisma.VariationOptionUpdateManyWithWhereWithoutTimelineEventInput | Prisma.VariationOptionUpdateManyWithWhereWithoutTimelineEventInput[];
    deleteMany?: Prisma.VariationOptionScalarWhereInput | Prisma.VariationOptionScalarWhereInput[];
};
export type VariationOptionUncheckedUpdateManyWithoutTimelineEventNestedInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput> | Prisma.VariationOptionCreateWithoutTimelineEventInput[] | Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput[];
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput | Prisma.VariationOptionCreateOrConnectWithoutTimelineEventInput[];
    upsert?: Prisma.VariationOptionUpsertWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationOptionUpsertWithWhereUniqueWithoutTimelineEventInput[];
    createMany?: Prisma.VariationOptionCreateManyTimelineEventInputEnvelope;
    set?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    disconnect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    delete?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    connect?: Prisma.VariationOptionWhereUniqueInput | Prisma.VariationOptionWhereUniqueInput[];
    update?: Prisma.VariationOptionUpdateWithWhereUniqueWithoutTimelineEventInput | Prisma.VariationOptionUpdateWithWhereUniqueWithoutTimelineEventInput[];
    updateMany?: Prisma.VariationOptionUpdateManyWithWhereWithoutTimelineEventInput | Prisma.VariationOptionUpdateManyWithWhereWithoutTimelineEventInput[];
    deleteMany?: Prisma.VariationOptionScalarWhereInput | Prisma.VariationOptionScalarWhereInput[];
};
export type VariationOptionCreateNestedOneWithoutVotesInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutVotesInput, Prisma.VariationOptionUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutVotesInput;
    connect?: Prisma.VariationOptionWhereUniqueInput;
};
export type VariationOptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: Prisma.XOR<Prisma.VariationOptionCreateWithoutVotesInput, Prisma.VariationOptionUncheckedCreateWithoutVotesInput>;
    connectOrCreate?: Prisma.VariationOptionCreateOrConnectWithoutVotesInput;
    upsert?: Prisma.VariationOptionUpsertWithoutVotesInput;
    connect?: Prisma.VariationOptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VariationOptionUpdateToOneWithWhereWithoutVotesInput, Prisma.VariationOptionUpdateWithoutVotesInput>, Prisma.VariationOptionUncheckedUpdateWithoutVotesInput>;
};
export type VariationOptionCreateWithoutTimelineEventInput = {
    id?: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    votes?: Prisma.VariationVoteCreateNestedManyWithoutVariationOptionInput;
};
export type VariationOptionUncheckedCreateWithoutTimelineEventInput = {
    id?: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    votes?: Prisma.VariationVoteUncheckedCreateNestedManyWithoutVariationOptionInput;
};
export type VariationOptionCreateOrConnectWithoutTimelineEventInput = {
    where: Prisma.VariationOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput>;
};
export type VariationOptionCreateManyTimelineEventInputEnvelope = {
    data: Prisma.VariationOptionCreateManyTimelineEventInput | Prisma.VariationOptionCreateManyTimelineEventInput[];
    skipDuplicates?: boolean;
};
export type VariationOptionUpsertWithWhereUniqueWithoutTimelineEventInput = {
    where: Prisma.VariationOptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariationOptionUpdateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedUpdateWithoutTimelineEventInput>;
    create: Prisma.XOR<Prisma.VariationOptionCreateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedCreateWithoutTimelineEventInput>;
};
export type VariationOptionUpdateWithWhereUniqueWithoutTimelineEventInput = {
    where: Prisma.VariationOptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariationOptionUpdateWithoutTimelineEventInput, Prisma.VariationOptionUncheckedUpdateWithoutTimelineEventInput>;
};
export type VariationOptionUpdateManyWithWhereWithoutTimelineEventInput = {
    where: Prisma.VariationOptionScalarWhereInput;
    data: Prisma.XOR<Prisma.VariationOptionUpdateManyMutationInput, Prisma.VariationOptionUncheckedUpdateManyWithoutTimelineEventInput>;
};
export type VariationOptionScalarWhereInput = {
    AND?: Prisma.VariationOptionScalarWhereInput | Prisma.VariationOptionScalarWhereInput[];
    OR?: Prisma.VariationOptionScalarWhereInput[];
    NOT?: Prisma.VariationOptionScalarWhereInput | Prisma.VariationOptionScalarWhereInput[];
    id?: Prisma.StringFilter<"VariationOption"> | string;
    timelineEventId?: Prisma.StringFilter<"VariationOption"> | string;
    label?: Prisma.StringFilter<"VariationOption"> | string;
    content?: Prisma.StringFilter<"VariationOption"> | string;
    locale?: Prisma.StringNullableFilter<"VariationOption"> | string | null;
    isDefault?: Prisma.BoolFilter<"VariationOption"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VariationOption"> | Date | string;
};
export type VariationOptionCreateWithoutVotesInput = {
    id?: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timelineEvent: Prisma.TimelineEventCreateNestedOneWithoutVariationsInput;
};
export type VariationOptionUncheckedCreateWithoutVotesInput = {
    id?: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationOptionCreateOrConnectWithoutVotesInput = {
    where: Prisma.VariationOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariationOptionCreateWithoutVotesInput, Prisma.VariationOptionUncheckedCreateWithoutVotesInput>;
};
export type VariationOptionUpsertWithoutVotesInput = {
    update: Prisma.XOR<Prisma.VariationOptionUpdateWithoutVotesInput, Prisma.VariationOptionUncheckedUpdateWithoutVotesInput>;
    create: Prisma.XOR<Prisma.VariationOptionCreateWithoutVotesInput, Prisma.VariationOptionUncheckedCreateWithoutVotesInput>;
    where?: Prisma.VariationOptionWhereInput;
};
export type VariationOptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: Prisma.VariationOptionWhereInput;
    data: Prisma.XOR<Prisma.VariationOptionUpdateWithoutVotesInput, Prisma.VariationOptionUncheckedUpdateWithoutVotesInput>;
};
export type VariationOptionUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timelineEvent?: Prisma.TimelineEventUpdateOneRequiredWithoutVariationsNestedInput;
};
export type VariationOptionUncheckedUpdateWithoutVotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    timelineEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariationOptionCreateManyTimelineEventInput = {
    id?: string;
    label: string;
    content: string;
    locale?: string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariationOptionUpdateWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: Prisma.VariationVoteUpdateManyWithoutVariationOptionNestedInput;
};
export type VariationOptionUncheckedUpdateWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: Prisma.VariationVoteUncheckedUpdateManyWithoutVariationOptionNestedInput;
};
export type VariationOptionUncheckedUpdateManyWithoutTimelineEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type VariationOptionCountOutputType
 */
export type VariationOptionCountOutputType = {
    votes: number;
};
export type VariationOptionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    votes?: boolean | VariationOptionCountOutputTypeCountVotesArgs;
};
/**
 * VariationOptionCountOutputType without action
 */
export type VariationOptionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationOptionCountOutputType
     */
    select?: Prisma.VariationOptionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VariationOptionCountOutputType without action
 */
export type VariationOptionCountOutputTypeCountVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariationVoteWhereInput;
};
export type VariationOptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    timelineEventId?: boolean;
    label?: boolean;
    content?: boolean;
    locale?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    votes?: boolean | Prisma.VariationOption$votesArgs<ExtArgs>;
    _count?: boolean | Prisma.VariationOptionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationOption"]>;
export type VariationOptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    timelineEventId?: boolean;
    label?: boolean;
    content?: boolean;
    locale?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationOption"]>;
export type VariationOptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    timelineEventId?: boolean;
    label?: boolean;
    content?: boolean;
    locale?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variationOption"]>;
export type VariationOptionSelectScalar = {
    id?: boolean;
    timelineEventId?: boolean;
    label?: boolean;
    content?: boolean;
    locale?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VariationOptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "timelineEventId" | "label" | "content" | "locale" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["variationOption"]>;
export type VariationOptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
    votes?: boolean | Prisma.VariationOption$votesArgs<ExtArgs>;
    _count?: boolean | Prisma.VariationOptionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VariationOptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
};
export type VariationOptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timelineEvent?: boolean | Prisma.TimelineEventDefaultArgs<ExtArgs>;
};
export type $VariationOptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VariationOption";
    objects: {
        timelineEvent: Prisma.$TimelineEventPayload<ExtArgs>;
        votes: Prisma.$VariationVotePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        timelineEventId: string;
        label: string;
        content: string;
        locale: string | null;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["variationOption"]>;
    composites: {};
};
export type VariationOptionGetPayload<S extends boolean | null | undefined | VariationOptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload, S>;
export type VariationOptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VariationOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VariationOptionCountAggregateInputType | true;
};
export interface VariationOptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VariationOption'];
        meta: {
            name: 'VariationOption';
        };
    };
    /**
     * Find zero or one VariationOption that matches the filter.
     * @param {VariationOptionFindUniqueArgs} args - Arguments to find a VariationOption
     * @example
     * // Get one VariationOption
     * const variationOption = await prisma.variationOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationOptionFindUniqueArgs>(args: Prisma.SelectSubset<T, VariationOptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VariationOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationOptionFindUniqueOrThrowArgs} args - Arguments to find a VariationOption
     * @example
     * // Get one VariationOption
     * const variationOption = await prisma.variationOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationOptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VariationOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VariationOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionFindFirstArgs} args - Arguments to find a VariationOption
     * @example
     * // Get one VariationOption
     * const variationOption = await prisma.variationOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationOptionFindFirstArgs>(args?: Prisma.SelectSubset<T, VariationOptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VariationOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionFindFirstOrThrowArgs} args - Arguments to find a VariationOption
     * @example
     * // Get one VariationOption
     * const variationOption = await prisma.variationOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationOptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VariationOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VariationOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariationOptions
     * const variationOptions = await prisma.variationOption.findMany()
     *
     * // Get first 10 VariationOptions
     * const variationOptions = await prisma.variationOption.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const variationOptionWithIdOnly = await prisma.variationOption.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VariationOptionFindManyArgs>(args?: Prisma.SelectSubset<T, VariationOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VariationOption.
     * @param {VariationOptionCreateArgs} args - Arguments to create a VariationOption.
     * @example
     * // Create one VariationOption
     * const VariationOption = await prisma.variationOption.create({
     *   data: {
     *     // ... data to create a VariationOption
     *   }
     * })
     *
     */
    create<T extends VariationOptionCreateArgs>(args: Prisma.SelectSubset<T, VariationOptionCreateArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VariationOptions.
     * @param {VariationOptionCreateManyArgs} args - Arguments to create many VariationOptions.
     * @example
     * // Create many VariationOptions
     * const variationOption = await prisma.variationOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VariationOptionCreateManyArgs>(args?: Prisma.SelectSubset<T, VariationOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VariationOptions and returns the data saved in the database.
     * @param {VariationOptionCreateManyAndReturnArgs} args - Arguments to create many VariationOptions.
     * @example
     * // Create many VariationOptions
     * const variationOption = await prisma.variationOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VariationOptions and only return the `id`
     * const variationOptionWithIdOnly = await prisma.variationOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VariationOptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VariationOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VariationOption.
     * @param {VariationOptionDeleteArgs} args - Arguments to delete one VariationOption.
     * @example
     * // Delete one VariationOption
     * const VariationOption = await prisma.variationOption.delete({
     *   where: {
     *     // ... filter to delete one VariationOption
     *   }
     * })
     *
     */
    delete<T extends VariationOptionDeleteArgs>(args: Prisma.SelectSubset<T, VariationOptionDeleteArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VariationOption.
     * @param {VariationOptionUpdateArgs} args - Arguments to update one VariationOption.
     * @example
     * // Update one VariationOption
     * const variationOption = await prisma.variationOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VariationOptionUpdateArgs>(args: Prisma.SelectSubset<T, VariationOptionUpdateArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VariationOptions.
     * @param {VariationOptionDeleteManyArgs} args - Arguments to filter VariationOptions to delete.
     * @example
     * // Delete a few VariationOptions
     * const { count } = await prisma.variationOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VariationOptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, VariationOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VariationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariationOptions
     * const variationOption = await prisma.variationOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VariationOptionUpdateManyArgs>(args: Prisma.SelectSubset<T, VariationOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VariationOptions and returns the data updated in the database.
     * @param {VariationOptionUpdateManyAndReturnArgs} args - Arguments to update many VariationOptions.
     * @example
     * // Update many VariationOptions
     * const variationOption = await prisma.variationOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VariationOptions and only return the `id`
     * const variationOptionWithIdOnly = await prisma.variationOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationOptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VariationOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VariationOption.
     * @param {VariationOptionUpsertArgs} args - Arguments to update or create a VariationOption.
     * @example
     * // Update or create a VariationOption
     * const variationOption = await prisma.variationOption.upsert({
     *   create: {
     *     // ... data to create a VariationOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariationOption we want to update
     *   }
     * })
     */
    upsert<T extends VariationOptionUpsertArgs>(args: Prisma.SelectSubset<T, VariationOptionUpsertArgs<ExtArgs>>): Prisma.Prisma__VariationOptionClient<runtime.Types.Result.GetResult<Prisma.$VariationOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VariationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionCountArgs} args - Arguments to filter VariationOptions to count.
     * @example
     * // Count the number of VariationOptions
     * const count = await prisma.variationOption.count({
     *   where: {
     *     // ... the filter for the VariationOptions we want to count
     *   }
     * })
    **/
    count<T extends VariationOptionCountArgs>(args?: Prisma.Subset<T, VariationOptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VariationOptionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VariationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationOptionAggregateArgs>(args: Prisma.Subset<T, VariationOptionAggregateArgs>): Prisma.PrismaPromise<GetVariationOptionAggregateType<T>>;
    /**
     * Group by VariationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationOptionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VariationOptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VariationOptionGroupByArgs['orderBy'];
    } : {
        orderBy?: VariationOptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VariationOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VariationOption model
     */
    readonly fields: VariationOptionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VariationOption.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VariationOptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    timelineEvent<T extends Prisma.TimelineEventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimelineEventDefaultArgs<ExtArgs>>): Prisma.Prisma__TimelineEventClient<runtime.Types.Result.GetResult<Prisma.$TimelineEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    votes<T extends Prisma.VariationOption$votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VariationOption$votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the VariationOption model
 */
export interface VariationOptionFieldRefs {
    readonly id: Prisma.FieldRef<"VariationOption", 'String'>;
    readonly timelineEventId: Prisma.FieldRef<"VariationOption", 'String'>;
    readonly label: Prisma.FieldRef<"VariationOption", 'String'>;
    readonly content: Prisma.FieldRef<"VariationOption", 'String'>;
    readonly locale: Prisma.FieldRef<"VariationOption", 'String'>;
    readonly isDefault: Prisma.FieldRef<"VariationOption", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"VariationOption", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VariationOption", 'DateTime'>;
}
/**
 * VariationOption findUnique
 */
export type VariationOptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VariationOption to fetch.
     */
    where: Prisma.VariationOptionWhereUniqueInput;
};
/**
 * VariationOption findUniqueOrThrow
 */
export type VariationOptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VariationOption to fetch.
     */
    where: Prisma.VariationOptionWhereUniqueInput;
};
/**
 * VariationOption findFirst
 */
export type VariationOptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VariationOption to fetch.
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationOptions to fetch.
     */
    orderBy?: Prisma.VariationOptionOrderByWithRelationInput | Prisma.VariationOptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VariationOptions.
     */
    cursor?: Prisma.VariationOptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationOptions.
     */
    distinct?: Prisma.VariationOptionScalarFieldEnum | Prisma.VariationOptionScalarFieldEnum[];
};
/**
 * VariationOption findFirstOrThrow
 */
export type VariationOptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VariationOption to fetch.
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationOptions to fetch.
     */
    orderBy?: Prisma.VariationOptionOrderByWithRelationInput | Prisma.VariationOptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VariationOptions.
     */
    cursor?: Prisma.VariationOptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationOptions.
     */
    distinct?: Prisma.VariationOptionScalarFieldEnum | Prisma.VariationOptionScalarFieldEnum[];
};
/**
 * VariationOption findMany
 */
export type VariationOptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VariationOptions to fetch.
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VariationOptions to fetch.
     */
    orderBy?: Prisma.VariationOptionOrderByWithRelationInput | Prisma.VariationOptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VariationOptions.
     */
    cursor?: Prisma.VariationOptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VariationOptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VariationOptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VariationOptions.
     */
    distinct?: Prisma.VariationOptionScalarFieldEnum | Prisma.VariationOptionScalarFieldEnum[];
};
/**
 * VariationOption create
 */
export type VariationOptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a VariationOption.
     */
    data: Prisma.XOR<Prisma.VariationOptionCreateInput, Prisma.VariationOptionUncheckedCreateInput>;
};
/**
 * VariationOption createMany
 */
export type VariationOptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariationOptions.
     */
    data: Prisma.VariationOptionCreateManyInput | Prisma.VariationOptionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VariationOption createManyAndReturn
 */
export type VariationOptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationOption
     */
    select?: Prisma.VariationOptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationOption
     */
    omit?: Prisma.VariationOptionOmit<ExtArgs> | null;
    /**
     * The data used to create many VariationOptions.
     */
    data: Prisma.VariationOptionCreateManyInput | Prisma.VariationOptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationOptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VariationOption update
 */
export type VariationOptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a VariationOption.
     */
    data: Prisma.XOR<Prisma.VariationOptionUpdateInput, Prisma.VariationOptionUncheckedUpdateInput>;
    /**
     * Choose, which VariationOption to update.
     */
    where: Prisma.VariationOptionWhereUniqueInput;
};
/**
 * VariationOption updateMany
 */
export type VariationOptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VariationOptions.
     */
    data: Prisma.XOR<Prisma.VariationOptionUpdateManyMutationInput, Prisma.VariationOptionUncheckedUpdateManyInput>;
    /**
     * Filter which VariationOptions to update
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * Limit how many VariationOptions to update.
     */
    limit?: number;
};
/**
 * VariationOption updateManyAndReturn
 */
export type VariationOptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationOption
     */
    select?: Prisma.VariationOptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VariationOption
     */
    omit?: Prisma.VariationOptionOmit<ExtArgs> | null;
    /**
     * The data used to update VariationOptions.
     */
    data: Prisma.XOR<Prisma.VariationOptionUpdateManyMutationInput, Prisma.VariationOptionUncheckedUpdateManyInput>;
    /**
     * Filter which VariationOptions to update
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * Limit how many VariationOptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VariationOptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VariationOption upsert
 */
export type VariationOptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the VariationOption to update in case it exists.
     */
    where: Prisma.VariationOptionWhereUniqueInput;
    /**
     * In case the VariationOption found by the `where` argument doesn't exist, create a new VariationOption with this data.
     */
    create: Prisma.XOR<Prisma.VariationOptionCreateInput, Prisma.VariationOptionUncheckedCreateInput>;
    /**
     * In case the VariationOption was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VariationOptionUpdateInput, Prisma.VariationOptionUncheckedUpdateInput>;
};
/**
 * VariationOption delete
 */
export type VariationOptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which VariationOption to delete.
     */
    where: Prisma.VariationOptionWhereUniqueInput;
};
/**
 * VariationOption deleteMany
 */
export type VariationOptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VariationOptions to delete
     */
    where?: Prisma.VariationOptionWhereInput;
    /**
     * Limit how many VariationOptions to delete.
     */
    limit?: number;
};
/**
 * VariationOption.votes
 */
export type VariationOption$votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * VariationOption without action
 */
export type VariationOptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=VariationOption.d.ts.map