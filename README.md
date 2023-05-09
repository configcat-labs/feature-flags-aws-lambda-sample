# feature-flags-aws-lambda-sample

This is a companion repo for the blog article titled: **How to use feature flags with AWS Lambda**. The article walks you through the steps on how you can use ConfigCat feature flags to control functionalities of in your AWS Lambda functions.

## Prerequisites

- [A verified AWS account](https://cloud.google.com/free)
- Basic [Node.js](https://nodejs.org/en/) and AWS knowledge

## Preparing the app

1. Clone this repo and run `npm install` to install the packages.

2. Open the `index.mjs` and replace `YOUR-CONFIGCAT-SDK-KEY` with your SDK Key. If you named your feature flag differently you may need to change it's name in the `getValueAsync` function.

## Uploading and deploying the code to AWS

1. In the root folder, run the following command to zip all the files:

```sh
zip function.zip *
```

2. On the function page, with the code tab selected, upload your the `function.zip` file.

3. Click the **Deploy** button.

## References

- <https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html>