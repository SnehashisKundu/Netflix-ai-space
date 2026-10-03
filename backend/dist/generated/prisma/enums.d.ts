export declare const UserRole: {
    readonly VIEWER: 'VIEWER';
    readonly HOST: 'HOST';
    readonly ADMIN: 'ADMIN';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const TimelineEventType: {
    readonly SCENE: 'SCENE';
    readonly CHARACTER: 'CHARACTER';
    readonly TRIVIA: 'TRIVIA';
    readonly DIALOGUE: 'DIALOGUE';
    readonly LOCATION: 'LOCATION';
    readonly MUSIC: 'MUSIC';
    readonly CUSTOM: 'CUSTOM';
};
export type TimelineEventType = (typeof TimelineEventType)[keyof typeof TimelineEventType];
export declare const WatchSpaceStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly ENDED: 'ENDED';
};
export type WatchSpaceStatus = (typeof WatchSpaceStatus)[keyof typeof WatchSpaceStatus];
export declare const ParticipantRole: {
    readonly HOST: 'HOST';
    readonly PARTICIPANT: 'PARTICIPANT';
};
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];
export declare const InteractionType: {
    readonly VIEW: 'VIEW';
    readonly LIKE: 'LIKE';
    readonly DISLIKE: 'DISLIKE';
    readonly COMPLETE: 'COMPLETE';
    readonly SKIP: 'SKIP';
    readonly WATCH: 'WATCH';
};
export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType];
//# sourceMappingURL=enums.d.ts.map