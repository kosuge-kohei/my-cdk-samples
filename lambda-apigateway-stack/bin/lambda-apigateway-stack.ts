#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaApigatewayStack } from '../lib/lambda-apigateway-stack';
import { MockApigatewayStack } from '../lib/mock-apigateway-stack';
import { LambdaApigatewayProps } from '../lib/schema/schema';

const app = new cdk.App();
const mockApiGatewayStack = new MockApigatewayStack(app, 'MockApigatewayStack');

const LambdaApigatewayProps: LambdaApigatewayProps = {
    mockEndpoint: mockApiGatewayStack.restApi.url
}
new LambdaApigatewayStack(app, 'LambdaApigatewayStack', LambdaApigatewayProps);
