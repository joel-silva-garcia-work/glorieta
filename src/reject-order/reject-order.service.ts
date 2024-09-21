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
    const { orderProductDeliveryId, rejectProductAmount, rejectProductPrice } = createRejectOrderDto;

    // Save reject order
    const rejectOrder = this.repository.create(createRejectOrderDto);
    await this.repository.save(rejectOrder);

    // Find the associated order product delivery
    const orderProductDelivery = await this.orderProductDeliveryRepository.findOne({ where: { id: orderProductDeliveryId } });
     
    if(orderProductDelivery){
      if(orderProductDelivery.amountProduct < rejectProductAmount){
        returnDto.isSuccess = false
        returnDto.returnCode = CodeEnum.BAD_REQUEST
        returnDto.errorMessage = "Cantidad erronea"
      }
      
    }
    // Update the order
    const order = await this.orderRepository.findOne({ where: { id: orderProductDelivery.order.id } });
    if (!orderProductDelivery) {
      returnDto.isSuccess = false
      returnDto.returnCode = CodeEnum.BAD_REQUEST
      returnDto.errorMessage = ('OrderProductDelivery not found');
    }
    if (!order && returnDto.isSuccess) {
      returnDto.isSuccess = false
      returnDto.returnCode = CodeEnum.BAD_REQUEST
      returnDto.errorMessage = ('Order not found');
    }
    if (returnDto.isSuccess){
      orderProductDelivery.amountProduct -= rejectProductAmount
      order.totalProductsPrices -= rejectProductPrice;
      order.totalPrice -= rejectProductPrice;
      await this.orderRepository.save(order);

      // el rejectProduct Price hay que buscarlo no se recibe del DTO
      rejectOrder.orderProductDelivery = orderProductDelivery
      rejectOrder.rejectProductAmount = rejectProductAmount
      rejectOrder.rejectProductPrice = rejectProductPrice

      returnDto.data = await this.repository.save(rejectOrder)
      await this.orderProductDeliveryRepository.save(orderProductDelivery)
      await this.orderRepository.save(order);
      // falta preguntar si se rechazó toda la orden
      if(orderProductDelivery.amountProduct == 0)
      {}
    }
    return returnDto;
  }
}
