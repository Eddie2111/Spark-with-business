// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
  }
  
  model User {
    id                 String   @id @default(auto()) @map("_id") @db.ObjectId
    serial             String   @unique
    name               String
    email              String   @unique
    password           String
    companyName        String   @default(" ")
    posts              Post[]   @relation("userPosts") 
    companyDescription String   @default(" ")
    companyAddress     String   @default(" ")
    companyWebsite     String   @unique @default(" ")
    companyEmail       String   @unique @default(" ")
    profilePicture     String   @default(" ")
    coverImage         String   @default(" ")
    featuredImages     String[] @default([])
    linkedin           String   @unique @default(" ")
    facebook           String   @unique @default(" ")
    twitter            String   @unique @default(" ")
    phone              String   @unique @default(" ")
    loginLocation      String[] @default([])
  }
  
  model Post {
    id          String   @id @default(auto()) @map("_id") @db.ObjectId
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
    serial      String   @unique
    author      User?    @relation("userPosts", fields: [serial], references: [serial])
    title       String
    description String
    image       String
    date        String
    tags        String[]
    likes       Int
    comments    Json
    shares      Int
    link        String
  }
  