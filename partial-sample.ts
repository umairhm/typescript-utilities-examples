// All properties in the interface are required
interface Config {
  title: string;
  description: string;
  url: string;
}

class Page {
  // Initialize with all properties as default object
  config: Config = {
    title: 'My Sample App',
    url: 'https://my-sample-app.com',
    description: 'This is the best app so far'
  };

  // Take in a Partial<Config> to allow overriding parts of class property
  constructor(_config: Partial<Config>) {
    // Merge _config will class property
    this.config = { ...this.config, ..._config };
    console.log(this.config);
  }
}

class App {
  productPage: Page;
  url: string;

  constructor() {
    // We can now pass only part of the type Config
    this.productPage = new Page({
      title: 'My Products',
      url: this.url || ''
    });
  }
}

export default App;