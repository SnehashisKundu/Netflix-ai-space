import { prisma } from "../../lib/prisma.js";

import type {
  CreateVariationInput,
  UpdateVariationInput,
} from "./vr.validation.js";

// ==========================================
// CREATE VARIATION
// ==========================================

export const createVariation = async (
  timelineEventId: string,
  input: CreateVariationInput,
) => {
  const timelineEvent =
    await prisma.timelineEvent.findUnique({
      where: {
        id: timelineEventId,
      },
      select: {
        id: true,
      },
    });

  if (!timelineEvent) {
    throw new Error(
      "TIMELINE_EVENT_NOT_FOUND",
    );
  }

  if (input.isDefault === true) {
    await prisma.variationOption.updateMany({
      where: {
        timelineEventId,
        isDefault: true,
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.variationOption.create({
    data: {
      timelineEventId,
      label: input.label,
      content: input.content,
      locale: input.locale ?? null,
      isDefault:
        input.isDefault ?? false,
    },
  });
};

// ==========================================
// GET ALL VARIATIONS
// ==========================================

export const getVariations = async (
  timelineEventId: string,
) => {
  const timelineEvent =
    await prisma.timelineEvent.findUnique({
      where: {
        id: timelineEventId,
      },
      select: {
        id: true,
      },
    });

  if (!timelineEvent) {
    throw new Error(
      "TIMELINE_EVENT_NOT_FOUND",
    );
  }

  return prisma.variationOption.findMany({
    where: {
      timelineEventId,
    },
    orderBy: [
      {
        isDefault: "desc",
      },
      {
        createdAt: "asc",
      },
    ],
  });
};

// ==========================================
// GET VARIATION BY ID
// ==========================================

export const getVariationById = async (
  timelineEventId: string,
  variationId: string,
) => {
  const variation =
    await prisma.variationOption.findFirst({
      where: {
        id: variationId,
        timelineEventId,
      },
    });

  if (!variation) {
    throw new Error(
      "VARIATION_NOT_FOUND",
    );
  }

  return variation;
};

// ==========================================
// GET LOCALIZED VARIATION
// ==========================================

export const getLocalizedVariation =
  async (
    timelineEventId: string,
    locale: string,
  ) => {
    const timelineEvent =
      await prisma.timelineEvent.findUnique({
        where: {
          id: timelineEventId,
        },
        select: {
          id: true,
        },
      });

    if (!timelineEvent) {
      throw new Error(
        "TIMELINE_EVENT_NOT_FOUND",
      );
    }

    const normalizedLocale =
      locale.trim();

    const variation =
      await prisma.variationOption.findFirst({
        where: {
          timelineEventId,
          locale: {
            equals: normalizedLocale,
            mode: "insensitive",
          },
        },
        orderBy: [
          {
            isDefault: "desc",
          },
          {
            createdAt: "asc",
          },
        ],
      });

    if (!variation) {
      throw new Error(
        "LOCALIZED_VARIATION_NOT_FOUND",
      );
    }

    return variation;
  };

// ==========================================
// UPDATE VARIATION
// ==========================================

export const updateVariation = async (
  timelineEventId: string,
  variationId: string,
  input: UpdateVariationInput,
) => {
  const existingVariation =
    await prisma.variationOption.findFirst({
      where: {
        id: variationId,
        timelineEventId,
      },
      select: {
        id: true,
      },
    });

  if (!existingVariation) {
    throw new Error(
      "VARIATION_NOT_FOUND",
    );
  }

  if (input.isDefault === true) {
    await prisma.variationOption.updateMany({
      where: {
        timelineEventId,
        isDefault: true,
        NOT: {
          id: variationId,
        },
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.variationOption.update({
    where: {
      id: variationId,
    },
    data: {
      ...(input.label !== undefined && {
        label: input.label,
      }),

      ...(input.content !== undefined && {
        content: input.content,
      }),

      ...(input.locale !== undefined && {
        locale: input.locale,
      }),

      ...(input.isDefault !== undefined && {
        isDefault: input.isDefault,
      }),
    },
  });
};

// ==========================================
// DELETE VARIATION
// ==========================================

export const deleteVariation = async (
  timelineEventId: string,
  variationId: string,
) => {
  const existingVariation =
    await prisma.variationOption.findFirst({
      where: {
        id: variationId,
        timelineEventId,
      },
      select: {
        id: true,
      },
    });

  if (!existingVariation) {
    throw new Error(
      "VARIATION_NOT_FOUND",
    );
  }

  await prisma.variationOption.delete({
    where: {
      id: variationId,
    },
  });
};