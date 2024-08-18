import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tienda_seccion_producto_view')
export class TiendaSeccionProductoView {
  @PrimaryColumn({ name: 'shop_id' })
  shopId: number;

  @Column({ name: 'shop_name' })
  shopName: string;

  @Column({ name: 'shop_description' })
  shopDescription: string;

  @Column({ name: 'shop_phone' })
  shopPhone: string;

  @Column({ name: 'shop_email' })
  shopEmail: string;

  @Column({ name: 'shop_address' })
  shopAddress: string;

  @Column({ name: 'shop_municipalityId' })
  shopMunicipalityId: number;

  @Column({ name: 'shop_photo' })
  shopPhoto: string;

  @Column({ name: 'shop_sections_id' })
  shopSectionsId: number;

  @Column({ name: 'sections_id' })
  sectionsId: number;

  @Column({ name: 'sections_name' })
  sectionsName: string;

  @Column({ name: 'sections_description' })
  sectionsDescription: string;

  @Column({ name: 'shop_section_products_id' })
  shopSectionProductsId: number;

  @Column({ name: 'shop_section_products_existence' })
  shopSectionProductsExistence: number;

  @Column({ name: 'shop_section_products_price' })
  shopSectionProductsPrice: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'product_name' })
  productName: string;

  @Column({ name: 'product_description' })
  productDescription: string;

  @Column({ name: 'product_photo' })
  productPhoto: string;

  @Column({ name: 'product_carcteristicas' })
  productCarcteristicas: string;


  @Column({ name: 'product_marca' })
  productMarca: string;

  @Column({ name: 'product_modelo' })
  productModelo: string;

}
