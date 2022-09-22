import * as cdk from '@aws-cdk/core';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });
    console.log("100");


    new apigateway.CfnModel(
      this,
      "CloneModelSchema",
      {
        restApiId: "bdfwdmeq83",
        name: "CloneModelSchema",
        schema:  {
          "$schema": "http://json-schema.org/draft-07/schema",
          "type": "object",
          "title": "Clone Model Schema",
          "description": "The root schema comprises the entire JSON document.",
          "required": [
              "ModelName", 
              "ModelArtifactS3Location", 
              "ModelDescription",
              "TrainingImageS3", 
              "TrainingLabelS3", 
              "TrainingInstance",
              "Epochs",
              "FleetArn",
              "AlertFunction"
          ],
          "additionalProperties": false,
          "properties": {
              "ModelName": {
                  "type": "string",
                  "title": "The ModelName",
                  "maxLength": 100
              },
              "ModelDescription": {
                  "type": "string",
                  "title": "The ModelDescription",
                  "maxLength": 600
              },        
              "ModelArtifactS3Location": {
                  "type": "string",
                  "title": "The ModelArtifactS3Location",
                  "maxLength": 200
              },    
              "NeoTRT": {
                  "type": "string",
                  "enum": [   
                      "Neo",
                      "TRT"
                  ],
                  "title": "Neo or TRT optimizaion"
              },       
              "TrainingImageS3": {
                  "type": "string",
                  "title": "The TrainingImageS3",
                  "maxLength": 200
              },
              "TrainingLabelS3": {
                  "type": "string",
                  "title": "The TrainingLabelS3",
                  "maxLength": 200
              },        
              "TrainingInstance": {
                  "type": "string",
                  "enum": [   
                      "p3.2xlarge",
                      "p3.8xlarge",
                      "p3.16xlarge",
                      "p3dn.24xlarge"
                  ],
                  "title": "The TrainingInstance"
              },
              "Epochs": {
                  "type": "integer",
                  "title": "The Epochs"
              },
              "FleetArn": {
                  "type": "string",
                  "title": "The FleetArn",
                  "maxLength": 200
              },
              "AlertFunction": {
                  "type": "string",
                  "title": "The AlertFunction",
                  "maxLength": 200
              } 
          }
      },
        contentType: "application/json",
        description: "Clone Model Schema",
      }
    );
    console.log("200");
    new apigateway.CfnModel(
      this,
      "NewModelSchema",
      {
        restApiId: "bdfwdmeq83",
        name: "NewModelSchema",
        schema:  {
          "$schema": "http://json-schema.org/draft-07/schema",
          "type": "object",
          "title": "Sample schema",
          "description": "The root schema comprises the entire JSON document.",
          "required": [
              "ModelName", 
              "ModelFramework", 
              "ModelArtifactS3Location", 
              "ModelDescription",
              "PretrainedWeight",
              "Algorithm", 
              "ClassNumber", 
              "ClassList", 
              "TrainingImageS3", 
              "TrainingLabelS3", 
              "TrainingInstance",
              "Epochs",
              "FleetArn",
              "AlertFunction"
          ],
          "additionalProperties": false,
          "properties": {
              "ModelName": {
                  "type": "string",
                  "title": "The ModelName",
                  "maxLength": 100
              },
              "ModelFramework": {
                  "type": "string",
                  "title": "The ModelFramework",
                  "maxLength": 30
              },        
              "ModelDescription": {
                  "type": "string",
                  "title": "The ModelDescription",
                  "maxLength": 600
              },        
              "ModelArtifactS3Location": {
                  "type": "string",
                  "title": "The ModelArtifactS3Location",
                  "maxLength": 200
              },        
              "PretrainedWeight": {
                  "type": "string",
                  "title": "The PretrainedWeight",
                  "maxLength": 200
              },
              "Algorithm": {
                  "type": "string",
                  "title": "The Algorithm",
                  "maxLength": 30
              },        
              "ClassNumber": {
                  "type": "integer",
                  "title": "The ClassNumber"
              },
              "ClassList": {
                  "type": "array",
                  "items": {
                      "type": "string"
                  },
                  "title": "The ClassList"
              }, 
              "NeoTRT": {
                  "type": "string",
                  "enum": [   
                      "Neo",
                      "TRT"
                  ],
                  "title": "Neo or TRT optimizaion"
              },        
              
              "TrainingImageS3": {
                  "type": "string",
                  "title": "The TrainingImageS3",
                  "maxLength": 200
              },
              "TrainingLabelS3": {
                  "type": "string",
                  "title": "The TrainingLabelS3",
                  "maxLength": 200
              },        
              "TrainingInstance": {
                  "type": "string",
                  "enum": [   
                      "p3.2xlarge",
                      "p3.8xlarge",
                      "p3.16xlarge",
                      "p3dn.24xlarge"
                  ],
                  "title": "The TrainingInstance"
              },
              "Epochs": {
                  "type": "integer",
                  "title": "The Epochs"
              },
              "FleetArn": {
                  "type": "string",
                  "title": "The FleetArn",
                  "maxLength": 200
              },
              "AlertFunction": {
                  "type": "string",
                  "title": "The AlertFunction",
                  "maxLength": 200
              } 
          }
      },
      contentType: "application/json",
      description: "New Model Schema",
    }
  );


      



    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */
    
    // Example 1: Set up an SQS queue with an SNS topic 

    /*
    const amplifyProjectInfo = AmplifyHelpers.getProjectInfo();
    const sqsQueueResourceNamePrefix = `sqs-queue-${amplifyProjectInfo.projectName}`;
    const queue = new sqs.Queue(this, 'sqs-queue', {
      queueName: `${sqsQueueResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // 👇create sns topic
    
    const snsTopicResourceNamePrefix = `sns-topic-${amplifyProjectInfo.projectName}`;
    const topic = new sns.Topic(this, 'sns-topic', {
      topicName: `${snsTopicResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // 👇 subscribe queue to topic
    topic.addSubscription(new subs.SqsSubscription(queue));
    new cdk.CfnOutput(this, 'snsTopicArn', {
      value: topic.topicArn,
      description: 'The arn of the SNS topic',
    });
    */

    // Example 2: Adding IAM role to the custom stack 
    /*
    const roleResourceNamePrefix = `CustomRole-${amplifyProjectInfo.projectName}`;
    
    const role = new iam.Role(this, 'CustomRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      roleName: `${roleResourceNamePrefix}-${cdk.Fn.ref('env')}`
    }); 
    */

    // Example 3: Adding policy to the IAM role
    /*
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ['*'],
        resources: [topic.topicArn],
      }),
    );
    */

    // Access other Amplify Resources 
    /*
    const retVal:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [
        {category: <insert-amplify-category>, resourceName: <insert-amplify-resourcename>},
      ]
    );
    */
  }
}