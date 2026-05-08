export class OrderProcessor {
  process(orderId: string, amount: number, email: string) {
    // 1. Логіка обробки
    console.log(`Processing order ${orderId} for ${amount} UAH...`);

    // 2. Збереження в базу (пряма залежність від логіки БД)
    console.log(`Saving order ${orderId} to PostgreSQL...`);

    // 3. Відправка повідомлення (пряма залежність від логіки сповіщень)
    console.log(`Sending confirmation email to ${email}...`);
  }
}
