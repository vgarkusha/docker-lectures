## Lab 6 - Application connection to DB (Docker networks practice)
### Pre-requirements:
* Node: v20 (can use [nvm](https://github.com/nvm-sh/nvm))

Required steps for Dockerfile:
1. Same actions were in [Lecture 3](https://github.com/vgarkusha/docker-lectures/tree/main/lecture_3)

Init server workflow:
1. Download PostgresDB docker container
2. Create dedicated network called **app-lan**
3. Configure and run PostgresDB with env vars (please follow [link](https://hub.docker.com/_/postgres)) (use default port)
4. Configure and run Application according to env vars provided as example [here](https://github.com/vgarkusha/docker-lectures/blob/main/lecture_6/.env.example)
5. Check application logs - should no errors.
6. Try to run different container like NGINX and [sniff Postgres container port with nc](https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections)


```bash
# Install dependencies
npm i

# Build sources. Server directory: ./.next/standalone, Static folder: ./.next/static
npm run build

# Init server (if run in ./.next/standalone)
node server.js
```
 
