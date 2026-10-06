import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WatchSpaceParticipant
 *
 */
export type WatchSpaceParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$WatchSpaceParticipantPayload>;
export type AggregateWatchSpaceParticipant = {
    _count: WatchSpaceParticipantCountAggregateOutputType | null;
    _min: WatchSpaceParticipantMinAggregateOutputType | null;
    _max: WatchSpaceParticipantMaxAggregateOutputType | null;
};
export type WatchSpaceParticipantMinAggregateOutputType = {
    id: string | null;
    watchSpaceId: string | null;
    userId: string | null;
    role: $Enums.ParticipantRole | null;
    joinedAt: Date | null;
    leftAt: Date | null;
};
export type WatchSpaceParticipantMaxAggregateOutputType = {
    id: string | null;
    watchSpaceId: string | null;
    userId: string | null;
    role: $Enums.ParticipantRole | null;
    joinedAt: Date | null;
    leftAt: Date | null;
};
export type WatchSpaceParticipantCountAggregateOutputType = {
    id: number;
    watchSpaceId: number;
    userId: number;
    role: number;
    joinedAt: number;
    leftAt: number;
    _all: number;
};
export type WatchSpaceParticipantMinAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
    leftAt?: true;
};
export type WatchSpaceParticipantMaxAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
    leftAt?: true;
};
export type WatchSpaceParticipantCountAggregateInputType = {
    id?: true;
    watchSpaceId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
    leftAt?: true;
    _all?: true;
};
export type WatchSpaceParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WatchSpaceParticipant to aggregate.
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaceParticipants to fetch.
     */
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithRelationInput | Prisma.WatchSpaceParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WatchSpaceParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaceParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaceParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WatchSpaceParticipants
    **/
    _count?: true | WatchSpaceParticipantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WatchSpaceParticipantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WatchSpaceParticipantMaxAggregateInputType;
};
export type GetWatchSpaceParticipantAggregateType<T extends WatchSpaceParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateWatchSpaceParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWatchSpaceParticipant[P]> : Prisma.GetScalarType<T[P], AggregateWatchSpaceParticipant[P]>;
};
export type WatchSpaceParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WatchSpaceParticipantWhereInput;
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithAggregationInput | Prisma.WatchSpaceParticipantOrderByWithAggregationInput[];
    by: Prisma.WatchSpaceParticipantScalarFieldEnum[] | Prisma.WatchSpaceParticipantScalarFieldEnum;
    having?: Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WatchSpaceParticipantCountAggregateInputType | true;
    _min?: WatchSpaceParticipantMinAggregateInputType;
    _max?: WatchSpaceParticipantMaxAggregateInputType;
};
export type WatchSpaceParticipantGroupByOutputType = {
    id: string;
    watchSpaceId: string;
    userId: string;
    role: $Enums.ParticipantRole;
    joinedAt: Date;
    leftAt: Date | null;
    _count: WatchSpaceParticipantCountAggregateOutputType | null;
    _min: WatchSpaceParticipantMinAggregateOutputType | null;
    _max: WatchSpaceParticipantMaxAggregateOutputType | null;
};
export type GetWatchSpaceParticipantGroupByPayload<T extends WatchSpaceParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WatchSpaceParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WatchSpaceParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WatchSpaceParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WatchSpaceParticipantGroupByOutputType[P]>;
}>>;
export type WatchSpaceParticipantWhereInput = {
    AND?: Prisma.WatchSpaceParticipantWhereInput | Prisma.WatchSpaceParticipantWhereInput[];
    OR?: Prisma.WatchSpaceParticipantWhereInput[];
    NOT?: Prisma.WatchSpaceParticipantWhereInput | Prisma.WatchSpaceParticipantWhereInput[];
    id?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    watchSpaceId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    userId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    role?: Prisma.EnumParticipantRoleFilter<"WatchSpaceParticipant"> | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFilter<"WatchSpaceParticipant"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"WatchSpaceParticipant"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
};
export type WatchSpaceParticipantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    watchSpace?: Prisma.WatchSpaceOrderByWithRelationInput;
};
export type WatchSpaceParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    watchSpaceId_userId?: Prisma.WatchSpaceParticipantWatchSpaceIdUserIdCompoundUniqueInput;
    AND?: Prisma.WatchSpaceParticipantWhereInput | Prisma.WatchSpaceParticipantWhereInput[];
    OR?: Prisma.WatchSpaceParticipantWhereInput[];
    NOT?: Prisma.WatchSpaceParticipantWhereInput | Prisma.WatchSpaceParticipantWhereInput[];
    watchSpaceId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    userId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    role?: Prisma.EnumParticipantRoleFilter<"WatchSpaceParticipant"> | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFilter<"WatchSpaceParticipant"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"WatchSpaceParticipant"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    watchSpace?: Prisma.XOR<Prisma.WatchSpaceScalarRelationFilter, Prisma.WatchSpaceWhereInput>;
}, "id" | "watchSpaceId_userId">;
export type WatchSpaceParticipantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WatchSpaceParticipantCountOrderByAggregateInput;
    _max?: Prisma.WatchSpaceParticipantMaxOrderByAggregateInput;
    _min?: Prisma.WatchSpaceParticipantMinOrderByAggregateInput;
};
export type WatchSpaceParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput | Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput | Prisma.WatchSpaceParticipantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WatchSpaceParticipant"> | string;
    watchSpaceId?: Prisma.StringWithAggregatesFilter<"WatchSpaceParticipant"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"WatchSpaceParticipant"> | string;
    role?: Prisma.EnumParticipantRoleWithAggregatesFilter<"WatchSpaceParticipant"> | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"WatchSpaceParticipant"> | Date | string;
    leftAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WatchSpaceParticipant"> | Date | string | null;
};
export type WatchSpaceParticipantCreateInput = {
    id?: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutParticipationsInput;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutParticipantsInput;
};
export type WatchSpaceParticipantUncheckedCreateInput = {
    id?: string;
    watchSpaceId: string;
    userId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParticipationsNestedInput;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type WatchSpaceParticipantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantCreateManyInput = {
    id?: string;
    watchSpaceId: string;
    userId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantListRelationFilter = {
    every?: Prisma.WatchSpaceParticipantWhereInput;
    some?: Prisma.WatchSpaceParticipantWhereInput;
    none?: Prisma.WatchSpaceParticipantWhereInput;
};
export type WatchSpaceParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WatchSpaceParticipantWatchSpaceIdUserIdCompoundUniqueInput = {
    watchSpaceId: string;
    userId: string;
};
export type WatchSpaceParticipantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type WatchSpaceParticipantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type WatchSpaceParticipantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    watchSpaceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    leftAt?: Prisma.SortOrder;
};
export type WatchSpaceParticipantCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput> | Prisma.WatchSpaceParticipantCreateWithoutUserInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
};
export type WatchSpaceParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput> | Prisma.WatchSpaceParticipantCreateWithoutUserInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
};
export type WatchSpaceParticipantUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput> | Prisma.WatchSpaceParticipantCreateWithoutUserInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyUserInputEnvelope;
    set?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    delete?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    update?: Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutUserInput | Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
};
export type WatchSpaceParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput> | Prisma.WatchSpaceParticipantCreateWithoutUserInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyUserInputEnvelope;
    set?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    delete?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    update?: Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutUserInput | Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
};
export type WatchSpaceParticipantCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput> | Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
};
export type WatchSpaceParticipantUncheckedCreateNestedManyWithoutWatchSpaceInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput> | Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyWatchSpaceInputEnvelope;
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
};
export type WatchSpaceParticipantUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput> | Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    delete?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    update?: Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
};
export type WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceNestedInput = {
    create?: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput> | Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput[] | Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput[];
    connectOrCreate?: Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput[];
    upsert?: Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpsertWithWhereUniqueWithoutWatchSpaceInput[];
    createMany?: Prisma.WatchSpaceParticipantCreateManyWatchSpaceInputEnvelope;
    set?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    disconnect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    delete?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    connect?: Prisma.WatchSpaceParticipantWhereUniqueInput | Prisma.WatchSpaceParticipantWhereUniqueInput[];
    update?: Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpdateWithWhereUniqueWithoutWatchSpaceInput[];
    updateMany?: Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutWatchSpaceInput | Prisma.WatchSpaceParticipantUpdateManyWithWhereWithoutWatchSpaceInput[];
    deleteMany?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
};
export type EnumParticipantRoleFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantRole;
};
export type WatchSpaceParticipantCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
    watchSpace: Prisma.WatchSpaceCreateNestedOneWithoutParticipantsInput;
};
export type WatchSpaceParticipantUncheckedCreateWithoutUserInput = {
    id?: string;
    watchSpaceId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantCreateOrConnectWithoutUserInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput>;
};
export type WatchSpaceParticipantCreateManyUserInputEnvelope = {
    data: Prisma.WatchSpaceParticipantCreateManyUserInput | Prisma.WatchSpaceParticipantCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WatchSpaceParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutUserInput>;
};
export type WatchSpaceParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateWithoutUserInput, Prisma.WatchSpaceParticipantUncheckedUpdateWithoutUserInput>;
};
export type WatchSpaceParticipantUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WatchSpaceParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateManyMutationInput, Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutUserInput>;
};
export type WatchSpaceParticipantScalarWhereInput = {
    AND?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
    OR?: Prisma.WatchSpaceParticipantScalarWhereInput[];
    NOT?: Prisma.WatchSpaceParticipantScalarWhereInput | Prisma.WatchSpaceParticipantScalarWhereInput[];
    id?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    watchSpaceId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    userId?: Prisma.StringFilter<"WatchSpaceParticipant"> | string;
    role?: Prisma.EnumParticipantRoleFilter<"WatchSpaceParticipant"> | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFilter<"WatchSpaceParticipant"> | Date | string;
    leftAt?: Prisma.DateTimeNullableFilter<"WatchSpaceParticipant"> | Date | string | null;
};
export type WatchSpaceParticipantCreateWithoutWatchSpaceInput = {
    id?: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutParticipationsInput;
};
export type WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput = {
    id?: string;
    userId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantCreateOrConnectWithoutWatchSpaceInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput>;
};
export type WatchSpaceParticipantCreateManyWatchSpaceInputEnvelope = {
    data: Prisma.WatchSpaceParticipantCreateManyWatchSpaceInput | Prisma.WatchSpaceParticipantCreateManyWatchSpaceInput[];
    skipDuplicates?: boolean;
};
export type WatchSpaceParticipantUpsertWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedUpdateWithoutWatchSpaceInput>;
    create: Prisma.XOR<Prisma.WatchSpaceParticipantCreateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedCreateWithoutWatchSpaceInput>;
};
export type WatchSpaceParticipantUpdateWithWhereUniqueWithoutWatchSpaceInput = {
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateWithoutWatchSpaceInput, Prisma.WatchSpaceParticipantUncheckedUpdateWithoutWatchSpaceInput>;
};
export type WatchSpaceParticipantUpdateManyWithWhereWithoutWatchSpaceInput = {
    where: Prisma.WatchSpaceParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateManyMutationInput, Prisma.WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceInput>;
};
export type WatchSpaceParticipantCreateManyUserInput = {
    id?: string;
    watchSpaceId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    watchSpace?: Prisma.WatchSpaceUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type WatchSpaceParticipantUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    watchSpaceId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantCreateManyWatchSpaceInput = {
    id?: string;
    userId: string;
    role?: $Enums.ParticipantRole;
    joinedAt?: Date | string;
    leftAt?: Date | string | null;
};
export type WatchSpaceParticipantUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutParticipationsNestedInput;
};
export type WatchSpaceParticipantUncheckedUpdateWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantUncheckedUpdateManyWithoutWatchSpaceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leftAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WatchSpaceParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    leftAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpaceParticipant"]>;
export type WatchSpaceParticipantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    leftAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpaceParticipant"]>;
export type WatchSpaceParticipantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    watchSpaceId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    leftAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["watchSpaceParticipant"]>;
export type WatchSpaceParticipantSelectScalar = {
    id?: boolean;
    watchSpaceId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    leftAt?: boolean;
};
export type WatchSpaceParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "watchSpaceId" | "userId" | "role" | "joinedAt" | "leftAt", ExtArgs["result"]["watchSpaceParticipant"]>;
export type WatchSpaceParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type WatchSpaceParticipantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type WatchSpaceParticipantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    watchSpace?: boolean | Prisma.WatchSpaceDefaultArgs<ExtArgs>;
};
export type $WatchSpaceParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WatchSpaceParticipant";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        watchSpace: Prisma.$WatchSpacePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        watchSpaceId: string;
        userId: string;
        role: $Enums.ParticipantRole;
        joinedAt: Date;
        leftAt: Date | null;
    }, ExtArgs["result"]["watchSpaceParticipant"]>;
    composites: {};
};
export type WatchSpaceParticipantGetPayload<S extends boolean | null | undefined | WatchSpaceParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload, S>;
export type WatchSpaceParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WatchSpaceParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WatchSpaceParticipantCountAggregateInputType | true;
};
export interface WatchSpaceParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WatchSpaceParticipant'];
        meta: {
            name: 'WatchSpaceParticipant';
        };
    };
    /**
     * Find zero or one WatchSpaceParticipant that matches the filter.
     * @param {WatchSpaceParticipantFindUniqueArgs} args - Arguments to find a WatchSpaceParticipant
     * @example
     * // Get one WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchSpaceParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WatchSpaceParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchSpaceParticipantFindUniqueOrThrowArgs} args - Arguments to find a WatchSpaceParticipant
     * @example
     * // Get one WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchSpaceParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WatchSpaceParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantFindFirstArgs} args - Arguments to find a WatchSpaceParticipant
     * @example
     * // Get one WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchSpaceParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WatchSpaceParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantFindFirstOrThrowArgs} args - Arguments to find a WatchSpaceParticipant
     * @example
     * // Get one WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchSpaceParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WatchSpaceParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchSpaceParticipants
     * const watchSpaceParticipants = await prisma.watchSpaceParticipant.findMany()
     *
     * // Get first 10 WatchSpaceParticipants
     * const watchSpaceParticipants = await prisma.watchSpaceParticipant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const watchSpaceParticipantWithIdOnly = await prisma.watchSpaceParticipant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WatchSpaceParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WatchSpaceParticipant.
     * @param {WatchSpaceParticipantCreateArgs} args - Arguments to create a WatchSpaceParticipant.
     * @example
     * // Create one WatchSpaceParticipant
     * const WatchSpaceParticipant = await prisma.watchSpaceParticipant.create({
     *   data: {
     *     // ... data to create a WatchSpaceParticipant
     *   }
     * })
     *
     */
    create<T extends WatchSpaceParticipantCreateArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WatchSpaceParticipants.
     * @param {WatchSpaceParticipantCreateManyArgs} args - Arguments to create many WatchSpaceParticipants.
     * @example
     * // Create many WatchSpaceParticipants
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WatchSpaceParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WatchSpaceParticipants and returns the data saved in the database.
     * @param {WatchSpaceParticipantCreateManyAndReturnArgs} args - Arguments to create many WatchSpaceParticipants.
     * @example
     * // Create many WatchSpaceParticipants
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WatchSpaceParticipants and only return the `id`
     * const watchSpaceParticipantWithIdOnly = await prisma.watchSpaceParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WatchSpaceParticipantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WatchSpaceParticipant.
     * @param {WatchSpaceParticipantDeleteArgs} args - Arguments to delete one WatchSpaceParticipant.
     * @example
     * // Delete one WatchSpaceParticipant
     * const WatchSpaceParticipant = await prisma.watchSpaceParticipant.delete({
     *   where: {
     *     // ... filter to delete one WatchSpaceParticipant
     *   }
     * })
     *
     */
    delete<T extends WatchSpaceParticipantDeleteArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WatchSpaceParticipant.
     * @param {WatchSpaceParticipantUpdateArgs} args - Arguments to update one WatchSpaceParticipant.
     * @example
     * // Update one WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WatchSpaceParticipantUpdateArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WatchSpaceParticipants.
     * @param {WatchSpaceParticipantDeleteManyArgs} args - Arguments to filter WatchSpaceParticipants to delete.
     * @example
     * // Delete a few WatchSpaceParticipants
     * const { count } = await prisma.watchSpaceParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WatchSpaceParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, WatchSpaceParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WatchSpaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchSpaceParticipants
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WatchSpaceParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WatchSpaceParticipants and returns the data updated in the database.
     * @param {WatchSpaceParticipantUpdateManyAndReturnArgs} args - Arguments to update many WatchSpaceParticipants.
     * @example
     * // Update many WatchSpaceParticipants
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WatchSpaceParticipants and only return the `id`
     * const watchSpaceParticipantWithIdOnly = await prisma.watchSpaceParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchSpaceParticipantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WatchSpaceParticipant.
     * @param {WatchSpaceParticipantUpsertArgs} args - Arguments to update or create a WatchSpaceParticipant.
     * @example
     * // Update or create a WatchSpaceParticipant
     * const watchSpaceParticipant = await prisma.watchSpaceParticipant.upsert({
     *   create: {
     *     // ... data to create a WatchSpaceParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchSpaceParticipant we want to update
     *   }
     * })
     */
    upsert<T extends WatchSpaceParticipantUpsertArgs>(args: Prisma.SelectSubset<T, WatchSpaceParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__WatchSpaceParticipantClient<runtime.Types.Result.GetResult<Prisma.$WatchSpaceParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WatchSpaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantCountArgs} args - Arguments to filter WatchSpaceParticipants to count.
     * @example
     * // Count the number of WatchSpaceParticipants
     * const count = await prisma.watchSpaceParticipant.count({
     *   where: {
     *     // ... the filter for the WatchSpaceParticipants we want to count
     *   }
     * })
    **/
    count<T extends WatchSpaceParticipantCountArgs>(args?: Prisma.Subset<T, WatchSpaceParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WatchSpaceParticipantCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WatchSpaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchSpaceParticipantAggregateArgs>(args: Prisma.Subset<T, WatchSpaceParticipantAggregateArgs>): Prisma.PrismaPromise<GetWatchSpaceParticipantAggregateType<T>>;
    /**
     * Group by WatchSpaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchSpaceParticipantGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WatchSpaceParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WatchSpaceParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: WatchSpaceParticipantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WatchSpaceParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchSpaceParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WatchSpaceParticipant model
     */
    readonly fields: WatchSpaceParticipantFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WatchSpaceParticipant.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WatchSpaceParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the WatchSpaceParticipant model
 */
export interface WatchSpaceParticipantFieldRefs {
    readonly id: Prisma.FieldRef<"WatchSpaceParticipant", 'String'>;
    readonly watchSpaceId: Prisma.FieldRef<"WatchSpaceParticipant", 'String'>;
    readonly userId: Prisma.FieldRef<"WatchSpaceParticipant", 'String'>;
    readonly role: Prisma.FieldRef<"WatchSpaceParticipant", 'ParticipantRole'>;
    readonly joinedAt: Prisma.FieldRef<"WatchSpaceParticipant", 'DateTime'>;
    readonly leftAt: Prisma.FieldRef<"WatchSpaceParticipant", 'DateTime'>;
}
/**
 * WatchSpaceParticipant findUnique
 */
export type WatchSpaceParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WatchSpaceParticipant to fetch.
     */
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
};
/**
 * WatchSpaceParticipant findUniqueOrThrow
 */
