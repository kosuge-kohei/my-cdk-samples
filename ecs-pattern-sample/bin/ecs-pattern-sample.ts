#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EcsPatternSampleStack } from '../lib/ecs-pattern-sample-stack';

const app = new cdk.App();
new EcsPatternSampleStack(app, 'EcsPatternSampleStack');
