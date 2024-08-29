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

 Date: 28/08/2024 22:33:28
*/



-- ----------------------------
-- Table structure for client_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."client_info";
CREATE TABLE "public"."client_info" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
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
-- Table structure for configuracion
-- ----------------------------
DROP TABLE IF EXISTS "public"."configuracion";
CREATE TABLE "public"."configuracion" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "sellCurrencyId" uuid,
  "deliveryCurrencyId" uuid
)
;

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS "public"."country";
CREATE TABLE "public"."country" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "code" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "numericCode" int4
)
;

-- ----------------------------
-- Table structure for currency
-- ----------------------------
DROP TABLE IF EXISTS "public"."currency";
CREATE TABLE "public"."currency" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "currency" varchar(3) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for deliveries
-- ----------------------------
DROP TABLE IF EXISTS "public"."deliveries";
CREATE TABLE "public"."deliveries" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "price" numeric(10,2) NOT NULL,
  "municipalityOriginId" uuid,
  "municipalityDestinyId" uuid
)
;

-- ----------------------------
-- Table structure for delivery_state
-- ----------------------------
DROP TABLE IF EXISTS "public"."delivery_state";
CREATE TABLE "public"."delivery_state" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for municipality
-- ----------------------------
DROP TABLE IF EXISTS "public"."municipality";
CREATE TABLE "public"."municipality" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "province_id" uuid,
  "latitude" float8 NOT NULL DEFAULT '0'::double precision,
  "longitude" float8 NOT NULL DEFAULT '0'::double precision
)
;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS "public"."order";
CREATE TABLE "public"."order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "noOrden" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "deliveryTotalPrice" numeric(10,2) NOT NULL,
  "totalProductsPrices" numeric(10,2) NOT NULL,
  "fechaOrder" varchar(10) COLLATE "pg_catalog"."default",
  "shopId" uuid,
  "deliveryId" uuid,
  "orderStateId" uuid,
  "totalPrice" numeric(10,2) NOT NULL
)
;

-- ----------------------------
-- Table structure for order_product_delivery
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_product_delivery";
CREATE TABLE "public"."order_product_delivery" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "amountProduct" int4,
  "productOrderPrice" numeric(10,2),
  "fechaEntrega" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "toDelivery" bool NOT NULL DEFAULT true,
  "orderId" uuid,
  "shopSectionProductId" uuid,
  "deliveryStateId" uuid
)
;

-- ----------------------------
-- Table structure for order_states
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_states";
CREATE TABLE "public"."order_states" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS "public"."product";
CREATE TABLE "public"."product" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "photo" text COLLATE "pg_catalog"."default" NOT NULL,
  "marca" varchar COLLATE "pg_catalog"."default",
  "modelo" varchar COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS "public"."province";
CREATE TABLE "public"."province" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "country_id" uuid
)
;

-- ----------------------------
-- Table structure for reject_order
-- ----------------------------
DROP TABLE IF EXISTS "public"."reject_order";
CREATE TABLE "public"."reject_order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "rejectProductAmount" int4 NOT NULL,
  "rejectProductPrice" numeric(10,2) NOT NULL,
  "orderProductDeliveryId" uuid
)
;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."sections";
CREATE TABLE "public"."sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false
)
;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop";
CREATE TABLE "public"."shop" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
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
-- Table structure for shop_section_products
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop_section_products";
CREATE TABLE "public"."shop_section_products" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "existence" int4 NOT NULL,
  "shopSectionId" uuid,
  "productId" uuid,
  "price" numeric(10,2),
  "caracteristicas" json
)
;

-- ----------------------------
-- Table structure for shop_sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."shop_sections";
CREATE TABLE "public"."shop_sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "shopId" uuid,
  "sectionId" uuid
)
;

-- ----------------------------
-- Table structure for tipo-cambio
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo-cambio";
CREATE TABLE "public"."tipo-cambio" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "fecha" date NOT NULL,
  "exchangeRate" numeric(10,4) NOT NULL,
  "exchangeCurrencyId" uuid,
  "baseCurrencyId" uuid
)
;

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
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-28 02:04:10.881'::timestamp without time zone,
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
    sp.caracteristicas AS product_carcteristicas,
    sp.existence AS shop_section_products_existence,
    sp.price AS shop_section_products_price,
    p.id AS product_id,
    p.name AS product_name,
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
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "FK_509f78549f0772b90627cefa466" FOREIGN KEY ("municipalityDestinyId") REFERENCES "public"."municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "FK_7a3c2d255249f8f93310d2273b8" FOREIGN KEY ("municipalityOriginId") REFERENCES "public"."municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table municipality
-- ----------------------------
ALTER TABLE "public"."municipality" ADD CONSTRAINT "FK_483c51de02d90702f5acb0ddfcd" FOREIGN KEY ("province_id") REFERENCES "public"."province" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table order
-- ----------------------------
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_312e84147a507a76ea2aed85621" FOREIGN KEY ("orderStateId") REFERENCES "public"."order_states" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_318cc4bdeb61d336e3a01f4b767" FOREIGN KEY ("shopId") REFERENCES "public"."shop" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order" ADD CONSTRAINT "FK_ec67a0143b254c3577087b20d3a" FOREIGN KEY ("deliveryId") REFERENCES "public"."deliveries" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table order_product_delivery
-- ----------------------------
ALTER TABLE "public"."order_product_delivery" ADD CONSTRAINT "FK_338c2b32bfe7f0c04e7f4ec8f25" FOREIGN KEY ("shopSectionProductId") REFERENCES "public"."shop_section_products" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."order_product_delivery" ADD CONSTRAINT "FK_370f0e14daadc685490647c55ca" FOREIGN KEY ("deliveryStateId") REFERENCES "public"."delivery_state" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
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
