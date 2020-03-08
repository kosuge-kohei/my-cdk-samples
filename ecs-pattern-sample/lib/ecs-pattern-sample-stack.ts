import { Cluster, FargateTaskDefinition, ContainerImage} from '@aws-cdk/aws-ecs';
import { ApplicationLoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns';
import { Stack, Construct, StackProps } from '@aws-cdk/core';

export class EcsPatternSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cluster = new Cluster(this, 'EcsPatternSampleCluster', {
        clusterName: 'EcsPatternSampleCluster',
    });

    const taskDefinition = new FargateTaskDefinition(this, 'TaskDefinition');
    const container = taskDefinition.addContainer('EcsPatternSampleContainer', {
        image: ContainerImage.fromRegistry('amazon/amazon-ecs-sample')
    });

    container.addPortMappings({
        containerPort: 80
    });

    new ApplicationLoadBalancedFargateService(this, 'EcsPatternSampleService', {
        cluster: cluster,
        memoryLimitMiB: 1024,
        cpu: 512,
        desiredCount: 1,
        taskDefinition: taskDefinition
    });
  }
}
