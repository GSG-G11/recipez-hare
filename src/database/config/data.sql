BEGIN;

DROP TABLE IF EXISTS  users,recipes CASCADE ;

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY , 
    username VARCHAR(200) NOT NULL UNIQUE ,
    password VARCHAR(200) NOT NULL 
);
CREATE TABLE "recipes" (
    id SERIAL PRIMARY KEY , 
    title VARCHAR(200) NOT NULL  ,
    details text NOT NULL , 
    user_id INT ,
    FOREIGN KEY (user_id)  REFERENCES users(id)
);
COMMIT;