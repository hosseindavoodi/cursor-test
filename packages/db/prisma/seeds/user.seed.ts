import { PrismaClient } from "../../generated/prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  const adminRole = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
      description: "Full system administrator access",
      Permission: {
        create: [
          {
            action: "manage",
            subject: "all",
            reason: "Admin has full access to all resources",
          },
        ],
      },
    },
  });

  // Create Moderator Role with limited permissions
  const moderatorRole = await prisma.role.upsert({
    where: { name: "moderator" },
    update: {},
    create: {
      name: "moderator",
      description: "Content moderation access",
      Permission: {
        create: [
          {
            action: "read",
            subject: "all",
            conditions: {
              userId: { $eq: "$id" },
            },
            reason: "Moderators can view all content",
          },
          {
            action: "update",
            subject: "Post",
            reason: "Moderators can edit posts",
          },
          {
            action: "delete",
            subject: "Post",
            reason: "Moderators can delete posts",
          },
          {
            action: "update",
            subject: "Comment",
            reason: "Moderators can edit comments",
          },
          {
            action: "delete",
            subject: "Comment",
            reason: "Moderators can delete comments",
          },
          {
            action: "read",
            subject: "User",
            reason: "Moderators can view user profiles",
          },
        ],
      },
    },
  });

  // Create User Role with basic permissions
  const userRole = await prisma.role.upsert({
    where: { name: "user" },
    update: {},
    create: {
      name: "user",
      description: "Standard user access",
      Permission: {
        create: [],
      },
    },
  });

  console.log("✅ Roles and permissions created");

  // Create default admin user
  const hashedPassword = await bcrypt.hash("12345678", 10);
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      password: hashedPassword,
      isActive: true,
      UserRole: {
        create: {
          roleId: adminRole.id,
        },
      },
    },
  });

  // Create default moderator user
  const moderatorPassword = await bcrypt.hash("moderator123", 10);
  const moderatorUser = await prisma.user.upsert({
    where: { email: "moderator@example.com" },
    update: {},
    create: {
      email: "moderator@example.com",
      password: moderatorPassword,
      isActive: true,
      UserRole: {
        create: {
          roleId: moderatorRole.id,
        },
      },
    },
  });

  // Create default regular user
  const regularUserPassword = await bcrypt.hash("user123", 10);
  const regularUser = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      password: regularUserPassword,
      isActive: true,
      UserRole: {
        create: {
          roleId: userRole.id,
        },
      },
    },
  });

  console.log("✅ Default users created");

  console.log("\n🎉 Database seeded successfully!");
  console.log("\n👤 Default users created:");
  console.log("📧 Admin: admin@example.com (password: admin123)");
  console.log("📧 Moderator: moderator@example.com (password: moderator123)");
  console.log("📧 User: user@example.com (password: user123)");

  console.log("\n🔐 Roles created:");
  console.log("- Admin: Full system access");
  console.log("- Moderator: Content moderation access");
  console.log("- User: Standard user access");
  console.log("- Guest: Public read-only access");
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
