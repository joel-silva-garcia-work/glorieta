import { Injectable } from '@nestjs/common';
import { CreateRejectOrderDto } from './dto/create-reject-order.dto';
import { UpdateRejectOrderDto } from './dto/update-reject-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { RejectOrder } from './entities/reject-order.entity';
import { ReturnDto } from 'src/common/base/dto';
import { Order } from 'src/order/entities/order.entity';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';
import { CodeEnum } from 'src/common/enum/code.enum';
@Injectable()
export class RejectOrderService extends BaseServiceCRUD<
  RejectOrder,
  CreateRejectOrderDto,
  UpdateRejectOrderDto
> {
  constructor(
    @InjectRepository(RejectOrder)
    private readonly repository: Repository<RejectOrder>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderProductDelivery)
    private readonly orderProductDeliveryRepository: Repository<OrderProductDelivery>
  ) {
    super(repository);
  }

  override async create(createRejectOrderDto: CreateRejectOrderDto): Promise<ReturnDto> {
    const returnDto: ReturnDto = new ReturnDto()
    const { orderProductDeliveryId, rejectProductAmount } = createRejectOrderDto;

    const productDelivery = await this.orderProductDeliveryRepository.findOne({ where: { id: orderProductDeliveryId } });
    if (!productDelivery) {
      returnDto.isSuccess = false;
      returnDto.returnCode = CodeEnum.BAD_REQUEST;
      returnDto.errorMessage = 'OrderProductDelivery not found';
      return returnDto;
    }
    const product = productDelivery.shopSectionProduct.product;

    // Save reject order
    const rejectedOrder =await this.repository.create({
      orderProductDelivery: productDelivery,
      rejectProductAmount: rejectProductAmount,
      rejectProductPrice:product.price
    });
    if (productDelivery.amountProduct < rejectProductAmount) {
      returnDto.isSuccess = false;
      returnDto.returnCode = CodeEnum.BAD_REQUEST;
      returnDto.errorMessage = 'Cannot reject more products than available in the order';
      return returnDto;
    }
    await this.repository.save(rejectedOrder);
  
    // Update the order
    const order = productDelivery.order
    //  actualizar la orden
    // preguntar si se rechazó toda la orden
     
    return returnDto;
  }
}
