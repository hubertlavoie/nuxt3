/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:66a8bd6f-cede-416e-8fa8-2eae6dd174b5",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_e6YtoUrtK",
  aws_user_pools_web_client_id: "ki40f1njc03qodg355mu1pp6t",
  oauth: {
    domain: "portalb14ff22c-b14ff22c-dev.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "http://localhost:5678/,https://felixportal.netlify.app/",
    redirectSignOut: "http://localhost:5678/,https://felixportal.netlify.app/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default awsmobile;
