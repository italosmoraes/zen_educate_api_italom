const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');

chai.use(chaiHttp);

const { expect } = chai;

describe('getSortedNamesList', () => {
    const mockData = {
        "names": [ "James", "Jono", "John", "Radu", "Cole", "Italo" ]
    };

    const sortedResp = [
        {
            "name": "Cole"
        },
        {
            "name": "Italo"
        },
        {
            "name": "James"
        },
        {
            "name": "John"
        },
        {
            "name": "Jono"
        },
        {
            "name": "Radu"
        }
    ];

    it('returns the sorted list', (done) => {
        chai.request(server)
            .post('/sort-names')
            .send(mockData)
            .end((err, resp) => {
                expect(resp.body[0].name).to.equal('Cole');
                expect(resp.body).to.deep.equal(sortedResp);
                done();
            })
    });
})