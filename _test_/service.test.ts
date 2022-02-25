import { app } from './../src/main';

import { expect } from "chai";

const request = require('supertest')(app);

describe('Test list service json UNIT',() => {

    
    before(async function(){
        console.log("###############BEGIN TEST#################");
    
        
    });

    after(async () => {

        console.log("###############END DB TEST#################");

    
    });

    describe('GET all service ', () => {

        it('Get list all service json', async () => {
        
            let response = await request.get(`/`).send();
            const serviceSave = response.body;
            expect(response.status).to.eql(200);
            expect(serviceSave).eql({});
        
        })
    })

    describe('No GET all service ', () => {
        
        it('Return 404 code', async () => {

            let response = await request.get(`/noexiste`).send();
            expect(response.status).to.eql(404);
        
        })
    })



})