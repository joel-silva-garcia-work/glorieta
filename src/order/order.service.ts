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
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';
import { ClientInfo } from 'src/client-info/entities/client-info.entity';
import { OrderStates } from 'src/order-state/entities/order-state.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
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
    @InjectRepository(ShoppingCart)
    private readonly shoppingCartRepository: Repository<ShoppingCart>,
    @InjectRepository(ClientInfo)
    private readonly clientInfoRepository: Repository<ClientInfo>,
    @InjectRepository(OrderStates)
    private readonly orderStateRepository: Repository<OrderStates>,
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
    @InjectRepository(DeliveryState)
    private readonly deliveryStateRepository: Repository<DeliveryState>,
    
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

override async create(createOrderDto: CreateOrderDto): Promise<ReturnDto> {
  const returnDto = new ReturnDto();
  const { shoppingCartId, clientInfo, toDelivery } = createOrderDto;

  // Verify if the shopping cart exists
  const shoppingCart = await this.shoppingCartRepository.findOne({where:{id:shoppingCartId}});
  if (!shoppingCart) {
    return {
      isSuccess: false,
      returnCode: 404,
      errorMessage: 'Shopping cart not found',
    };
  }

  // Create client info and get its id
  const newClientInfo = this.clientInfoRepository.create(clientInfo);
  const savedClientInfo = await this.clientInfoRepository.save(newClientInfo);
  const orderState = await this.orderStateRepository.findOne({where:{id: "34ef12a0-79bd-4078-80c2-33fae602225c"}});
  const  order = new Order();
  order.clientInfo = savedClientInfo;
  order.noOrden = await this.generateOrderNumber();
  order.fechaOrder = new Date().toISOString().split('T')[0];
  order.shoppingCart = shoppingCart;
  order.toDelivery = toDelivery;
  order.orderState = orderState;
  // If toDelivery is true, get the shopID from the first shopSectionProduct in the shopping cart
  if (toDelivery) {
    order.toDelivery = true;
    const firstShopSectionProduct = shoppingCart.shopSectionProductIds[0];
    if (firstShopSectionProduct) {
      // busco la tienda
      const shop = await this.shopRepository.findOne({
        where:{
          id:firstShopSectionProduct
        }
      });
      if(shop){
        // busco si la info del cliente y la tienda hay delivery
        const deliveryOrigin = shop.municipality
        const deliveryDestiny = savedClientInfo.municipality
        const delivery = await this.deliveryRepository.findOne({
          where:{
            municipalityOrigin: deliveryOrigin,
            municipalityDestiny: deliveryDestiny
          }
        })
        if(delivery){
          order.delivery = delivery;
          order.deliveryState = await this.deliveryStateRepository.findOne({where:{id: "ce6b4846-6e09-4c4b-8d0f-5ac96d7e7256"}});
          order.toDelivery = true;
        }
        else{
          order.toDelivery = false;
        }
      }
    }
  }
  else{
    order.toDelivery = false;
  }
  // Create the order
  const orders = await this.repository.save(order);

  returnDto.data = orders;

  return returnDto;
}
}
