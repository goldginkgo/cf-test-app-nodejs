# Node.js Test Application for Cloud Foundry

This is a simple Node.js application for testing the Node.js buildpack.

## Running the application on Cloud Foundry

After installing in the 'cf' [command-line interface for Cloud Foundry](http://docs.cloudfoundry.org/devguide/installcf/),
targeting a Cloud Foundry instance, and logging in, the application can be pushed using the following command:

~~~
$ cf push
~~~

The application will be pushed using settings in the provided manifest.yml file.

## API

The test application provides the following APIs for validating the deployment of the app.

|          URI         |                Description                |
| -------------------- | ----------------------------------------- |
| /                    | Get the "Hello World!" text.              |
| /v1/get_envs         | Get the environment variables of the app. |
| /v1/app_name         | Get app name.                             |
| /v1/space_name       | Get space name where the app is deployed. |

### Example
~~~
$ curl https://<App-URL>
Hello World!

$ curl https://<App-URL>/v1/cf_envs
<Output of a hash which contains environment variables>

$ curl https://<App-URL>/v1/app_name
cf-test-app-nodejs

$ curl https://<App-URL>/v1/space_name
buildpacks
~~~
