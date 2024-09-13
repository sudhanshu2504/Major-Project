import { pgTable, serial, varchar, json, boolean, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const courseList = pgTable("courseList", {
	id: serial("id").primaryKey().notNull(),
	courseId: varchar("courseId").notNull(),
	name: varchar("name").notNull(),
	category: varchar("category").notNull(),
	level: varchar("level").notNull(),
	courseOutput: json("courseOutput").notNull(),
	createdBy: varchar("createdBy").notNull(),
	username: varchar("username"),
	userProfileImage: varchar("userProfileImage"),
	includeVideo: varchar("includeVideo").default('Yes').notNull(),
	courseBanner: varchar("courseBanner").default('/placeholder.png'),
	publish: boolean("publish").default(false),
});

export const chapters = pgTable("chapters", {
	id: serial("id").primaryKey().notNull(),
	courseid: varchar("courseid").notNull(),
	chapterId: integer("chapterId").notNull(),
	content: json("content").notNull(),
	videoId: varchar("videoId").notNull(),
});