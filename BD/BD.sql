/*
 Navicat Premium Data Transfer

 Source Server         : Local PostqreSQL
 Source Server Type    : PostgreSQL
 Source Server Version : 150003 (150003)
 Source Host           : localhost:5432
 Source Catalog        : shop_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150003 (150003)
 File Encoding         : 65001

 Date: 12/10/2024 10:43:15
*/


-- ----------------------------
-- Table structure for client_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."client_info";
CREATE TABLE "public"."client_info" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "address" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "actual" bool NOT NULL DEFAULT true,
  "municipalityId" uuid
)
;

-- ----------------------------
-- Records of client_info
-- ----------------------------
INSERT INTO "public"."client_info" VALUES ('71147411-9208-4038-a752-14cf3bc37bbd', '2024-08-18 13:44:25.293086', '2024-08-18 16:27:28.576', '2024-08-18 13:44:25.293086', 'SSSS Pérez Garcia', 'Full Name', 'jusan.peeere2z@example.com', '123 Calle Falsa', 't', '1b60ba38-3428-4a29-83d4-5041b323b872');

-- ----------------------------
-- Table structure for configuracion
-- ----------------------------
DROP TABLE IF EXISTS "public"."configuracion";
CREATE TABLE "public"."configuracion" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "sellCurrencyId" uuid,
  "deliveryCurrencyId" uuid
)
;

-- ----------------------------
-- Records of configuracion
-- ----------------------------
INSERT INTO "public"."configuracion" VALUES ('49da26ef-7c4b-47bb-9f2f-758a7af8553b', '2024-08-09 13:00:19.648', '2024-08-09 13:00:19.648', NULL, 'a0d6e224-ffd3-4a46-b47d-1eb045558d1a', 'a0d6e224-ffd3-4a46-b47d-1eb045558d1a');

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS "public"."country";
CREATE TABLE "public"."country" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "code" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "numericCode" int4
)
;

-- ----------------------------
-- Records of country
-- ----------------------------
INSERT INTO "public"."country" VALUES ('f618c283-9308-4934-817f-e7e70b866f3d', '2024-08-09 11:05:02.928', '2024-08-09 11:05:02.928', NULL, 'España', 'País ubicado en el sur de Europa', 't', 'ES', 724);
INSERT INTO "public"."country" VALUES ('e4fba214-e975-4111-8b6c-370c696a2615', '2024-08-10 22:16:20.093', '2024-08-10 22:16:20.093', NULL, 'Cuba', 'País ubicado en América', 't', 'CU', 53);
INSERT INTO "public"."country" VALUES ('9798a194-29e7-4a90-8a39-d3062303498d', '2024-08-10 22:16:20.093', '2024-08-10 22:16:20.093', NULL, 'Estados Unidos', 'País ubicado en América', 't', 'USA', 1);
INSERT INTO "public"."country" VALUES ('785f528a-e90a-4168-8d00-08cb7e76edc0', '2024-10-12 09:25:37.168128', '2024-10-12 13:20:44.229', NULL, 'Cubas', 'País ubicado en América', 't', 'UA', 2);

-- ----------------------------
-- Table structure for currency
-- ----------------------------
DROP TABLE IF EXISTS "public"."currency";
CREATE TABLE "public"."currency" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "currency" varchar(3) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of currency
-- ----------------------------
INSERT INTO "public"."currency" VALUES ('a0d6e224-ffd3-4a46-b47d-1eb045558d1a', '2024-08-09 12:47:41.814', '2024-08-09 12:47:41.815', NULL, 'US Dollar', 'US Dollar', 'USD');
INSERT INTO "public"."currency" VALUES ('bd49bd70-e6de-42b4-8444-ac702638a52c', '2024-10-12 14:08:17.226', '2024-10-12 14:08:17.226', NULL, 'xperience', 'Canadian Dollar', 'XP');
INSERT INTO "public"."currency" VALUES ('ea9a561a-e956-4b8c-a9af-36dea211997d', '2024-10-12 10:21:09.854963', '2024-08-09 14:30:47.349', NULL, 'Canadian Dollar', 'Canadian Dollar', 'CD');

-- ----------------------------
-- Table structure for deliveries
-- ----------------------------
DROP TABLE IF EXISTS "public"."deliveries";
CREATE TABLE "public"."deliveries" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "price" numeric(10,2) NOT NULL,
  "municipalityOriginId" uuid,
  "municipalityDestinyId" uuid
)
;

-- ----------------------------
-- Records of deliveries
-- ----------------------------
INSERT INTO "public"."deliveries" VALUES ('18f30345-cd6b-4230-ac39-1e896c9f0409', '2024-08-25 23:36:03.998', '2024-08-25 23:36:03.998', NULL, 25.50, '7032ad41-507e-4205-a0a1-315d31bb0ac4', '1b60ba38-3428-4a29-83d4-5041b323b872');
INSERT INTO "public"."deliveries" VALUES ('41e787cd-535b-4584-aad7-958381f9d71e', '2024-10-12 14:08:17.226', '2024-10-12 14:08:17.226', NULL, 49.99, '881abc09-ccad-43ee-a05f-6de78935d25a', '7032ad41-507e-4205-a0a1-315d31bb0ac4');

