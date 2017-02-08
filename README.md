# Mobile web test app for Button

## What is this?
A simple Node.js app with an Uber [Button](https://usebutton.com) to test to see if your Button integration in your mobile web app, with both plain HTML/Javascript and React.js is working.

For a more detailed, step-by-step guide on how to use this, see [this blog post](https://blog.usebutton.com/testing-a-button-on-your-mobile-website-61d46ca54404).

## How do I use this?
Clone the repo
```
git clone https://github.com/tylernappy/test_mobile_web_button.git
```
Navigate into the directory
```
cd test_mobile_web_button
```

Install dependencies
```
npm install
```

Open up the `simple_button.html` and `reactjs_simple_button.html` files and replace where it says 'app-XXXXXXXXXXXXXXXX' and "btn-XXXXXXXXXXXXXXXX" with your application ID and Button ID, both of which are found in the Button dashboard.

Start the server
```
node index.js
```

Open up a new window in your terminal, navigate to where `ngrok` is downloaded, and begin it on port 5000
```
./ngrok http 5000
```
(If you do not have ngrok, you can download it [here](https://ngrok.com/))

Grab a mobile device, open up the browser, and go to the URL ngrok has generated with endpoint of the HTML file you want to view. For example `https://9dc0ce7b.ngrok.io/simple_button` or `https://9dc0ce7b.ngrok.io/reactjs_simple_button`. If you see an Uber Button, everything is working.
