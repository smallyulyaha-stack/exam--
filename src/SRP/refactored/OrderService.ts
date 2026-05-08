import { OrderRepository } from './OrderRepository';
import { NotificationService } from './NotificationService';

export class OrderService {
  constructor(
    private repository: OrderRepository,
    private notifications: NotificationService
  ) {}

  processOrder(orderId: string, email: string) {
    // Виконуємо лише високорівневу логіку
    this.repository.save(orderId);
    this.notifications.sendEmail(email, `Your order ${orderId} is confirmed!`);
  }
}
