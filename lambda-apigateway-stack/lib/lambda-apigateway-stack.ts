import * as cdk from '@aws-cdk/core';
import { Function, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import { LambdaApigatewayProps } from '../lib/schema/schema';

export class LambdaApigatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: LambdaApigatewayProps) {
    super(scope, id, props);

    const restApi = new RestApi(this, id, {
      restApiName: 'SampleApiGateway',
    });

    const sampleResource = restApi.root.addResource('SampleResource');

    const sanpelFun = new Function(this, 'MyFunction', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: new AssetCode('./src/lambda/sampleFunction'),
      environment: {
        MOCK_ENDPOINT: props.mockEndpoint
      }
    });

    const confirmDeletionIntegration = new LambdaIntegration(sanpelFun);
    sampleResource.addMethod('POST', confirmDeletionIntegration);
  }
}
