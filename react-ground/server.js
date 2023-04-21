const http = require("http")


const portfolioCardData = [
    {
        id: 1,
        title: "이력서",
        paragraph: "프론트엔드 개발자 진현성 이력서 입니다.",
        link: "https://gastroad.github.io/resume/"
        // img: require("./src/assets/image/profile.jpeg"),
    }, {
        id: 2,
        title: "GitHub",
        paragraph: "github 링크 입니다.",
        link: "https://github.com/gastroad"
        // img: require("./src/assets/image/github.png"),
    }, {
        id: 3,
        title: "Slides",
        paragraph: "pt발표 자료 입니다.",
        link: "https://slides.com/coldpotato"
        // img: require("./src/assets/image/slides.png"),
    },
    {
        id: 4,
        title: "Github Blog",
        paragraph: "개인 블로그 링크 입니다.",
        link: "https://gastroad.github.io"
        // img: require("./src/assets/image/github.png"),
    }
]

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/api") {
        const data = { message: "hello" }
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200;
        res.end(JSON.stringify(data))
    }

    if (req.method === "GET" && req.url === "/api/portfolio") {
        const data = portfolioCardData
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200;
        res.end(JSON.stringify(data))
    }


    res.statusCode = 404
    res.end("404 Not Found")
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`"server running" ${PORT}`)
})



