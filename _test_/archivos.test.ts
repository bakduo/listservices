import { app } from './../src/main';

import { expect } from "chai";
import { ArchivoJson } from '../src/util/archivo';
import * as fs from 'fs';

const archivo = new ArchivoJson();

describe('Test archivos json UNIT',() => {

    
    before(async function(){

        console.log("###############BEGIN TEST#################");

        const tmpJson = [
            {name:'name1',
            service:'service1',
            internal:'internal1'},
            {name:'name2',
            service:'service2',
            internal:'internal2'},
            {name:'name3',
            service:'service3',
            internal:'internal3'},
        ];
        
        fs.writeFileSync('sample.json',JSON.stringify(tmpJson),'utf8');

        archivo.open('sample.json');
        
    });

    after(async () => {

        console.log("###############END DB TEST#################");
    
        fs.unlinkSync('sample.json');
    
    });

    describe('Open file json', () => {

        it('Get items all service json', async () => {
        
            const items = archivo.getItems();

            expect(items).to.be.a('array');

            expect(items).to.eql( [
                {name:'name1',
                service:'service1',
                internal:'internal1'},
                {name:'name2',
                service:'service2',
                internal:'internal2'},
                {name:'name3',
                service:'service3',
                internal:'internal3'},
            ]);
        });

    });

})