# c25k
A couch to 5k running program web app hosted on github pages


```
tidy  -mi -w 120 index.html 
```


# Development

Using busybox as a local webserver.

```
docker run -d --rm -p 4000:4000 -v /path/to/src/c25k:/web busybox httpd -h /web -f -v -p 4000
```

Then visit: [http://localhost:4000](http://localhost:4000)
