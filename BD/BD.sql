CREATE TABLE "client_info" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "address" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "actual" bool NOT NULL DEFAULT true,
  "municipalityId" uuid,
  CONSTRAINT "PK_09bdc12b41c346ad56afee8d6cc" PRIMARY KEY ("id")
);
ALTER TABLE "client_info" OWNER TO "root";

CREATE TABLE "configuracion" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "sellCurrencyId" uuid,
  "deliveryCurrencyId" uuid,
  CONSTRAINT "PK_42615c5e55d08746ae5accfc295" PRIMARY KEY ("id")
);
ALTER TABLE "configuracion" OWNER TO "root";

CREATE TABLE "country" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "code" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "numericCode" int4,
  CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"),
  CONSTRAINT "UQ_8ff4c23dc9a3f3856555bd86186" UNIQUE ("code")
);
ALTER TABLE "country" OWNER TO "root";

CREATE TABLE "currency" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "currency" varchar(3) COLLATE "pg_catalog"."default" NOT NULL,
  CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id")
);
ALTER TABLE "currency" OWNER TO "root";

CREATE TABLE "deliveries" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "price" numeric(10,2) NOT NULL,
  "municipalityOriginId" uuid,
  "municipalityDestinyId" uuid,
  "deliveryStateId" uuid,
  CONSTRAINT "PK_a6ef225c5c5f0974e503bfb731f" PRIMARY KEY ("id"),
  CONSTRAINT "UQ_49f7d325bf199574e8552703bc3" UNIQUE ("municipalityOriginId", "municipalityDestinyId")
);
ALTER TABLE "deliveries" OWNER TO "root";

CREATE TABLE "delivery_state" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  CONSTRAINT "PK_fa1e595e0095e8e181dcd6bea7d" PRIMARY KEY ("id")
);
ALTER TABLE "delivery_state" OWNER TO "root";

CREATE TABLE "municipality" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "province_id" uuid,
  "latitude" float8 NOT NULL DEFAULT '0'::double precision,
  "longitude" float8 NOT NULL DEFAULT '0'::double precision,
  CONSTRAINT "PK_281ad341f20df7c41b83a182e2a" PRIMARY KEY ("id")
);
ALTER TABLE "municipality" OWNER TO "root";

CREATE TABLE "order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "noOrden" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "deliveryTravels" int4 NOT NULL,
  "deliveryTotalPrice" numeric(10,2) NOT NULL,
  "totalProductsPrices" numeric(10,2) NOT NULL,
  "totalOrderPrice" numeric(10,2) NOT NULL,
  "fechaOrder" varchar(10) COLLATE "pg_catalog"."default",
  "shopId" uuid,
  "deliveryId" uuid,
  "orderStateId" uuid,
  CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
);
ALTER TABLE "order" OWNER TO "root";

CREATE TABLE "order_product_delivery" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "amountProduct" int4,
  "productOrderPrice" numeric(10,2),
  "fechaEntrega" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "toDelivery" bool NOT NULL DEFAULT true,
  "orderId" uuid,
  "shopSectionProductId" uuid,
  "deliveryStateId" uuid,
  CONSTRAINT "PK_f58569ac8d043fe312cc735893d" PRIMARY KEY ("id")
);
ALTER TABLE "order_product_delivery" OWNER TO "root";

CREATE TABLE "order_states" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  CONSTRAINT "PK_9e86d699d5df7cb8a62ba50ef25" PRIMARY KEY ("id"),
  CONSTRAINT "uk_name_order_states" UNIQUE ("name")
);
ALTER TABLE "order_states" OWNER TO "root";

CREATE TABLE "product" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "photo" text COLLATE "pg_catalog"."default" NOT NULL,
  "marca" varchar COLLATE "pg_catalog"."default",
  "modelo" varchar COLLATE "pg_catalog"."default",
  CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"),
  CONSTRAINT "uk_name_product" UNIQUE ("name")
);
ALTER TABLE "product" OWNER TO "root";

CREATE TABLE "province" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  "country_id" uuid,
  CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id")
);
ALTER TABLE "province" OWNER TO "root";

CREATE TABLE "reject_order" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "rejectProductAmount" int4 NOT NULL,
  "rejectProductPrice" numeric(10,2) NOT NULL,
  "orderProductDeliveryId" uuid,
  CONSTRAINT "PK_24ae2a14ffe0400656061fdb04c" PRIMARY KEY ("id")
);
ALTER TABLE "reject_order" OWNER TO "root";

CREATE TABLE "roles" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
);
ALTER TABLE "roles" OWNER TO "root";

CREATE TABLE "sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "isUsed" bool NOT NULL DEFAULT false,
  CONSTRAINT "PK_f9749dd3bffd880a497d007e450" PRIMARY KEY ("id")
);
ALTER TABLE "sections" OWNER TO "root";

CREATE TABLE "shop" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "address" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "municipalityId" uuid,
  "photo" text COLLATE "pg_catalog"."default",
  CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id"),
  CONSTRAINT "uk_name_shop" UNIQUE ("name")
);
ALTER TABLE "shop" OWNER TO "root";

CREATE TABLE "shop_section_products" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "existence" int4 NOT NULL,
  "shopSectionId" uuid,
  "productId" uuid,
  "price" numeric(10,2),
  "caracteristicas" json,
  CONSTRAINT "PK_307bfd0d66405d5df99f50457f5" PRIMARY KEY ("id")
);
ALTER TABLE "shop_section_products" OWNER TO "root";

CREATE TABLE "shop_sections" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "shopId" uuid,
  "sectionId" uuid,
  CONSTRAINT "PK_5476617bcfa2a83b21b53e028ff" PRIMARY KEY ("id")
);
ALTER TABLE "shop_sections" OWNER TO "root";

