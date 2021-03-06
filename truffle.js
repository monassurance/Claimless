module.exports = {
  build: {
    "index.html": "index.html",
    "Expire.html":"Expire.html",
    "Claim.html":"Claim.html",
    "Cancellation.html":"Cancellation.html",
    "AddNewInsurer.html": "AddNewInsurer.html",
    "CustomerBalance.html": "CustomerBalance.html",
    "Purchase.html": "Purchase.html",
    "app.js": [
      "javascripts/app.js"
    ],

    "tokenManager.js": [
      "javascripts/vendor/angular.js",
      "javascripts/tokenManagerController.js"
    ],

    "app.css": [
      "stylesheets/styles.css"
    ],

    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
