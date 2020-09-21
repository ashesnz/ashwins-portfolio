# ashwins-portfolio
Ashwin's Portfolio Built with React © 2020 Thakur.co.nz

docker commands

```$xslt
docker run -it -p 3000:3000 CONTAINER_ID
```


```$xslt
docker run -it -p 3000:3000 -v /app/node_modules -v /c/Source/ashwins-portfolio:/app -e CHOKIDAR_USEPOLLING=true CONTAINER_ID
```