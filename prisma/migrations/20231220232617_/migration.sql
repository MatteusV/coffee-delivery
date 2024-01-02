-- CreateTable
CREATE TABLE "success" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "zip_code" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "complement" TEXT NOT NULL,

    CONSTRAINT "success_pkey" PRIMARY KEY ("id")
);