-- ----------------------------
-- Table structure for delivery_state
-- ----------------------------
DROP TABLE IF EXISTS "public"."delivery_state";
CREATE TABLE "public"."delivery_state" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of delivery_state
-- ----------------------------
INSERT INTO "public"."delivery_state" VALUES ('bdd7ad91-1cd0-4e42-82f6-15e420f19e5d', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Enviada', 'Enviada');
INSERT INTO "public"."delivery_state" VALUES ('77fd331c-70d2-47a6-bc17-65cd167e9d13', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Recibida', 'Recibida');
INSERT INTO "public"."delivery_state" VALUES ('3aba83a9-41c5-4d7e-831d-80fdda888415', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Rechazada', 'Rechazada');
INSERT INTO "public"."delivery_state" VALUES ('ce6b4846-6e09-4c4b-8d0f-5ac96d7e7256', '2024-08-26 22:11:31', '2024-08-26 22:11:38', NULL, 'Reservado', 'Reservado');

-- ----------------------------
-- Table structure for municipality
-- ----------------------------
DROP TABLE IF EXISTS "public"."municipality";
CREATE TABLE "public"."municipality" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "province_id" uuid,
  "latitude" float8 NOT NULL DEFAULT '0'::double precision,
  "longitude" float8 NOT NULL DEFAULT '0'::double precision
)
;

-- ----------------------------
-- Records of municipality
-- ----------------------------
INSERT INTO "public"."municipality" VALUES ('3643f12d-a39f-43fd-a1c6-35ac626aceb6', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Isla de la Juventud', 'Isla de la Juventud', 't', '0013a561-bf2d-417c-90d5-edc00b919242', 0, 0);
INSERT INTO "public"."municipality" VALUES ('881abc09-ccad-43ee-a05f-6de78935d25a', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Nueva Gerona', 'Nueva Gerona', 't', '0013a561-bf2d-417c-90d5-edc00b919242', 0, 0);
INSERT INTO "public"."municipality" VALUES ('7032ad41-507e-4205-a0a1-315d31bb0ac4', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Santa Fé', 'Santa Fé', 't', '0013a561-bf2d-417c-90d5-edc00b919242', 0, 0);
INSERT INTO "public"."municipality" VALUES ('68c3eeb3-5624-46bd-a660-fb6f0db12ed4', '2024-10-12 14:00:33.002', '2024-10-12 14:00:33.003', NULL, 'La GUA', 'La Demajagua', 't', '0013a561-bf2d-417c-90d5-edc00b919242', 0, 0);
INSERT INTO "public"."municipality" VALUES ('1b60ba38-3428-4a29-83d4-5041b323b872', '2024-10-12 10:04:02.350607', '2024-08-11 16:56:55.05', NULL, 'La wau', 'La wau', 't', '0013a561-bf2d-417c-90d5-edc00b919242', 0, 0);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS "public"."order";
CREATE TABLE "public"."order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "noOrden" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "totalProductsPrices" numeric(10,2) NOT NULL,
  "fechaOrder" varchar(10) COLLATE "pg_catalog"."default",
  "shopId" uuid,
  "deliveryId" uuid,
  "orderStateId" uuid,
  "totalPrice" numeric(10,2) NOT NULL,
  "fechaEntrega" varchar(10) COLLATE "pg_catalog"."default",
  "toDelivery" bool NOT NULL DEFAULT true,
  "deliveryStateId" uuid
)
;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO "public"."order" VALUES ('d0dd1bd6-0014-47cd-be2c-825c9b99a59e', '2024-08-26 14:18:36.346655', '2024-08-26 18:00:03.972', NULL, 'Glorieta-2024-0002', 2174.92, '26', '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '18f30345-cd6b-4230-ac39-1e896c9f0409', '34ef12a0-79bd-4078-80c2-33fae602225c', 25.50, NULL, 't', NULL);
INSERT INTO "public"."order" VALUES ('37332f09-271e-46d1-aa5a-7ba0bb80d216', '2024-08-26 21:56:37.599324', '2024-08-26 20:18:11.924', NULL, 'Glorieta-2024-0003', 2174.92, '26', '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '18f30345-cd6b-4230-ac39-1e896c9f0409', '34ef12a0-79bd-4078-80c2-33fae602225c', 25.50, NULL, 't', NULL);
INSERT INTO "public"."order" VALUES ('a296a5ff-3819-4106-802b-5a42ad625641', '2024-08-26 22:13:08.753', '2024-08-27 02:13:02.829', NULL, 'Glorieta-2024-0004', 2174.92, '26', '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '18f30345-cd6b-4230-ac39-1e896c9f0409', '34ef12a0-79bd-4078-80c2-33fae602225c', 25.50, NULL, 't', NULL);
INSERT INTO "public"."order" VALUES ('9b1aef4b-0f8d-4fe2-a5cd-01923f49b6dd', '2024-08-26 22:13:41.461186', '2024-08-27 02:13:02.829', NULL, 'Glorieta-2024-0005', 2089.92, '26', '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '18f30345-cd6b-4230-ac39-1e896c9f0409', '34ef12a0-79bd-4078-80c2-33fae602225c', 25.50, NULL, 't', NULL);

-- ----------------------------
-- Table structure for order_product_delivery
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_product_delivery";
CREATE TABLE "public"."order_product_delivery" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "amountProduct" int4,
  "orderId" uuid,
  "shopSectionProductId" uuid
)
;

-- ----------------------------
-- Records of order_product_delivery
-- ----------------------------
INSERT INTO "public"."order_product_delivery" VALUES ('b6a2f69f-a341-4613-bac1-69e7b45032e1', '2024-08-26 18:00:03.972', '2024-08-26 18:00:03.972', NULL, 5, 'd0dd1bd6-0014-47cd-be2c-825c9b99a59e', '6b972c6c-f6cc-4d53-bf25-c479b64246cf');
INSERT INTO "public"."order_product_delivery" VALUES ('5dac6aeb-b6f1-48a3-adfd-13fcf7aa1166', '2024-08-26 18:00:03.972', '2024-08-26 18:00:03.972', NULL, 3, 'd0dd1bd6-0014-47cd-be2c-825c9b99a59e', 'c824a9ee-5c9a-49df-8b4f-9ea9a5a5690d');
INSERT INTO "public"."order_product_delivery" VALUES ('2d671761-fbfe-400c-960d-748b929a3bbc', '2024-08-26 20:18:11.924', '2024-08-26 20:18:11.924', NULL, 5, '37332f09-271e-46d1-aa5a-7ba0bb80d216', '6b972c6c-f6cc-4d53-bf25-c479b64246cf');
INSERT INTO "public"."order_product_delivery" VALUES ('3a27adbf-b4d2-4286-b474-b8eff7fd4e23', '2024-08-26 20:18:11.924', '2024-08-26 20:18:11.924', NULL, 3, '37332f09-271e-46d1-aa5a-7ba0bb80d216', 'c824a9ee-5c9a-49df-8b4f-9ea9a5a5690d');
INSERT INTO "public"."order_product_delivery" VALUES ('fe65d27f-b813-462f-8056-d75d9a6116fe', '2024-08-27 02:13:02.829', '2024-08-27 02:13:02.829', NULL, 5, 'a296a5ff-3819-4106-802b-5a42ad625641', '6b972c6c-f6cc-4d53-bf25-c479b64246cf');
INSERT INTO "public"."order_product_delivery" VALUES ('0c6b82d4-817c-4b9b-9e50-de6a690117d2', '2024-08-27 02:13:02.829', '2024-08-27 02:13:02.829', NULL, 3, 'a296a5ff-3819-4106-802b-5a42ad625641', 'c824a9ee-5c9a-49df-8b4f-9ea9a5a5690d');
INSERT INTO "public"."order_product_delivery" VALUES ('8fc9fb32-3544-4391-9378-5d400db33d4c', '2024-08-27 02:13:02.829', '2024-08-27 02:13:02.829', NULL, 6, '9b1aef4b-0f8d-4fe2-a5cd-01923f49b6dd', '6b972c6c-f6cc-4d53-bf25-c479b64246cf');
INSERT INTO "public"."order_product_delivery" VALUES ('247fafb7-3263-482a-a857-4891513cf8c2', '2024-08-27 02:13:02.829', '2024-08-27 02:13:02.829', NULL, 2, '9b1aef4b-0f8d-4fe2-a5cd-01923f49b6dd', 'c824a9ee-5c9a-49df-8b4f-9ea9a5a5690d');

-- ----------------------------
-- Table structure for order_states
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_states";
CREATE TABLE "public"."order_states" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of order_states
-- ----------------------------
INSERT INTO "public"."order_states" VALUES ('34ef12a0-79bd-4078-80c2-33fae602225c', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Solicitada', 'Solicitada');
INSERT INTO "public"."order_states" VALUES ('2f3d3a2b-7389-4237-ac1f-2016d25a2b37', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Reservada', 'Solicitada');
INSERT INTO "public"."order_states" VALUES ('8ec42fd4-f202-4cc2-99d9-aceaa0a67969', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Enviada', 'Enviada');
INSERT INTO "public"."order_states" VALUES ('8e6a996e-7feb-4dd7-a528-026988d0238f', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Entregada', 'Entregada');
INSERT INTO "public"."order_states" VALUES ('64c96f8a-1a58-48bb-9928-9edc0fbdce1a', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Recibida', 'Recibida');
INSERT INTO "public"."order_states" VALUES ('cd1402e4-8a76-4d48-8281-2671aa6ab44e', '2024-08-10 22:31:40.409', '2024-08-10 22:31:40.409', NULL, 'Rechazada', 'Rechazada');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS "public"."product";
CREATE TABLE "public"."product" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "photo" text COLLATE "pg_catalog"."default" NOT NULL,
  "marca" varchar COLLATE "pg_catalog"."default",
  "modelo" varchar COLLATE "pg_catalog"."default",
  "price" numeric(10,2),
  "caracteristicas" json
)
;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO "public"."product" VALUES ('624d56fd-2886-4551-bfaa-f869c7ac00ce', '2024-08-09 16:34:26.571', '2024-08-09 16:34:26.571', NULL, 'Smartphone', 'A high-end smartphone with 128GB storage.', '56b02137-8b0c-4793-95b1-d5247e05a9d7.png', NULL, NULL, NULL, NULL);
INSERT INTO "public"."product" VALUES ('5bd78930-e0cd-4ef1-8934-3a0b29037839', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'Olla de presión', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('1bd5779d-9937-4ee7-830d-ad424c4a3bb6', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'Olla de cocción al vapor', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('98a0c284-7ca1-427f-bfc7-57eae107b520', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'Olla arrocera', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('cd4cfad2-08d9-44bd-a18f-3116961dcd52', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'ventilador', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('c55a9a7d-9add-484c-a698-16598791d57f', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'Laptop', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('9753955a-05ba-4764-aed0-228137e12515', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'cocina electrica', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('d47f7e1f-edde-4f7b-ae30-ae04b2cfbc14', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'cocina de inducción', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('c835c09a-434b-43ad-8a86-88b929c04bcd', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'TV Plano', 'A brief description of the product.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==', 'Nayl', 'KAKA', NULL, NULL);
INSERT INTO "public"."product" VALUES ('b19be0d6-7f0c-457d-bc18-a3ac2dc9f217', '2024-08-09 16:40:24.41', '2024-08-09 16:40:24.41', NULL, 'Audífonos', 'A high-end smartphone with 128GB storage.', '/products/49b7fb64-7a46-47ac-a0fb-e8ccf2d87ef3.png', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS "public"."province";
CREATE TABLE "public"."province" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "country_id" uuid
)
;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO "public"."province" VALUES ('493bd6ef-5d34-424f-97a1-020232d4b7c6', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Pinar del Río', 'Pinar del Río', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('58d47a3c-c8fe-45b6-a806-b884d027d3ba', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Artemisa', 'Artemisa', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('d2586829-9351-4440-a836-c45e55febbd0', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'La Habana', 'La Habana', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('a7c613bb-f7f7-420c-ac6d-ee7f37b2408c', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Mayabeque', 'Mayabeque', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('82181c73-c963-4d0c-8444-7973008b939c', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Matanzas', 'Matanzas', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('2e0d3a19-0688-44b1-b4eb-81acd65ed3de', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Cienfuegos', 'Cienfuegos', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('a5c98d63-36a0-4647-90d8-cc8ea991fc72', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Villa Clara', 'Villa Clara', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('0cd74a99-b491-4301-9eea-1a858e6fd9fb', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Sancti Spíritus', 'Sancti Spíritus', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('b09e9418-5a57-4340-8b9a-b23802a51fc6', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Ciego de Ávila', 'Ciego de Ávila', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('7ca70eda-b8e2-4f02-af72-aebb8bf4d618', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Camagüey', 'Camagüey', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('944592c9-1874-4456-81a4-820741e4ab36', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Las Tunas', 'Las Tunas', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('8c1a3643-a398-47fb-a940-737f4235110e', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Granma', 'Granma', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('074740ef-25f7-4f0e-96b6-35add88f10f9', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Holguín', 'Holguín', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('6071ca56-423f-4a53-9618-553e3d5780dc', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Santiago de Cuba', 'Santiago de Cuba', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('f130258c-9615-4302-8e12-b3a5235915d2', '2024-08-11 16:56:55.05', '2024-08-11 16:56:55.05', NULL, 'Guantánamo', 'Guantánamo', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('e27254e8-04cf-4fd4-9e3b-3c65d0deb091', '2024-10-12 09:41:28.499486', '2024-10-12 13:29:14.554', NULL, 'Isla  Juventud', 'Isla de la Juventud', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');
INSERT INTO "public"."province" VALUES ('0013a561-bf2d-417c-90d5-edc00b919242', '2024-10-12 09:43:28.546512', '2024-08-11 16:56:55.05', NULL, 'Guantánavmo', 'Isla de la Juventud', 't', 'e4fba214-e975-4111-8b6c-370c696a2615');

-- ----------------------------
-- Table structure for reject_order
-- ----------------------------
DROP TABLE IF EXISTS "public"."reject_order";
CREATE TABLE "public"."reject_order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "rejectProductAmount" int4 NOT NULL,
  "rejectProductPrice" numeric(10,2) NOT NULL,
  "orderProductDeliveryId" uuid
)
;

-- ----------------------------
-- Records of reject_order
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO "public"."roles" VALUES ('dc3ab524-d911-4f8a-93a6-5ab0a524f2bc', '2024-08-27 10:48:00', '2024-08-27 10:48:05', NULL, 'Admin', 'Administrador Informático');
INSERT INTO "public"."roles" VALUES ('c1ffc1e7-1674-4a13-a1c9-58021562013d', '2024-08-27 10:48:44', '2024-08-27 10:48:50', NULL, 'Administrador', 'Propietario');
INSERT INTO "public"."roles" VALUES ('19b84991-0646-4016-8a4d-33113997a057', '2024-08-27 10:49:30', '2024-08-27 10:49:35', NULL, 'Gestor de Ventas', 'Gestor de ventas');

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."sections";
CREATE TABLE "public"."sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true
)
;

-- ----------------------------
-- Records of sections
-- ----------------------------
INSERT INTO "public"."sections" VALUES ('a9505fa2-573f-4b64-8fe3-f38524600a8c', '2024-08-09 19:18:04.149', '2024-08-09 19:18:04.149', NULL, 'Electronica', 'Tow ok', 't');
INSERT INTO "public"."sections" VALUES ('b978b246-b914-4a90-8c2a-f06673e0786f', '2024-08-15 20:23:52.783', '2024-08-15 20:23:52.783', NULL, 'Juguetería', 'Juguetería', 't');
INSERT INTO "public"."sections" VALUES ('0eb5d255-14d6-46c4-b552-c77b2e4b9ca5', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'lavandería', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('cdcc1afc-dc32-473f-b2a4-475d9404b41f', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'X', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('3945dfe0-0fa5-4489-a496-4a0f942b900e', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'Goza', 'Tow ok', 't');
INSERT INTO "public"."sections" VALUES ('f37ba77b-44db-45b6-99e0-49ae7dfe8eae', '2024-08-18 14:06:18.171134', '2024-08-18 17:53:07.676', NULL, 'new one', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('98d5a1e5-b133-4e06-8ffb-95986dbd6867', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '1', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('6b06bdc0-e7d1-462a-aef1-aeb68610be7e', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('a065b322-d96f-45d2-9bc0-787780036a1d', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '3', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('e5239f0f-3775-4d09-b0a0-624058771d07', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '4', 'lavandería', 't');
INSERT INTO "public"."sections" VALUES ('c48daba7-7276-4280-9eb5-3816321885ea', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '5', 'lavandería', 't');

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop";
CREATE TABLE "public"."shop" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "address" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "municipalityId" uuid,
  "photo" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO "public"."shop" VALUES ('286ecc4d-a757-486d-8513-f8ab9ee8bb75', '2024-08-09 19:12:44.186', '2024-08-09 19:12:44.186', NULL, 'Ceell', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joel@gmail.com', 'joel@gmail.com', NULL, NULL);
INSERT INTO "public"."shop" VALUES ('2c46e27a-cec1-4279-b443-c7abc34d1e99', '2024-08-09 19:12:44.186', '2024-08-09 19:12:44.186', NULL, 'Cecila', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joel@gmail.com', 'joel@gmail.com', NULL, NULL);
INSERT INTO "public"."shop" VALUES ('94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', '2024-08-09 19:21:12.901', '2024-08-09 19:21:12.901', NULL, 'Cecilano', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joel@gmail.com', 'joel@gmail.com', NULL, NULL);
INSERT INTO "public"."shop" VALUES ('519a8843-1f00-41e5-8916-0cc806ecdf33', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'Maisí', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joelSilva@gmail.com', 'joel@gmail.com', NULL, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXLAAAAABJRU5ErkJggg==');
INSERT INTO "public"."shop" VALUES ('a70ecc92-ad02-4a1b-ae72-a8271b7c5157', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'Camaguey', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joelSilava@gmail.com', 'joel@gmail.com', '1b60ba38-3428-4a29-83d4-5041b323b872', '/tiendas/aff21be8-5d19-4aaa-96a0-94981733cf5c.png');
INSERT INTO "public"."shop" VALUES ('ac02216c-2f7d-4026-80a3-2418d064e60c', '2024-08-18 14:03:15.144244', '2024-08-18 17:53:07.676', '2024-08-18 14:03:15.144244', 'Only', 'A high-end smartphone with 128GB storage.', '+5353865826', 'joelSilava@gmail.com', 'joel@gmail.com', '1b60ba38-3428-4a29-83d4-5041b323b872', '/tiendas/f454caf0-ade9-4f5c-a35c-bcc47c2b2780.png');
INSERT INTO "public"."shop" VALUES ('a043be6b-dce9-4088-b0ca-4baa4ac531bb', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'The One', 'To test', '+5353865826', 'joelSilava@gmail.com', 'joel@gmail.com', '1b60ba38-3428-4a29-83d4-5041b323b872', '/tiendas/6885734d-e2d2-4c0c-9597-827d2ebe1f18.png');
INSERT INTO "public"."shop" VALUES ('2939ccf3-1a58-4968-a12a-218a77246667', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, 'The Two', 'To test', '+5353865826', 'joelSilava@gmail.com', 'joel@gmail.com', '1b60ba38-3428-4a29-83d4-5041b323b872', '/tiendas/ef8e219f-234f-4c51-828f-cc9c23561951.png');

-- ----------------------------
-- Table structure for shop_section_products
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop_section_products";
CREATE TABLE "public"."shop_section_products" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "existence" int4 NOT NULL,
  "shopSectionId" uuid,
  "productId" uuid
)
;

-- ----------------------------
-- Records of shop_section_products
-- ----------------------------
INSERT INTO "public"."shop_section_products" VALUES ('89286b49-eb29-4e64-ac71-581cb0e311e4', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, 100, '5599082f-d020-495a-ba5b-559a3bce0112', 'd47f7e1f-edde-4f7b-ae30-ae04b2cfbc14');
INSERT INTO "public"."shop_section_products" VALUES ('2528eda3-d637-4ac5-b3ef-90b9a68c666e', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, 50, 'b9afbe2b-7c1e-41fa-a260-ff21c8c7b3f4', 'd47f7e1f-edde-4f7b-ae30-ae04b2cfbc14');
INSERT INTO "public"."shop_section_products" VALUES ('6b972c6c-f6cc-4d53-bf25-c479b64246cf', '2024-08-26 22:13:41.457888', '2024-08-25 15:39:38.215', NULL, 74, '5599082f-d020-495a-ba5b-559a3bce0112', 'c835c09a-434b-43ad-8a86-88b929c04bcd');
INSERT INTO "public"."shop_section_products" VALUES ('c824a9ee-5c9a-49df-8b4f-9ea9a5a5690d', '2024-08-26 22:13:41.461872', '2024-08-25 15:39:38.215', NULL, 39, 'b9afbe2b-7c1e-41fa-a260-ff21c8c7b3f4', 'c835c09a-434b-43ad-8a86-88b929c04bcd');

-- ----------------------------
-- Table structure for shop_sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop_sections";
CREATE TABLE "public"."shop_sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "shopId" uuid,
  "sectionId" uuid
)
;

-- ----------------------------
-- Records of shop_sections
-- ----------------------------
INSERT INTO "public"."shop_sections" VALUES ('170607f0-0aef-4e8d-8e7b-149303cbb324', '2024-08-09 19:21:12.901', '2024-08-09 19:21:12.901', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'a9505fa2-573f-4b64-8fe3-f38524600a8c');
INSERT INTO "public"."shop_sections" VALUES ('cad1be56-5028-44f2-ae54-afaf595b10c8', '2024-08-15 20:23:52.783', '2024-08-15 20:23:52.783', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('e426b2a3-0e85-4d18-a582-c5559ea88673', '2024-08-15 20:23:52.783', '2024-08-15 20:23:52.783', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('70d75598-b0a1-4c68-80d6-24c56764c4d4', '2024-08-15 20:23:52.783', '2024-08-15 20:23:52.783', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('b8ba0cce-d6cc-4d56-a6df-e57011979dc7', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('8911c5d2-5065-4621-a43f-75da87e94964', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('b124f1d6-890f-4530-b9be-11c93b389d89', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('054950d9-4396-48c2-9a63-7adbd4d58bfd', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'a9505fa2-573f-4b64-8fe3-f38524600a8c');
INSERT INTO "public"."shop_sections" VALUES ('7697678f-9677-4c88-8017-9df1d4173b6a', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('d27d16ec-78e4-4b56-8f04-b4690df68623', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('ef58459f-13eb-41d8-9b1d-60fe9462829a', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('6d2fd28f-5b22-4a95-ac4a-4856e9297026', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('bc12773a-d163-44c2-87fe-7307a94e8092', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('c3f7c295-a359-4597-8fbf-dd6877af14b7', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('bee2e5e4-e3f8-4241-a1a8-c05d0058eca2', '2024-08-15 20:24:25.896', '2024-08-15 20:24:25.896', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('d24c869b-dc64-4dc4-8030-d8cfc7335305', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'ac02216c-2f7d-4026-80a3-2418d064e60c', 'a9505fa2-573f-4b64-8fe3-f38524600a8c');
INSERT INTO "public"."shop_sections" VALUES ('8eb13076-fbb0-40f2-968c-b4894b0dd2f4', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'ac02216c-2f7d-4026-80a3-2418d064e60c', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('2b5797ab-53cc-4c21-ae99-5abfa6f4bb8a', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'ac02216c-2f7d-4026-80a3-2418d064e60c', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('c554cc45-68b3-44bb-93ef-8c23ef9558ea', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'ac02216c-2f7d-4026-80a3-2418d064e60c', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('440dad65-9b29-44ba-b12f-0a376aaf50cf', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('1300c5b1-4057-45e7-b8eb-1754995e27a6', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('83a2d86b-8a13-4e2d-b1cf-984c318d0a30', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('61f216c6-e842-41cd-88a9-e0a900909be5', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('638abf67-a1bb-44ee-ae35-2848ba79c719', '2024-08-18 17:53:07.676', '2024-08-18 17:53:07.676', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('3dc9d555-889c-4f7a-a269-c039cd27b79e', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('374527c7-3ed2-428a-9c56-c3b2304c10cd', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('70e37c01-abb8-4964-bf5e-9cb9514412d3', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('afc370a4-252d-498d-8486-1662b59700f2', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('dbd56e40-e7f2-4e18-96bd-6959c119203f', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('675b6953-c0f0-431c-8917-ac9062f7ea7b', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('1a2dc9da-4a41-420c-88ad-6b8f694664f4', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('4c49bc00-cfe4-4566-9a76-9f94c0bd38fd', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('7b3d253b-b1bc-4e73-b8ad-0aee2a1b4ba6', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('76113a4c-8de6-4ded-a8ac-fc070724e3f1', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('c80015c2-f1e4-4e62-af6d-106204b1c5f5', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('003c8b7b-779e-41c0-94b6-d0165f7707d8', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('57d52fa4-3c89-4699-ad30-cc42f1f8157a', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('206b764d-bcbf-4d84-a029-48307d96cead', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('8644c581-b849-447e-a2a3-d37a4c1f3a07', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('0052c0c8-060a-4a57-8285-05a4f740b772', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('99f7cf87-897a-43ec-94ed-a07abba25b83', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('b345b6bf-9ebf-4873-b2ab-78a1b9e6d916', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('b8ced3ae-6dd2-4dcc-80f2-aeaf46910590', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('3f3a791c-9a48-4a71-9cf3-17e7f5b2c27b', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('e50d84a6-6432-4ba3-8391-67d25db90a71', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '286ecc4d-a757-486d-8513-f8ab9ee8bb75', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('f40d9f56-01ea-4ff9-9e55-088dc7c49227', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '2c46e27a-cec1-4279-b443-c7abc34d1e99', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('678f899f-8bce-40fc-8bd8-6c10a294b986', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '94f3d4ba-6bc8-4723-8046-cbf0c0532bb3', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('01959dfc-a206-47c5-8343-d023ce027029', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, '519a8843-1f00-41e5-8916-0cc806ecdf33', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('8a5cdd15-fe54-49e3-9500-9becca8ab348', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a70ecc92-ad02-4a1b-ae72-a8271b7c5157', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('81f35aa9-41b6-41b4-917d-d34d9ae0dd48', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'a9505fa2-573f-4b64-8fe3-f38524600a8c');
INSERT INTO "public"."shop_sections" VALUES ('4ca1f6df-1ee3-4a48-b92f-d3f94f6443b0', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('3ec77930-0d9e-43a5-aca1-e7b5376c2fc8', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('aec33a09-b78a-453d-a5b8-c4632a61945d', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', '3945dfe0-0fa5-4489-a496-4a0f942b900e');
INSERT INTO "public"."shop_sections" VALUES ('e710a56b-bdba-446f-b934-7ec5bcd8449c', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('bda97d4c-10c4-4782-b158-a32527a5834c', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('c05e0111-d18a-4b6a-a006-1fe56d808df9', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('280835a9-08f7-4a40-9e9f-ddb8ac2b9e02', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('5599082f-d020-495a-ba5b-559a3bce0112', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('1e905caa-922e-484c-92c7-cb03baa78085', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('c7b009fb-2c54-4dde-95fc-a818eba7d397', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'a9505fa2-573f-4b64-8fe3-f38524600a8c');
INSERT INTO "public"."shop_sections" VALUES ('192f6390-537a-4996-a8c7-0719afaff177', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'c48daba7-7276-4280-9eb5-3816321885ea');
INSERT INTO "public"."shop_sections" VALUES ('c1be11af-7eef-4e20-b6af-7b56c909943b', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'b978b246-b914-4a90-8c2a-f06673e0786f');
INSERT INTO "public"."shop_sections" VALUES ('2c440128-f5a4-4316-b23a-2247d8d9f0a3', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', '3945dfe0-0fa5-4489-a496-4a0f942b900e');
INSERT INTO "public"."shop_sections" VALUES ('458e0c40-650c-41fa-a02c-3ea08c56778d', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'cdcc1afc-dc32-473f-b2a4-475d9404b41f');
INSERT INTO "public"."shop_sections" VALUES ('164ad9d6-2386-4e4a-818a-5676a4c61c05', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', '0eb5d255-14d6-46c4-b552-c77b2e4b9ca5');
INSERT INTO "public"."shop_sections" VALUES ('d29a0566-27ab-4efe-befd-9b74791118f9', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'e5239f0f-3775-4d09-b0a0-624058771d07');
INSERT INTO "public"."shop_sections" VALUES ('222716f0-ed8f-44b4-bfae-454fe4003bd7', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'f37ba77b-44db-45b6-99e0-49ae7dfe8eae');
INSERT INTO "public"."shop_sections" VALUES ('77f01dae-447a-4b2e-b468-ffff28ac8f87', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');
INSERT INTO "public"."shop_sections" VALUES ('b4f4191c-7ae9-4774-836f-098f3eaae966', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', 'a065b322-d96f-45d2-9bc0-787780036a1d');
INSERT INTO "public"."shop_sections" VALUES ('b9afbe2b-7c1e-41fa-a260-ff21c8c7b3f4', '2024-08-25 15:39:38.215', '2024-08-25 15:39:38.215', NULL, '2939ccf3-1a58-4968-a12a-218a77246667', '6b06bdc0-e7d1-462a-aef1-aeb68610be7e');
INSERT INTO "public"."shop_sections" VALUES ('ed7a270a-f95b-48b8-a78f-daf25bc299c8', '2024-08-24 21:08:22.083', '2024-08-24 21:08:22.083', NULL, 'a043be6b-dce9-4088-b0ca-4baa4ac531bb', '98d5a1e5-b133-4e06-8ffb-95986dbd6867');

-- ----------------------------
-- Table structure for tipo-cambio
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo-cambio";
CREATE TABLE "public"."tipo-cambio" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "fecha" date NOT NULL,
  "exchangeRate" numeric(10,4) NOT NULL,
  "exchangeCurrencyId" uuid,
  "baseCurrencyId" uuid
)
;

-- ----------------------------
-- Records of tipo-cambio
-- ----------------------------
INSERT INTO "public"."tipo-cambio" VALUES ('5f388968-6d22-42ae-b83d-317a36a58829', '2024-08-09 22:36:30.739', '2024-08-09 22:36:30.74', NULL, '2024-10-10', 10.5656, 'ea9a561a-e956-4b8c-a9af-36dea211997d', 'a0d6e224-ffd3-4a46-b47d-1eb045558d1a');

-- ----------------------------
-- Table structure for traza
-- ----------------------------
DROP TABLE IF EXISTS "public"."traza";
CREATE TABLE "public"."traza" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "ip" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "url" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "nombreControlador" varchar COLLATE "pg_catalog"."default",
  "traza" json NOT NULL
)
;

-- ----------------------------
-- Records of traza
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-10-12 14:34:13.4'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "hash" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default",
  "username" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar COLLATE "pg_catalog"."default",
  "phone" varchar COLLATE "pg_catalog"."default",
  "roleId" uuid
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES ('6e3ad09d-e250-4e36-b051-fcf2960265dd', '2024-08-27 23:45:04.711', '2024-08-27 23:45:04.711', NULL, 'Joel', '$argon2id$v=19$m=65536,t=3,p=4$wT5nJYHhjCVzRuIz/OyGxg$PerS6YJRJkMqTT7mr7wsFQA7rG1GDRBCZpvv6wnXKqg', 'joel@gmail.com', 'El Super Admin', 'joel@gmail.com', 'Silva García', '+5353865826', 'dc3ab524-d911-4f8a-93a6-5ab0a524f2bc');
INSERT INTO "public"."users" VALUES ('5e24297e-5d5d-48a7-b41e-167afbf811ea', '2024-08-28 02:02:47.047', '2024-08-28 02:02:47.048', NULL, 'Joel', '$argon2id$v=19$m=65536,t=3,p=4$FLMkk7dr2OUx1y+TZPjb4w$yfDYep42X9RX3012BvuBLRfVpJPplxJN8ooTpeGvQGw', 'joe@gmail.com', NULL, 'joe@gmail.com', NULL, NULL, 'dc3ab524-d911-4f8a-93a6-5ab0a524f2bc');

-- ----------------------------
-- Function structure for uuid_generate_v1
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v1mc
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1mc"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1mc"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1mc'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v3
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v3"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v3"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v3'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v4
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v4"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v4"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v4'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v5
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v5"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v5"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v5'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_nil
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_nil"();
CREATE OR REPLACE FUNCTION "public"."uuid_nil"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_nil'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_dns
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_dns"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_dns"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_dns'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_oid
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_oid"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_oid"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_oid'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_url
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_url"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_url"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_url'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_x500
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_x500"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_x500"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_x500'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- View structure for tienda_seccion_producto_view
-- ----------------------------
DROP VIEW IF EXISTS "public"."tienda_seccion_producto_view";
CREATE VIEW "public"."tienda_seccion_producto_view" AS  SELECT s.id AS shop_id,
    s.name AS shop_name,
    s.description AS shop_description,
    s.phone AS shop_phone,
    s.email AS shop_email,
    s.address AS shop_address,
    s."municipalityId" AS shop_municipalityid,
    s.photo AS shop_photo,
    ss.id AS shop_sections_id,
    sec.id AS sections_id,
    sec.name AS sections_name,
    sec.description AS sections_description,
    sp.id AS shop_section_products_id,
    sp.existence AS shop_section_products_existence,
    p.id AS product_id,
    p.name AS product_name,
    p.price AS shop_section_products_price,
    p.caracteristicas AS product_carcteristicas,
    p.description AS product_description,
    p.photo AS product_photo,
    p.marca AS product_marca,
    p.modelo AS product_modelo
   FROM shop s
     JOIN shop_sections ss ON s.id = ss."shopId"
     JOIN sections sec ON ss."sectionId" = sec.id
     JOIN shop_section_products sp ON ss.id = sp."shopSectionId"
     JOIN product p ON sp."productId" = p.id
  WHERE sec."isActive" = true;

-- ----------------------------
-- Primary Key structure for table client_info
-- ----------------------------
ALTER TABLE "public"."client_info" ADD CONSTRAINT "PK_09bdc12b41c346ad56afee8d6cc" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table configuracion
-- ----------------------------
ALTER TABLE "public"."configuracion" ADD CONSTRAINT "PK_42615c5e55d08746ae5accfc295" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table country
-- ----------------------------
ALTER TABLE "public"."country" ADD CONSTRAINT "UQ_8ff4c23dc9a3f3856555bd86186" UNIQUE ("code");

-- ----------------------------
-- Primary Key structure for table country
-- ----------------------------
ALTER TABLE "public"."country" ADD CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table currency
-- ----------------------------
ALTER TABLE "public"."currency" ADD CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table deliveries
-- ----------------------------
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "UQ_49f7d325bf199574e8552703bc3" UNIQUE ("municipalityOriginId", "municipalityDestinyId");

-- ----------------------------
-- Primary Key structure for table deliveries
-- ----------------------------
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "PK_a6ef225c5c5f0974e503bfb731f" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table delivery_state
-- ----------------------------
ALTER TABLE "public"."delivery_state" ADD CONSTRAINT "PK_fa1e595e0095e8e181dcd6bea7d" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table municipality
-- ----------------------------
ALTER TABLE "public"."municipality" ADD CONSTRAINT "PK_281ad341f20df7c41b83a182e2a" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table order
-- ----------------------------
ALTER TABLE "public"."order" ADD CONSTRAINT "UQ_7be3a8166a4f2de44c29095b75a" UNIQUE ("noOrden");

-- ----------------------------
-- Primary Key structure for table order
-- ----------------------------
ALTER TABLE "public"."order" ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table order_product_delivery
-- ----------------------------
ALTER TABLE "public"."order_product_delivery" ADD CONSTRAINT "PK_f58569ac8d043fe312cc735893d" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table order_states
-- ----------------------------
ALTER TABLE "public"."order_states" ADD CONSTRAINT "uk_name_order_states" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table order_states
-- ----------------------------
ALTER TABLE "public"."order_states" ADD CONSTRAINT "PK_9e86d699d5df7cb8a62ba50ef25" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table product
-- ----------------------------
ALTER TABLE "public"."product" ADD CONSTRAINT "uk_name_product" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table product
-- ----------------------------
ALTER TABLE "public"."product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table province
-- ----------------------------
ALTER TABLE "public"."province" ADD CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table reject_order
-- ----------------------------
ALTER TABLE "public"."reject_order" ADD CONSTRAINT "PK_24ae2a14ffe0400656061fdb04c" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sections
-- ----------------------------
ALTER TABLE "public"."sections" ADD CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table shop
-- ----------------------------
ALTER TABLE "public"."shop" ADD CONSTRAINT "uk_name_shop" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table shop
-- ----------------------------
ALTER TABLE "public"."shop" ADD CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table shop_section_products
-- ----------------------------
ALTER TABLE "public"."shop_section_products" ADD CONSTRAINT "PK_307bfd0d66405d5df99f50457f5" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table shop_sections
-- ----------------------------
ALTER TABLE "public"."shop_sections" ADD CONSTRAINT "PK_5476617bcfa2a83b21b53e028ff" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tipo-cambio
-- ----------------------------
ALTER TABLE "public"."tipo-cambio" ADD CONSTRAINT "PK_8b86009cb9ab82b809859cd533c" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table traza
-- ----------------------------
ALTER TABLE "public"."traza" ADD CONSTRAINT "PK_9c9e2df5aa69e52f3ef752c801c" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table client_info
-- ----------------------------
ALTER TABLE "public"."client_info" ADD CONSTRAINT "FK_afe4fe6eefc585cd042c59f3462" FOREIGN KEY ("municipalityId") REFERENCES "public"."municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table configuracion
-- ----------------------------
ALTER TABLE "public"."configuracion" ADD CONSTRAINT "FK_0ccfbbadc99f3e334cbf80ad19c" FOREIGN KEY ("deliveryCurrencyId") REFERENCES "public"."currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."configuracion" ADD CONSTRAINT "FK_13f87e57e06a366b42545d85728" FOREIGN KEY ("sellCurrencyId") REFERENCES "public"."currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table deliveries
-- ----------------------------
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "FK_509f78549f0772b90627cefa466" FOREIGN KEY ("municipalityDestinyId") REFERENCES "public"."municipality" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "FK_7a3c2d255249f8f93310d2273b8" FOREIGN KEY ("municipalityOriginId") REFERENCES "public"."municipality" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table municipality
-- ----------------------------
ALTER TABLE "public"."municipality" ADD CONSTRAINT "FK_483c51de02d90702f5acb0ddfcd" FOREIGN KEY ("province_id") REFERENCES "public"."province" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table order
-- ----------------------------
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_312e84147a507a76ea2aed85621" FOREIGN KEY ("orderStateId") REFERENCES "public"."order_states" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_318cc4bdeb61d336e3a01f4b767" FOREIGN KEY ("shopId") REFERENCES "public"."shop" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_48897c14423c10dd5017c69cafd" FOREIGN KEY ("deliveryStateId") REFERENCES "public"."delivery_state" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_ec67a0143b254c3577087b20d3a" FOREIGN KEY ("deliveryId") REFERENCES "public"."deliveries" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table order_product_delivery
-- ----------------------------
ALTER TABLE "public"."order_product_delivery" ADD CONSTRAINT "FK_338c2b32bfe7f0c04e7f4ec8f25" FOREIGN KEY ("shopSectionProductId") REFERENCES "public"."shop_section_products" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order_product_delivery" ADD CONSTRAINT "FK_74888797270fb5ad57a0252b142" FOREIGN KEY ("orderId") REFERENCES "public"."order" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table province
-- ----------------------------
ALTER TABLE "public"."province" ADD CONSTRAINT "FK_e1a4eb156aedf1714d673d13941" FOREIGN KEY ("country_id") REFERENCES "public"."country" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table reject_order
-- ----------------------------
ALTER TABLE "public"."reject_order" ADD CONSTRAINT "FK_ec7aed9a32ed668943651bde25c" FOREIGN KEY ("orderProductDeliveryId") REFERENCES "public"."order_product_delivery" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table shop
-- ----------------------------
ALTER TABLE "public"."shop" ADD CONSTRAINT "FK_d12416e6ef4a6b73754de9531e7" FOREIGN KEY ("municipalityId") REFERENCES "public"."municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table shop_section_products
-- ----------------------------
ALTER TABLE "public"."shop_section_products" ADD CONSTRAINT "FK_6bdc6c657ff76a47f1af85c3afb" FOREIGN KEY ("productId") REFERENCES "public"."product" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."shop_section_products" ADD CONSTRAINT "FK_eedd10430293553e7436deb34e0" FOREIGN KEY ("shopSectionId") REFERENCES "public"."shop_sections" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table shop_sections
-- ----------------------------
ALTER TABLE "public"."shop_sections" ADD CONSTRAINT "FK_b12d84b3f5c57cba7b5a633bede" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."shop_sections" ADD CONSTRAINT "FK_efd9ef92ff023f3c65cab8ed522" FOREIGN KEY ("shopId") REFERENCES "public"."shop" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table tipo-cambio
-- ----------------------------
ALTER TABLE "public"."tipo-cambio" ADD CONSTRAINT "FK_431cba70a35a48536fa80fccfbc" FOREIGN KEY ("baseCurrencyId") REFERENCES "public"."currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."tipo-cambio" ADD CONSTRAINT "FK_91e62862d1d58cabcaaaf974460" FOREIGN KEY ("exchangeCurrencyId") REFERENCES "public"."currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "public"."roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
