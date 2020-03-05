import * as cdk from '@aws-cdk/core';
import { Function, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { RestApi, LambdaIntegration  } from '@aws-cdk/aws-apigateway';

export class MockApigatewayStack extends cdk.Stack {
  public readonly restApi: RestApi;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.restApi = new RestApi(this, id, {
      restApiName: 'MockApiGateway',
    });

    const sampleResource = this.restApi.root.addResource('mockResource');

    const sanpelFun = new Function(this, 'mockFunction', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: new AssetCode('./src/lambda/mockFunction'),
    });

    const confirmDeletionIntegration = new LambdaIntegration(sanpelFun);
    sampleResource.addMethod('POST', confirmDeletionIntegration);
  }
}