export type WatchSpaceParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WatchSpaceParticipant to fetch.
     */
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
};
/**
 * WatchSpaceParticipant findFirst
 */
export type WatchSpaceParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WatchSpaceParticipant to fetch.
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaceParticipants to fetch.
     */
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithRelationInput | Prisma.WatchSpaceParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WatchSpaceParticipants.
     */
    cursor?: Prisma.WatchSpaceParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaceParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaceParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaceParticipants.
     */
    distinct?: Prisma.WatchSpaceParticipantScalarFieldEnum | Prisma.WatchSpaceParticipantScalarFieldEnum[];
};
/**
 * WatchSpaceParticipant findFirstOrThrow
 */
export type WatchSpaceParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WatchSpaceParticipant to fetch.
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaceParticipants to fetch.
     */
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithRelationInput | Prisma.WatchSpaceParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WatchSpaceParticipants.
     */
    cursor?: Prisma.WatchSpaceParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaceParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaceParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaceParticipants.
     */
    distinct?: Prisma.WatchSpaceParticipantScalarFieldEnum | Prisma.WatchSpaceParticipantScalarFieldEnum[];
};
/**
 * WatchSpaceParticipant findMany
 */
export type WatchSpaceParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which WatchSpaceParticipants to fetch.
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WatchSpaceParticipants to fetch.
     */
    orderBy?: Prisma.WatchSpaceParticipantOrderByWithRelationInput | Prisma.WatchSpaceParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WatchSpaceParticipants.
     */
    cursor?: Prisma.WatchSpaceParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WatchSpaceParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WatchSpaceParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WatchSpaceParticipants.
     */
    distinct?: Prisma.WatchSpaceParticipantScalarFieldEnum | Prisma.WatchSpaceParticipantScalarFieldEnum[];
};
/**
 * WatchSpaceParticipant create
 */
