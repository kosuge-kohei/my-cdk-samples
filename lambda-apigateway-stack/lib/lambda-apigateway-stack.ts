import * as cdk from '@aws-cdk/core';
import { Function, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { RestApi, LambdaIntegration  } from '@aws-cdk/aws-apigateway';

export class LambdaApigatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const restApi = new RestApi(this, id, {
      restApiName: 'SampleApiGateway',
    });

    const sampleResource = restApi.root.addResource('SampleResource');

    const sanpelFunn = new Function(this, 'MyFunction', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: new AssetCode('./src/lambda'),
    });

    const confirmDeletionIntegration = new LambdaIntegration(sanpelFunn);
    sampleResource.addMethod('POST', confirmDeletionIntegration);
  }
}
