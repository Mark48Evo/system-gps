import RabbitMQPubSub from '@mark48evo/rabbitmq-pubsub';

const defaultConfig = {
  exchangeName: process.env.GPS_MESSAGES_EXCHANGE_NAME || 'gps_messages',
  queueNamePrefix: process.env.GPS_MESSAGES_QUEUE_NAME_PREFIX || 'gps_messages',
};

/**
 * @param {Channel} channel
 * @param {RabbitMQPubSubOptions} options
 * @returns {Promise<RabbitMQPubSub>}
 */
export default async function (channel, options = {}) {
  const config = { ...defaultConfig, ...options };

  const systemEvents = new RabbitMQPubSub(channel, config);
  await systemEvents.setup();

  return systemEvents;
}