export type WatchSpaceParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a WatchSpaceParticipant.
     */
    data: Prisma.XOR<Prisma.WatchSpaceParticipantCreateInput, Prisma.WatchSpaceParticipantUncheckedCreateInput>;
};
/**
 * WatchSpaceParticipant createMany
 */
export type WatchSpaceParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchSpaceParticipants.
     */
    data: Prisma.WatchSpaceParticipantCreateManyInput | Prisma.WatchSpaceParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WatchSpaceParticipant createManyAndReturn
 */
export type WatchSpaceParticipantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpaceParticipant
     */
    select?: Prisma.WatchSpaceParticipantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpaceParticipant
     */
    omit?: Prisma.WatchSpaceParticipantOmit<ExtArgs> | null;
    /**
     * The data used to create many WatchSpaceParticipants.
     */
    data: Prisma.WatchSpaceParticipantCreateManyInput | Prisma.WatchSpaceParticipantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceParticipantIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * WatchSpaceParticipant update
 */
export type WatchSpaceParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a WatchSpaceParticipant.
     */
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateInput, Prisma.WatchSpaceParticipantUncheckedUpdateInput>;
    /**
     * Choose, which WatchSpaceParticipant to update.
     */
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
};
/**
 * WatchSpaceParticipant updateMany
 */
