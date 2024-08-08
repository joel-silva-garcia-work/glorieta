import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderSearchDto } from './dto/order-search.dto';
@Injectable()
export class OrderService extends BaseServiceCRUD<Order,CreateOrderDto,UpdateOrderDto> {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {
    super(repository)
  }
  async findItems(searchDto: OrderSearchDto): Promise<Order[]> {
    const queryBuilder = this.repository.createQueryBuilder('order')
      .leftJoinAndSelect('order.shop', 'shop')
      .leftJoinAndSelect('order.delivery', 'delivery')
      .leftJoinAndSelect('order.orderState', 'orderState');

    if (searchDto.noOrden) {
      queryBuilder.andWhere('order.noOrden LIKE :noOrden', { noOrden: `%${searchDto.noOrden}%` });
    }

    if (searchDto.shopId) {
      queryBuilder.andWhere('order.shopId = :shopId', { shopId: searchDto.shopId });
    }

    if (searchDto.deliveryId) {
      queryBuilder.andWhere('order.deliveryId = :deliveryId', { deliveryId: searchDto.deliveryId });
    }

    if (searchDto.deliveryTravels) {
      queryBuilder.andWhere('order.deliveryTravels = :deliveryTravels', { deliveryTravels: searchDto.deliveryTravels });
    }

    if (searchDto.deliveryTotalPrice) {
      queryBuilder.andWhere('order.deliveryTotalPrice = :deliveryTotalPrice', { deliveryTotalPrice: searchDto.deliveryTotalPrice });
    }

    if (searchDto.orderStateId) {
      queryBuilder.andWhere('order.orderStateId = :orderStateId', { orderStateId: searchDto.orderStateId });
    }

    if (searchDto.totalProductsPrices) {
      queryBuilder.andWhere('order.totalProductsPrices = :totalProductsPrices', { totalProductsPrices: searchDto.totalProductsPrices });
    }

    if (searchDto.totalOrderPrice) {
      queryBuilder.andWhere('order.totalOrderPrice = :totalOrderPrice', { totalOrderPrice: searchDto.totalOrderPrice });
    }

    if (searchDto.fechaOrder) {
      queryBuilder.andWhere('order.fechaOrder LIKE :fechaOrder', { fechaOrder: `%${searchDto.fechaOrder}%` });
    }
    
    if (searchDto.deliveryTravelsGreaterThan) {
      queryBuilder.andWhere('order.deliveryTravels > :deliveryTravelsGreaterThan', { deliveryTravelsGreaterThan: searchDto.deliveryTravelsGreaterThan });
    }

    if (searchDto.deliveryTotalPriceGreaterThan) {
      queryBuilder.andWhere('order.deliveryTotalPrice > :deliveryTotalPriceGreaterThan', { deliveryTotalPriceGreaterThan: searchDto.deliveryTotalPriceGreaterThan });
    }

    if (searchDto.deliveryTotalPriceLessThan) {
      queryBuilder.andWhere('order.deliveryTotalPrice < :deliveryTotalPriceLessThan', { deliveryTotalPriceLessThan: searchDto.deliveryTotalPriceLessThan });
    }

    if (searchDto.totalProductsPricesGreaterThan) {
      queryBuilder.andWhere('order.totalProductsPrices > :totalProductsPricesGreaterThan', { totalProductsPricesGreaterThan: searchDto.totalProductsPricesGreaterThan });
    }

    if (searchDto.totalOrderPriceGreaterThan) {
      queryBuilder.andWhere('order.totalOrderPrice > :totalOrderPriceGreaterThan', { totalOrderPriceGreaterThan: searchDto.totalOrderPriceGreaterThan });
    }

    if (searchDto.fechaOrderBetween) {
      queryBuilder.andWhere('order.fechaOrder BETWEEN :startDate AND :endDate', {
        startDate: searchDto.fechaOrderBetween[0],
        endDate: searchDto.fechaOrderBetween[1],
      });
    }
    return queryBuilder.getMany();
  }
}