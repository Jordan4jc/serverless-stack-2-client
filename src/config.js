const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1qyduzu0gz9kf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://83rfm5nl59.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_F2GOwyrBH",
    APP_CLIENT_ID: "4rer497hlgu149p1orejv0n46o",
    IDENTITY_POOL_ID: "us-east-1:f12e46db-2a4c-48b7-8383-13532840d929"
  },
  STRIPE_KEY: "pk_test_S7yLvhwi4XXwZ4XCN9Bb0Y2T",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-wwx4u6dsl3nf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://mv3txjf9ac.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gi7yWPWyR",
    APP_CLIENT_ID: "1jjqaf44at08ssji4dvh47slc0",
    IDENTITY_POOL_ID: "us-east-1:1e0e1e84-1d36-432f-9c2e-0f1eb6bdda51"
  },
  STRIPE_KEY: "pk_live_GiimbAWwguvv99GKxr3r3Jf8",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};