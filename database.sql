CREATE DATABASE "giphy_search_favorites";

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);


-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "favorites"(
    "id" SERIAL PRIMARY KEY,
    "category_id" INT REFERENCES "category",
    "giphy_link" VARCHAR(250)
);


-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
