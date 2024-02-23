const http = require('http'); //function provide garxa jalle create ra manage garxa web server lai
const fs =require('fs')

// const server =http.createServer yesle chai http server create garxa

// (req, res)=>{} yo chai callback function ho jun chai execute hunxa jaba clinet le kei reuqest garxa ani callback function ma 2 ta argument hunxa euta req vanne aarko response vanne request le chai incoming http request lai herxa jasati URL, headers, body responce vaneko( outgoing data) jun data hami send garxau(Http response) jasale data sendback garxa client lai

const server = http.createServer((req, res)=>{  
    const url =req.url;
    const method =req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
     if(url === '/message' && method === 'POST'){
        const body =[];
        req.on('data', (chunk)=>{
            body.push(chunk)
        });
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message= parseBody.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })
        fs.writeFileSync('message.txt', 'dummy')
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
     }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>my first heading</title></head>')
    res.write('<body><h1>hello from my node</h1></body>')
    res.write('</html>')
    res.end();

});

server.listen(3001);//yesle chai listen garna vanxa you port 3000 ma kei question aako xa ki xaina vanera

