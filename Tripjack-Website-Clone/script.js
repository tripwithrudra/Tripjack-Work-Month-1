import { onCLS, onINP, onLCP } from 'https://unpkg.com/web-vitals@4?module';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);