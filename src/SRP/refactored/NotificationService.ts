export class NotificationService {
  sendEmail(email: string, message: string) {
    console.log(`Email sent to ${email}: ${message}`);
  }
}
