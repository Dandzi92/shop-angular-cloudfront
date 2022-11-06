import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://xrrzo5hore.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://xwd18eaflg.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'http://dandzi-92-cart-api-dev.eu-west-1.elasticbeanstalk.com',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
