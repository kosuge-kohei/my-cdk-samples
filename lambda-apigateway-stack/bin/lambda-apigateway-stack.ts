#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaApigatewayStack } from '../lib/lambda-apigateway-stack';

const app = new cdk.App();
new LambdaApigatewayStackStack(app, 'LambdaApigatewayStack');
