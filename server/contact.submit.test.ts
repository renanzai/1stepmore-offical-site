import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the database function
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue({ insertId: 1 }),
}));

describe("contact.submit", () => {
  it("should successfully submit contact form with valid data", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.contact.submit({
      name: "John Doe",
      company: "Tech Corp",
      email: "john@example.com",
      consultationType: "content_production",
      message: "I'm interested in your multilingual content production service.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject submission with invalid email", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "John Doe",
        company: "Tech Corp",
        email: "invalid-email",
        consultationType: "content_production",
        message: "I'm interested in your multilingual content production service.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject submission with empty name", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "",
        company: "Tech Corp",
        email: "john@example.com",
        consultationType: "content_production",
        message: "I'm interested in your multilingual content production service.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject submission with message too short", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "John Doe",
        company: "Tech Corp",
        email: "john@example.com",
        consultationType: "content_production",
        message: "Too short",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should accept all valid consultation types", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const types = [
      "content_production",
      "localization_service",
      "strategy_consulting",
      "partner_application",
    ] as const;

    for (const type of types) {
      const result = await caller.contact.submit({
        name: "John Doe",
        company: "Tech Corp",
        email: "john@example.com",
        consultationType: type,
        message: "I'm interested in your services.",
      });

      expect(result).toEqual({ success: true });
    }
  });
});
