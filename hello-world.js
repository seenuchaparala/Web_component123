function createHelloWorldComponent() {
    const template = document.createElement('template');
  
    class HelloWorld extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
  
      async connectedCallback() {
        
            try{
                const options = {
                    method: 'GET',
                    headers: {
                      'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
                      'X-RapidAPI-Key': '78bed3a4a8mshbf6e6f99e1ad1a5p14e1ddjsn26dbe05350e0',
                    },
                  };
                
                  const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=sunglass&rows=4&start=0&color_groups=black`;
                
                  const rawData = await fetch(url, options);
                
                  const data = await rawData.json();
                  this.shadowRoot.innerHTML = `
          <style>
            li {
              font-weight: bold;
              font-family: sans-serif;
              color: red;
            }
          </style>
          <li>${data.response.docs[0].sale_price}</li>
          <li>${data.response.docs[1].sale_price}</li>
          <li>${data.response.docs[2].sale_price}</li>
          <li>${data.response.docs[3].sale_price}</li>
        `;
            }
        
            
            
            catch (e){
                this.shadowRoot.innerHTML = `<p>API fetch failed: ${e.message}</p>`
            }
        
        }
      }
    
  
    customElements.define('hello-world', HelloWorld);
  }
  
  createHelloWorldComponent();