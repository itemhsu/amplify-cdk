// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate) {
    console.log('500');
    //console.log(resources.restApi);
    /*console.log('600');
    console.log(resources.restApi..restApiId);
    console.log('700');
    console.log(resources.restApi.attrRootResourceId);
    console.log('800');
    console.log(resources.restApi.body['paths']);*/
    console.log('800');
    //resources.restApi.body['definitions'][2]= "clone mode schema here";
    resources.restApi.addPropertyOverride("Body.definitions", {
        RequestSchema2: {
            type: 'object',
            required: [ 'request' ],
            properties: { 
                request : {
                    type : 'string'
                }
            },
            title: 'Request Schema'
          }
        }
    )

    
    resources.restApi.addPropertyOverride("Body.definitions", {
        newSchema: {
            $schema: 'http://json-schema.org/draft-07/schema',
            type: 'object',
            title: 'New schema',
            description: 'The root schema comprises the entire JSON document.',
            required: [
                'ModelName', 
                'ModelFramework', 
                'ModelArtifactS3Location', 
                'ModelDescription',
                'PretrainedWeight',
                'Algorithm', 
                'ClassNumber', 
                'ClassList', 
                'TrainingImageS3', 
                'TrainingLabelS3', 
                'TrainingInstance',
                'Epochs',
                'FleetArn',
                'AlertFunction'
            ],
            additionalProperties: false,
            properties: {
                ModelName: {
                    type: 'string',
                    title: 'The ModelName',
                    maxLength: 100
                },
                ModelFramework: {
                    type: 'string',
                    title: 'The ModelFramework',
                    maxLength: 30
                },        
                ModelDescription: {
                    type: 'string',
                    title: 'The ModelDescription',
                    maxLength: 600
                },        
                ModelArtifactS3Location: {
                    type: 'string',
                    title: 'The ModelArtifactS3Location',
                    maxLength: 200
                },        
                PretrainedWeight: {
                    type: 'string',
                    title: 'The PretrainedWeight',
                    maxLength: 200
                },
                Algorithm: {
                    type: 'string',
                    title: 'The Algorithm',
                    maxLength: 30
                },        
                ClassNumber: {
                    type: 'integer',
                    title: 'The ClassNumber'
                },
                ClassList: {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                    title: 'The ClassList'
                }, 
                NeoTRT: {
                    type: 'string',
                    enum: [   
                        'Neo',
                        'TRT'
                    ],
                    title: 'Neo or TRT optimizaion'
                },        
                
                TrainingImageS3: {
                    type: 'string',
                    title: 'The TrainingImageS3',
                    maxLength: 200
                },
                TrainingLabelS3: {
                    type: 'string',
                    title: 'The TrainingLabelS3',
                    maxLength: 200
                },        
                TrainingInstance: {
                    type: 'string',
                    enum: [   
                        'p3.2xlarge',
                        'p3.8xlarge',
                        'p3.16xlarge',
                        'p3dn.24xlarge'
                    ],
                    title: 'The TrainingInstance'
                },
                Epochs: {
                    type: 'integer',
                    title: 'The Epochs'
                },
                FleetArn: {
                    type: 'string',
                    title: 'The FleetArn',
                    maxLength: 200
                },
                AlertFunction: {
                    type: 'string',
                    title: 'The AlertFunction',
                    maxLength: 200
                } 
            }
        },
    //})
    //resources.restApi.addPropertyOverride("Body.definitions", {
        cloneSchema: {
            $schema: 'http://json-schema.org/draft-07/schema',
            type: 'object',
            title: 'Clone schema',
            description: 'The root schema comprises the entire JSON document.',
            required: [
                'ModelName', 
                'ModelArtifactS3Location', 
                'ModelDescription',
                'TrainingImageS3', 
                'TrainingLabelS3', 
                'TrainingInstance',
                'Epochs',
                'FleetArn',
                'AlertFunction'
            ],
            additionalProperties: false,
            properties: {
                ModelName: {
                    type: 'string',
                    title: 'The ModelName',
                    maxLength: 100
                },
                ModelDescription: {
                    type: 'string',
                    title: 'The ModelDescription',
                    maxLength: 600
                },        
                ModelArtifactS3Location: {
                    type: 'string',
                    title: 'The ModelArtifactS3Location',
                    maxLength: 200
                },    
                NeoTRT: {
                    type: 'string',
                    enum: [   
                        'Neo',
                        'TRT'
                    ],
                    title: 'Neo or TRT optimizaion'
                },       
                TrainingImageS3: {
                    type: 'string',
                    title: 'The TrainingImageS3',
                    maxLength: 200
                },
                TrainingLabelS3: {
                    type: 'string',
                    title: 'The TrainingLabelS3',
                    maxLength: 200
                },        
                TrainingInstance: {
                    type: 'string',
                    enum: [   
                        'p3.2xlarge',
                        'p3.8xlarge',
                        'p3.16xlarge',
                        'p3dn.24xlarge'
                    ],
                    title: 'The TrainingInstance'
                },
                Epochs: {
                    type: 'integer',
                    title: 'The Epochs'
                },
                FleetArn: {
                    type: 'string',
                    title: 'The FleetArn',
                    maxLength: 200
                },
                AlertFunction: {
                    type: 'string',
                    title: 'The AlertFunction',
                    maxLength: 200
                } 
            }
        }
    })


    //{ '$ref': '#/definitions/RequestSchema' }

    //resources.restApi.addPropertyOverride("Body.definitions", {
    


    //resources.restApi.body.paths['/items'].options['x-amazon-apigateway-integration'].responses.default.responseParameters['method.response.header.Access-Control-Allow-Origin'] = { 'Fn::Sub': "'https://${ApiId}.execute-api.${AWS::Region}.amazonaws.com'" };
 
    //resources.restApi.body['definitions']['cloneModelSchema']
    //console.log(resources.restApi.body['definitions']);
    const cloneModelPath="/CloneModel/{ModelArn}";
    const newModelPath="/CreateModel";
    console.log(resources.restApi.body.paths);
    //console.log(resources.restApi.body['definitions']['RequestSchema']['properties']['request']);
    console.log(resources.restApi.body.paths['/CloneModel/{ModelArn}']['x-amazon-apigateway-any-method']);

    console.log(resources.restApi.body.paths['/CloneModel/{ModelArn}']['x-amazon-apigateway-any-method']['parameters'][0]['schema']);
    
    resources.restApi.addPropertyOverride(`Body.paths.${cloneModelPath}.x-amazon-apigateway-any-method.parameters`,[
        {
          name: "cloneSchema",
          in: "body",
          required: false,
          schema: { '$ref': '#/definitions/cloneSchema' }
        },
      ]
    )

    resources.restApi.addPropertyOverride(`Body.paths.${newModelPath}.x-amazon-apigateway-any-method.parameters`,[
        {
          name: "newSchema",
          in: "body",
          required: false,
          schema: { '$ref': '#/definitions/newSchema' }
        },
      ]
    )

    //resources.restApi.body.paths['/CreateModel']['x-amazon-apigateway-any-method']['parameters'][0]['schema']="{'key'='value'}";
    //console.log(resources.restApi.body.paths['/CreateModel']['x-amazon-apigateway-any-method']['parameters'][0]['schema']);

}
