import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Like, Repository, Unique } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderSearchDto } from './dto/order-search.dto';
import { ReturnDto } from 'src/common/base/dto';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { CodeEnum } from 'src/common/enum/code.enum';
import { ResourceEnum } from 'src/common/enum/resource.enum';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Product } from 'src/product/entities/product.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
@Injectable()
export class OrderService extends BaseServiceCRUD<
  Order,
  CreateOrderDto,
  UpdateOrderDto
> {
  private readonly PREFIX = 'Glorieta-';
 
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
    @InjectRepository(OrderProductDelivery)
    private readonly orderProductDeliveryRepository: Repository<OrderProductDelivery>,
    @InjectRepository(ShopSectionProducts)
    private readonly shopSectionProductRepository: Repository<ShopSectionProducts>,
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
    @InjectRepository(Deliveries)
    private readonly deliveryRepository: Repository<Deliveries>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(repository);
  }

  async generateOrderNumber(): Promise<string> {
    const currentYear = new Date().getFullYear();
    const yearPrefix = currentYear.toString();

    // Find the latest order with the current year prefix
    const latestOrder = await this.repository.findOne({
      where: { noOrden: Like(`${this.PREFIX}${yearPrefix}-%`) },
      order: { noOrden: 'DESC' },
    });

    let nextSequence = 1;
    if (latestOrder) {
      const latestNumber = latestOrder.noOrden.split('-')[2];
      nextSequence = parseInt(latestNumber, 10) + 1;
    }

    // Format the number with leading zeros if needed
    const formattedNumber = nextSequence.toString().padStart(4, '0');

    return `${this.PREFIX}${yearPrefix}-${formattedNumber}`;
  }

  override async create(createOrderDto: CreateOrderDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto

    const order = new Order();

    order.totalPrice = 0;
    order.totalProductsPrices = 0
    order.delivery = null
    order.noOrden = await this.generateOrderNumber()
    order.fechaOrder = new Date().getDate().toString()
    let savedOrder = await this.repository.save(order)
    let totalProductPrice = 0
    // Calculate delivery cost if toDelivery is true
     if (createOrderDto.toDelivery) {
      if(!createOrderDto.municipalityOrigin || ! createOrderDto.municipalityDestiny)
      {
        returnDto.isSuccess = false
        returnDto.returnCode = CodeEnum.BAD_REQUEST
        returnDto.errorMessage = 'At least one municipality is not setted'
      }
      else{
        const municipalityOrigin = await this.municipalityRepository.findOne({
          where:{
            id : createOrderDto.municipalityOrigin
          }
        })
      if(!municipalityOrigin)
      {
        returnDto.isSuccess = false
        returnDto.returnCode = CodeEnum.BAD_REQUEST
        returnDto.errorMessage = 'Origin municipality is wrong.'
      }
        const municipalityDestiny = await this.municipalityRepository.findOne({
          where:{
            id : createOrderDto.municipalityDestiny
          }
        })
      if(!municipalityDestiny)
        {
          returnDto.isSuccess = false
          returnDto.returnCode = CodeEnum.BAD_REQUEST
          returnDto.errorMessage = 'Destiny municipality is wrong.'
        }
        if(municipalityOrigin && municipalityDestiny){
        const delivery = await this.deliveryRepository.findOne({
          where: {
            municipalityOrigin: municipalityOrigin,
            municipalityDestiny: municipalityDestiny,
          },
        });
         if (delivery) {
          order.totalPrice += delivery.price;
          order.delivery = delivery  
        }
      }  
    }
    }

      // Verify that all orders are from the same shop
      createOrderDto.products.forEach  (async (productDto)=> {
          const shopSectionProduct = await this.shopSectionProductRepository.findOne({
            where: { id: productDto.shopSectionProductId },
          });

          if (!shopSectionProduct) {
            returnDto.isSuccess = false
            returnDto.returnCode = CodeEnum.BAD_REQUEST
            returnDto.errorMessage = `ShopSectionProduct with ID ${productDto.shopSectionProductId} not found.`
          }
          else{
            const shopSection = shopSectionProduct.shopSection
          if (shopSection.shop.id !== createOrderDto.shop) {
            returnDto.isSuccess = false
            returnDto.returnCode = CodeEnum.BAD_REQUEST
            returnDto.errorMessage = `ShopSectionProduct with ID ${productDto.shopSectionProductId} does not belong to shop ${createOrderDto.shop}.`
          }
        }
      })

      // verify Existence
      createOrderDto.products.forEach  (async (productDto)=> {
        const shopSectionProduct = await this.shopSectionProductRepository.findOne({
          where: { id: productDto.shopSectionProductId },
        });

        if (shopSectionProduct.existence < productDto.quantity) {
          returnDto.isSuccess = false
          returnDto.returnCode = CodeEnum.BAD_REQUEST
          returnDto.errorMessage = `Can not be selled this cuantity of product.`
        }

    })

       // buscar los Productos
       if(returnDto.isSuccess){
        createOrderDto.products.forEach  (async (productDto)=> {
            const shopSectionProduct = await this.shopSectionProductRepository.findOne({
              where: { id: productDto.shopSectionProductId },
            });

            // quitar comentario y busr el producto
            // order.totalProductsPrices += productDto.price * productDto.quantity 
            totalProductPrice += order.totalProductsPrices
            savedOrder = await this.repository.save(order)
                      // Update the quantity in ShopSectionProduct
          shopSectionProduct.existence -= productDto.quantity;
          await this.shopSectionProductRepository.save(shopSectionProduct);
  
          const orderProductDelivery = new OrderProductDelivery();
          orderProductDelivery.amountProduct = productDto.quantity;
          orderProductDelivery.order = savedOrder;
          order.fechaEntrega = createOrderDto.fechaEntrega;
          orderProductDelivery.shopSectionProduct = shopSectionProduct;
          // Estado Reservado
          order.deliveryState = "ce6b4846-6e09-4c4b-8d0f-5ac96d7e7256" as any
          await this.orderProductDeliveryRepository.save(orderProductDelivery);
        })
       }
      
      // Add product prices to totalPrice
      savedOrder.totalPrice += totalProductPrice;
  
      // Estado Id Solicitada
      savedOrder.orderState = ("34ef12a0-79bd-4078-80c2-33fae602225c") as any
      // Save the updated order with totalPrice
      await this.repository.save(savedOrder);
  
     
    returnDto.data = savedOrder
    return returnDto;

  }


  async findItems(searchDto: OrderSearchDto): Promise<Order[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.shop', 'shop')
      .leftJoinAndSelect('order.delivery', 'delivery')
      .leftJoinAndSelect('order.orderState', 'orderState');

    if (searchDto.noOrden) {
      queryBuilder.andWhere('order.noOrden LIKE :noOrden', {
        noOrden: `%${searchDto.noOrden}%`,
      });
    }

    if (searchDto.shopId) {
      queryBuilder.andWhere('order.shopId = :shopId', {
        shopId: searchDto.shopId,
      });
    }

    if (searchDto.deliveryId) {
      queryBuilder.andWhere('order.deliveryId = :deliveryId', {
        deliveryId: searchDto.deliveryId,
      });
    }

    if (searchDto.deliveryTravels) {
      queryBuilder.andWhere('order.deliveryTravels = :deliveryTravels', {
        deliveryTravels: searchDto.deliveryTravels,
      });
    }

    if (searchDto.deliveryTotalPrice) {
      queryBuilder.andWhere('order.deliveryTotalPrice = :deliveryTotalPrice', {
        deliveryTotalPrice: searchDto.deliveryTotalPrice,
      });
    }

    if (searchDto.orderStateId) {
      queryBuilder.andWhere('order.orderStateId = :orderStateId', {
        orderStateId: searchDto.orderStateId,
      });
    }

    if (searchDto.totalProductsPrices) {
      queryBuilder.andWhere(
        'order.totalProductsPrices = :totalProductsPrices',
        { totalProductsPrices: searchDto.totalProductsPrices },
      );
    }

    if (searchDto.totalOrderPrice) {
      queryBuilder.andWhere('order.totalOrderPrice = :totalOrderPrice', {
        totalOrderPrice: searchDto.totalOrderPrice,
      });
    }

    if (searchDto.fechaOrder) {
      queryBuilder.andWhere('order.fechaOrder LIKE :fechaOrder', {
        fechaOrder: `%${searchDto.fechaOrder}%`,
      });
    }

    if (searchDto.deliveryTravelsGreaterThan) {
      queryBuilder.andWhere(
        'order.deliveryTravels > :deliveryTravelsGreaterThan',
        { deliveryTravelsGreaterThan: searchDto.deliveryTravelsGreaterThan },
      );
    }

    if (searchDto.deliveryTotalPriceGreaterThan) {
      queryBuilder.andWhere(
        'order.deliveryTotalPrice > :deliveryTotalPriceGreaterThan',
        {
          deliveryTotalPriceGreaterThan:
            searchDto.deliveryTotalPriceGreaterThan,
        },
      );
    }

    if (searchDto.deliveryTotalPriceLessThan) {
      queryBuilder.andWhere(
        'order.deliveryTotalPrice < :deliveryTotalPriceLessThan',
        { deliveryTotalPriceLessThan: searchDto.deliveryTotalPriceLessThan },
      );
    }

    if (searchDto.totalProductsPricesGreaterThan) {
      queryBuilder.andWhere(
        'order.totalProductsPrices > :totalProductsPricesGreaterThan',
        {
          totalProductsPricesGreaterThan:
            searchDto.totalProductsPricesGreaterThan,
        },
      );
    }

    if (searchDto.totalOrderPriceGreaterThan) {
      queryBuilder.andWhere(
        'order.totalOrderPrice > :totalOrderPriceGreaterThan',
        { totalOrderPriceGreaterThan: searchDto.totalOrderPriceGreaterThan },
      );
    }

    if (searchDto.fechaOrderBetween) {
      queryBuilder.andWhere(
        'order.fechaOrder BETWEEN :startDate AND :endDate',
        {
          startDate: searchDto.fechaOrderBetween[0],
          endDate: searchDto.fechaOrderBetween[1],
        },
      );
    }
    return queryBuilder.getMany();
  }
}
