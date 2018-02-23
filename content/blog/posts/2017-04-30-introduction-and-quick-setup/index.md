---
title: Serverless, auto-scalable api & web apps
excerpt: "In this post will talk about Squeezer , features in short & quick introduction"
date: "2017-09-28"
author: "Nick Chisiu"
image: "enterprise.png"
draft: false
---

## Framework [https://squeezer.io](https://squeezer.io)
## Documentation [https://squeezer.io/docs/](https:/squeezer.io/docs/)

## What is Squeezer ?

Squeezer it's a framework designed to help  developers to get a better architecture on serverless
zero-administration compute platforms where code runs on the top of
[microservices](https://en.wikipedia.org/wiki/Microservices) clouds like
[AWS Lambda](https://aws.amazon.com/documentation/lambda/) , [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) , [IBM OpenWhisk](https://developer.ibm.com/openwhisk/) & [Google Functions](https://cloud.google.com/functions/)


## Pay as you go

Enjoy developing your projects for any preferred time frame without the pressure of monthly costs .
## Intuitive deployments

Deploy only the newly added infrastructure, forget the traditional builds that takes forever .

## Smart testing

Test the new features , skip the already tested ones . Your QA team will love this .

## Event driven ecosystem

Add as many events you want to trigger you microservice's functions. HTTP requests , cron events and much more.

## No devops requirements

Forget the server guy that owns your infrastructure velocity . Just stay focused on adding new features to your business logic.

## Infinite architectures

Split your project features on how many microservices you want, sky is the limit !

## Website  + Functions = Nuclear

Combine the power of web with Functions . Deliver on any demand, allow your app to get visitors even from other galaxies :)

## Monolithic as modular

Don't be scared by the early adoption of microservices. Share components between functions , like doing on any other traditional project .

## Development climate

Simulates the cloud provider environment on your local machine , no need to deploy the code at every iteration. Speed up the entire development cycle 10x

## Requirements

- [Install node.js](http://nodejs.org/) version `>=6`

#### <a name="getting-started"></a>Getting started

NOTE: **Windows** users should [enable symlinks](http://answers.perforce.com/articles/KB/3472/?q=enabling&l=en_US&fs=Search&pn=1) in order to avoid unwanted symbolic links errors .

##### Serve

|    | cmd | description  |
|----|-----|--------------|
| 1. | **npm install -g squeezer-cli**  |  Install Squeezer CLI |
| 2. | **sqz create --project my-first-project --template aws-api-nodejs**  |  Create a project |
| 3. | **cd my-first-project**  |  Switch to the project's directory |
| 4. | **sqz compile**  |  Install packages & compile functions |
| 5. | **sqz serve**  |  Development mode<br>**Live reload** enabled by default |

##### Deploy

|    | cmd | description  |
|----|-----|--------------|
| 1. | [Configure credentials](https://docs.squeezer.io/clouds/aws/credentials.html)  |  Cloud credentials |
| 2. | **sqz compile --cloud**  |  Compile functions for cloud deployments |
| 3. | **sqz deploy --stage dev**  | Deploy your app into the cloud provider<br>*Note*: initial deployments can take longer <= **40 mins** |


#### <a name="contributing"></a>Contributing

See [contributing.md](CONTRIBUTING.md) for contribution guidelines

### <a name="community"></a>Community

* [Squeezer issues](https://github.com/SqueezerIO/squeezer/issues)
* [Gitter Chatroom](http://chat.squeezer.io/)
* [Facebook](https://www.facebook.com/Squeezer.IO/)
* [Twitter](https://twitter.com/SqueezerIO)
* [Contact Us](mailto:nick@squeezer.io)
