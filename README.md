# vulnnode

Vulnerable quotes API Node.js project for Snyk CLI demo

## Set up

### Install dependencies

```sh
npm install
```

### Start app

```sh
npm start
```
App will be started on port 3000.

### Create and start docker container

```sh
docker compose up --detach app
```
App will be available on port 3000.

### Create kubernetes resource

```sh
kubectl create -f kube.yml 
```
App will be available on port 5000.

## Test Project

### Default Test

```sh
snyk test
```
JSON output: [`/reports/default_test.json`](./reports/default_test.json)

GET `/`: Fetch all quotes \
GET `/random`: Fetch random quote

### Test Container 

```sh
snyk container test vulnnode 
```
JSON output: [`/reports/container_test.json`](./reports/container_test.json)

## Test IaC (Infrastructure as Code)

```sh
snyk iac test kube.yml
```
JSON output: [`/reports/iac_test.json`](./reports/iac_test.json)

## Misc

### Monitor Project

```sh
snyk monitor --file=package.json  --project-name=vulnnode --org=myorg
```

### Ignore Vulnerability

```sh
snyk ignore --id=SNYK-JS-LODASH-1018905 --expiry=2023-07-27 --reason="Not really severe"  
```
Check Output here: [`/reports/.snyk`](./reports/.snyk)

### Output test to JSON file

```sh
snyk <cmd> --json-file-output=./path/to/file.json 
```
