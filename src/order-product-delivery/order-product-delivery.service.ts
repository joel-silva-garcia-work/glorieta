import { Injectable } from '@nestjs/common';
import { CreateOrderProductDeliveryDto } from './dto/create-order-product-delivery.dto';
import { UpdateOrderProductDeliveryDto } from './dto/update-order-product-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { OrderProductDelivery } from './entities/order-product-delivery.entity';
import { ReturnDto } from 'src/common/base/dto';

@Injectable()
export class OrderProductDeliveryService extends BaseServiceCRUD<OrderProductDelivery,CreateOrderProductDeliveryDto,UpdateOrderProductDeliveryDto> {
  constructor(
    @InjectRepository(OrderProductDelivery)
    private readonly repository: Repository<OrderProductDelivery>,
  ) {
    super(repository)
  }

  async getTop10BestSellingProducts(): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const deliveryStateId = '77fd331c-70d2-47a6-bc17-65cd167e9d13';

    const queryBuilder = this.repository.createQueryBuilder('orderProductDelivery')
      .leftJoinAndSelect('orderProductDelivery.product', 'product')
      .select('product.id', 'productId')
      .addSelect('product.name', 'productName')
      .addSelect('product.description', 'productDescription')
      .addSelect('product.price', 'productPrice')
      .addSelect('product.photo', 'productPhoto')
      .addSelect('SUM(orderProductDelivery.amountProduct)', 'totalSold')
      .where('orderProductDelivery.deliveryStateId = :deliveryStateId', { deliveryStateId })
      .groupBy('product.id')
      .orderBy('totalSold', 'DESC')
      .limit(10);

    const results = await queryBuilder.getRawMany();

    returnDto.data = results.map(result => ({
      productId: result.productId,
      totalSold: result.totalSold,
    }));

    return returnDto;
  }
}