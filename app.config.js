import 'dotenv/config';

export default {
  
  expo: {
    name: 'IP E-Book',
    slug: 'Learn_to_code',
    privacy: 'public',
    platforms: ['ios', 'android'],
    version: '0.15.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#F57C00',
      },
      android: {
        package: "com.ip.ebook",
      },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
   
    
    extra: {
      eas:{
        projectId: '79f77c46-1dbd-46a7-9468-8b85f227af7c'
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
    
  }
};
