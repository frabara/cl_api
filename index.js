const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const cors = require('cors');

app.use(cors({
    origin: '*',
    // origin: ['https://indracompany.com', 'http://localhost:8080', 'https://ouc-extwork-web.herokuapp.com'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/', (req, res) => {
    res.send('Hello from Node.js!')
});

app.get('/services/dashboard', (req, res) => {
    var dashboardData = require('./data/dashboard.json');
    res.send(dashboardData);
});

app.get('/services/thirdparty', (req, res) => {
    var thirdpartyData = require('./data/thirdparty.json');
    res.send(thirdpartyData);
});

app.get('/services/thirdparty/contractList/:serviceType/:serviceCode/:company/:indActive', (req, res) => {
    var contractListData = require('./data/contractList.json');
    res.send(contractListData);
});

app.get('/services/thirdparty/contractDetail/:contactID', (req, res) => {
    var contractDetailData = require('./data/contractDetail.json');
    res.send(contractDetailData);
});

app.get('/services/thirdparty/liqDetail/:serviceID', (req, res) => {
    var liqDetailData = require('./data/liqDetail.json');
    res.send(liqDetailData);
});

app.get('/services/thirdparty/pendingActions/:serviceID', (req, res) => {
    var pendingActionsData = require('./data/pendingActions.json');
    res.send(pendingActionsData);
});

app.get('/services/thirdparty/materialjobs', (req, res) => {
    var materialjobsData = require('./data/materialjobs.json');
    res.send(materialjobsData);
});

app.get('/services/thirdparty/jobPriceHistory/:jobId', (req, res) => {
    var jobPriceHistoryData = require('./data/jobPriceHistory.json');
    res.send(jobPriceHistoryData);
});

app.get('/services/liquidations/companies', (req, res) => {
    var liquidationsCompaniesData = require('./data/liquidationsCompanies.json');
    res.send(liquidationsCompaniesData);
});

app.get('/services/liquidations/:company/:serviceCode/:fromDate/:toDate', (req, res) => {
    var liquidationsCompaniesData = require('./data/liquidationList.json');
    res.send(liquidationsCompaniesData);
});

app.get('/services/liquidations/operations/:liqId', (req, res) => {
    var operationListData = require('./data/operationList.json');
    res.send(operationListData);
});



app.get('/services/operationsHeader', (req, res) => {
    var operationCompaniesData = require('./data/operationHeaders.json');
    res.send(operationCompaniesData);
});

app.get('/services/operations/:company/:serviceCode/:serviceType/:fromDate/:toDate/:status', (req, res) => {
    var operationCompaniesData = require('./data/operations.json');
    res.send(operationCompaniesData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});