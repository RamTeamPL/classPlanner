import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Class Planner',
  webDir: 'dist/class-planner',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.0.110:4200',
    cleartext: true
  }
};

export default config;
