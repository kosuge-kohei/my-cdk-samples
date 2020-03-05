import * as cdk from '@aws-cdk/core';
import { RestApi  } from '@aws-cdk/aws-apigateway';

export interface LambdaApigatewayProps extends cdk.StackProps {
    mockEndpoint: string;
  }
  