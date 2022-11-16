/*
  Warnings:

  - A unique constraint covering the columns `[stripeCheckoutSessionId]` on the table `CheckoutSession` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CheckoutSession_stripeCheckoutSessionId_key` ON `CheckoutSession`(`stripeCheckoutSessionId`);
