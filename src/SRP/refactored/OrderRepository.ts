export class OrderRepository {
  save(orderId: string) {
    console.log(`Order ${orderId} saved to database.`);
  }
}