export type WatchSpaceParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchSpaceParticipants.
     */
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateManyMutationInput, Prisma.WatchSpaceParticipantUncheckedUpdateManyInput>;
    /**
     * Filter which WatchSpaceParticipants to update
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * Limit how many WatchSpaceParticipants to update.
     */
    limit?: number;
};
/**
 * WatchSpaceParticipant updateManyAndReturn
 */
export type WatchSpaceParticipantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchSpaceParticipant
     */
    select?: Prisma.WatchSpaceParticipantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WatchSpaceParticipant
     */
    omit?: Prisma.WatchSpaceParticipantOmit<ExtArgs> | null;
    /**
     * The data used to update WatchSpaceParticipants.
     */
    data: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateManyMutationInput, Prisma.WatchSpaceParticipantUncheckedUpdateManyInput>;
    /**
     * Filter which WatchSpaceParticipants to update
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * Limit how many WatchSpaceParticipants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WatchSpaceParticipantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * WatchSpaceParticipant upsert
 */
export type WatchSpaceParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the WatchSpaceParticipant to update in case it exists.
     */
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
    /**
     * In case the WatchSpaceParticipant found by the `where` argument doesn't exist, create a new WatchSpaceParticipant with this data.
     */
    create: Prisma.XOR<Prisma.WatchSpaceParticipantCreateInput, Prisma.WatchSpaceParticipantUncheckedCreateInput>;
    /**
     * In case the WatchSpaceParticipant was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WatchSpaceParticipantUpdateInput, Prisma.WatchSpaceParticipantUncheckedUpdateInput>;
};
/**
 * WatchSpaceParticipant delete
 */
export type WatchSpaceParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which WatchSpaceParticipant to delete.
     */
    where: Prisma.WatchSpaceParticipantWhereUniqueInput;
};
/**
 * WatchSpaceParticipant deleteMany
 */
export type WatchSpaceParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WatchSpaceParticipants to delete
     */
    where?: Prisma.WatchSpaceParticipantWhereInput;
    /**
     * Limit how many WatchSpaceParticipants to delete.
     */
    limit?: number;
};
/**
 * WatchSpaceParticipant without action
 */
export type WatchSpaceParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=WatchSpaceParticipant.d.ts.map