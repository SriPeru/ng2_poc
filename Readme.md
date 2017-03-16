Angular2 Test Application

Install Nodejs & NPM

And run the below command in command prompt or in Terminal.

npm install
npm start

This will open app in the browser.

To change the Dashboard JSON call and param, modify the below code in dashboard/dashboard.ts

//To call Simple JSON
seachData() {
    const endpoint = 'http://localhost:5555/app/dashboard/data.json';
    return this.http
      .get(endpoint)
      .map(res => res.json());
  }

//To get data by sending params, instead of above uncomment the below code and use:

/*
  seachData(query) {
    const endpoint = 'http://localhost:5555/app/dashboard/data.json';
    const searchParams = new URLSearchParams()
    searchParams.set('api-key', API_KEY);
    searchParams.set('q', query);
    
    return this.http
      .get(endpoint, {search: searchParams})
      .map(res => res.json().response.docs);
  }*/