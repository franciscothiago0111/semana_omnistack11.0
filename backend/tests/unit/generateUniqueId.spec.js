const generateIniqueId = require('../../src/utils/generateUniqueId');

describe('generate Unique Id', ()=>{
    it('should generate an unique ID', ()=>{
        const id = generateIniqueId();

        expect(id).toHaveLength(8);
    }); 
});