CREATE TABLE "tipo-cambio" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "fecha" date NOT NULL,
  "exchangeRate" numeric(10,4) NOT NULL,
  "exchangeCurrencyId" uuid,
  "baseCurrencyId" uuid,
  CONSTRAINT "PK_8b86009cb9ab82b809859cd533c" PRIMARY KEY ("id")
);
ALTER TABLE "tipo-cambio" OWNER TO "root";

CREATE TABLE "traza" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "ip" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "url" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "nombreControlador" varchar COLLATE "pg_catalog"."default",
  "traza" json NOT NULL,
  CONSTRAINT "PK_9c9e2df5aa69e52f3ef752c801c" PRIMARY KEY ("id")
);
ALTER TABLE "traza" OWNER TO "root";

CREATE TABLE "user_roles" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "roleId" uuid,
  "userId" uuid,
  CONSTRAINT "PK_8acd5cf26ebd158416f477de799" PRIMARY KEY ("id")
);
ALTER TABLE "user_roles" OWNER TO "root";

CREATE TABLE "users" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "updatedAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "createdAt" timestamp(6) NOT NULL DEFAULT '2024-08-20 09:51:50.987'::timestamp without time zone,
  "_deleted_at" timestamp(6),
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "hash" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar COLLATE "pg_catalog"."default",
  "username" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "lastname" varchar COLLATE "pg_catalog"."default",
  "phone" varchar COLLATE "pg_catalog"."default",
  CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);
ALTER TABLE "users" OWNER TO "root";

ALTER TABLE "client_info" ADD CONSTRAINT "FK_afe4fe6eefc585cd042c59f3462" FOREIGN KEY ("municipalityId") REFERENCES "municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "configuracion" ADD CONSTRAINT "FK_0ccfbbadc99f3e334cbf80ad19c" FOREIGN KEY ("deliveryCurrencyId") REFERENCES "currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "configuracion" ADD CONSTRAINT "FK_13f87e57e06a366b42545d85728" FOREIGN KEY ("sellCurrencyId") REFERENCES "currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "deliveries" ADD CONSTRAINT "FK_4f05dc82cb7185e7a7b38b2b0fd" FOREIGN KEY ("deliveryStateId") REFERENCES "delivery_state" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "deliveries" ADD CONSTRAINT "FK_509f78549f0772b90627cefa466" FOREIGN KEY ("municipalityDestinyId") REFERENCES "municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "deliveries" ADD CONSTRAINT "FK_7a3c2d255249f8f93310d2273b8" FOREIGN KEY ("municipalityOriginId") REFERENCES "municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "municipality" ADD CONSTRAINT "FK_483c51de02d90702f5acb0ddfcd" FOREIGN KEY ("province_id") REFERENCES "province" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "order" ADD CONSTRAINT "FK_312e84147a507a76ea2aed85621" FOREIGN KEY ("orderStateId") REFERENCES "order_states" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "order" ADD CONSTRAINT "FK_318cc4bdeb61d336e3a01f4b767" FOREIGN KEY ("shopId") REFERENCES "shop" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "order" ADD CONSTRAINT "FK_ec67a0143b254c3577087b20d3a" FOREIGN KEY ("deliveryId") REFERENCES "deliveries" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "order_product_delivery" ADD CONSTRAINT "FK_338c2b32bfe7f0c04e7f4ec8f25" FOREIGN KEY ("shopSectionProductId") REFERENCES "shop_section_products" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "order_product_delivery" ADD CONSTRAINT "FK_370f0e14daadc685490647c55ca" FOREIGN KEY ("deliveryStateId") REFERENCES "delivery_state" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "order_product_delivery" ADD CONSTRAINT "FK_74888797270fb5ad57a0252b142" FOREIGN KEY ("orderId") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "province" ADD CONSTRAINT "FK_e1a4eb156aedf1714d673d13941" FOREIGN KEY ("country_id") REFERENCES "country" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "reject_order" ADD CONSTRAINT "FK_ec7aed9a32ed668943651bde25c" FOREIGN KEY ("orderProductDeliveryId") REFERENCES "order_product_delivery" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "shop" ADD CONSTRAINT "FK_d12416e6ef4a6b73754de9531e7" FOREIGN KEY ("municipalityId") REFERENCES "municipality" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "shop_section_products" ADD CONSTRAINT "FK_6bdc6c657ff76a47f1af85c3afb" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "shop_section_products" ADD CONSTRAINT "FK_eedd10430293553e7436deb34e0" FOREIGN KEY ("shopSectionId") REFERENCES "shop_sections" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "shop_sections" ADD CONSTRAINT "FK_b12d84b3f5c57cba7b5a633bede" FOREIGN KEY ("sectionId") REFERENCES "sections" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "shop_sections" ADD CONSTRAINT "FK_efd9ef92ff023f3c65cab8ed522" FOREIGN KEY ("shopId") REFERENCES "shop" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "tipo-cambio" ADD CONSTRAINT "FK_431cba70a35a48536fa80fccfbc" FOREIGN KEY ("baseCurrencyId") REFERENCES "currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "tipo-cambio" ADD CONSTRAINT "FK_91e62862d1d58cabcaaaf974460" FOREIGN KEY ("exchangeCurrencyId") REFERENCES "currency" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "user_roles" ADD CONSTRAINT "FK_472b25323af01488f1f66a06b67" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "user_roles" ADD CONSTRAINT "FK_86033897c009fcca8b6505d6be2" FOREIGN KEY ("roleId") REFERENCES "roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

