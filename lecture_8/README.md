## Lab 8 - Load testing (Docker compose CLI practise)
### Pre-requirements:
* Node: v20 (can use [nvm](https://github.com/nvm-sh/nvm))

## Init server workflow:
1. Download PostgresDB docker container
2. Configure and run PostgresDB with env vars (please follow [link](https://hub.docker.com/_/postgres)) (use default port)
3. Configure and run Application according to env vars provided as example [here](https://github.com/vgarkusha/docker-lectures/blob/main/lecture_6/.env.example)
4. Start docker-compose `docker-compose-app.yml` and check logs - should be no errors from app side
5. Start docker-compose `docker-compose-locust.yml` and check logs - should be no errors from app side
6. Access to localhost:8089 to view locust UI
7. Configure a load test with next parameters:
   1. Target host: `app`
   2. Target host schema: `http`
   3. Test time: `5m`
   4. Ramp up for users: `5 users each 30 secs`
   5. Total users: `100`

 
