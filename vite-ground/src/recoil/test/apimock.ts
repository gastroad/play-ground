import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/portfolio").reply(200, {
    portfolio: [
        { id: 1, name: "Portfolio 1" },
        { id: 2, name: "Portfolio 2" },
    ],
});

export default mock;
