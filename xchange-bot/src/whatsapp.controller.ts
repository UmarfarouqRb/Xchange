
import { Controller, Post, Body, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioService } from 'nestjs-twilio';
import type { Response } from 'express';

@Controller('whatsapp')
export class WhatsappController {
  private readonly frontendUrl: string;
  private readonly twilioPhoneNumber: string;

  constructor(
    private readonly twilioService: TwilioService,
    private readonly configService: ConfigService,
  ) {
    // Assured with '!' because these are set in the Render environment.
    this.frontendUrl = this.configService.get<string>('FRONTEND_URL')!;
    this.twilioPhoneNumber = this.configService.get<string>('TWILIO_PHONE_NUMBER')!;
  }

  /**
   * Handles incoming WhatsApp messages from Twilio webhook.
   */
  @Post('message')
  async receiveMessage(@Body() body: any, @Res() res: Response) {
    const userMessage = (body.Body || '').toLowerCase().trim();
    const fromNumber = body.From;

    let responseMessage: string;

    switch (userMessage) {
      case 'hello':
      case 'hi':
        responseMessage = 'Welcome to Xchange! You can use commands like *swap*, *check balance*, or *price*.';
        break;

      case 'swap':
        responseMessage = `To perform a secure swap, please visit our mini-app: ${this.frontendUrl}`;
        break;

      case 'check balance':
        responseMessage = 'This feature is coming soon!';
        break;

      case 'price':
        responseMessage = 'BTC: $65,000\nETH: $3,500';
        break;

      default:
        responseMessage = 'Command not recognized. Try *hello* or *swap*.';
        break;
    }

    try {
      await this.sendTwilioMessage(fromNumber, responseMessage);
      // Respond to Twilio to acknowledge receipt of the message
      res.status(204).send();
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).send('Failed to send message');
    }
  }

  /**
   * Sends a message using the Twilio client.
   */
  private sendTwilioMessage(to: string, body: string) {
    return this.twilioService.client.messages.create({
      from: this.twilioPhoneNumber,
      to: to,
      body: body,
    });
  }
}
