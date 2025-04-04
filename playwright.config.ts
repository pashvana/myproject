import { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv";
require('dotenv').config();
dotenv.config({
  path: `C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/.env.${process.env.TEST_ENV}`,
})


const config: PlaywrightTestConfig = {
  testDir : './',
  reporter: 'html',
  timeout: 0,
  //globalTimeout: 200000,
 // globalSetup : 'C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/globalsetup.ts',
 
  use: {
    //baseURL: process.env.baseURL || 'https://powersuite-dev.unifysquare.com/',
    browserName: 'chromium',
   // browserName:'firefox',
    headless: false,
   viewport: { width: 1280, height: 720 }, 
  
    //baseURL: 'https://u2dev.ssg-dev.unifysquare.com/#/login',
    

   
  },
  // set config for 

  
  
 
};  
export default config;
 //playwright.config.ts


/* Load environment variables from .env file
import { defineConfig } from '@playwright/test';
import { config as devConfig } from 'C:/Users/HussaiS2/PlaywrightAutomation/config/dev';
import { config as stagingConfig } from 'C:/Users/HussaiS2/PlaywrightAutomation/config/Preview';
import { config as prodConfig } from 'C:/Users/HussaiS2/PlaywrightAutomation/config/Prod-Staging';

const env = process.env.TEST_ENV || 'dev';


 let config;
switch (env) {
    case 'Preview':
        config = stagingConfig;
        break;
    case 'prod':
        config = prodConfig;
        break;
    default:
        config = devConfig;
} 

export default defineConfig({
    use: {
        baseURL: config.baseURL,
       
    },
    // other Playwright configurations
});

import { PlaywrightTestConfig } from '@playwright/test';

// Config to hold extra properties
interface TestConfig extends PlaywrightTestConfig {
  baseUrl: string;
  USERID : string;
  PASSWORD: string;
  
}

// default configuration you expect to have for every environment
const defaultConfig: PlaywrightTestConfig = {
  timeout: 18000,
  
  
  expect: {
    timeout: 18000
  },
  fullyParallel: false,
  
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'results.xml' }]],
  use: {
    actionTimeout: 0,
    trace: 'on',
    
  },
  
};

// set config for dev
const devConfig: TestConfig = {
  baseUrl: 'https://powersuite-dev.unifysquare.com/',
  //apiUrl: 'https://dev.api.example.com',
  USERID:'XMO-ExperienceUser3@unifysquare.com',
  PASSWORD:'Welcome@qa3',
  workers:1
   
};

// set config for stage
const stageConfig: TestConfig = {
  baseUrl: 'https://powersuite-preview.unifysquare.com/',
  USERID:'XMO-ExperienceUser3@unifysquare.com',
PASSWORD:'Welcome@qa3',
workers:1
};

// set config for prod
const prodConfig: TestConfig = {
  baseUrl: 'https://powersuite-Prod-staging.unifysquare.com/',
  USERID:'XMO-ExperienceUser3@unifysquare.com',
PASSWORD:'Welcome@qa3',
workers:1
  
};

// get the environment type from command line. If none, set it to dev
const environment = process.env.TEST_ENV || 'dev';

// config object with default configuration and environment specific configuration
const config: TestConfig = {
  ...defaultConfig,
  ...(environment === 'stage' ? stageConfig : environment === 'prod' ? prodConfig : devConfig)
};

export default config;*/