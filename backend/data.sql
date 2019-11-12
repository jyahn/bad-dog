DROP DATABASE IF EXISTS "bad-dog";

CREATE DATABASE "bad-dog";

\c "bad-dog"

CREATE TABLE posts (id SERIAL PRIMARY KEY, 
                    title TEXT NOT NULL, 
                    description TEXT NOT NULL,
                    dog_pic TEXT NOT NULL, 
                    votes INT NOT NULL DEFAULT 0);
                    
CREATE TABLE comments (id SERIAL PRIMARY KEY, 
                       text TEXT NOT NULL, 
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

INSERT INTO posts (title, description, dog_pic) VALUES
    ('I was gone for half an hour at the grocery store', 'I had a runny nose!', 'https://preview.redd.it/fj51czhchzj31.jpg?width=960&crop=smart&auto=webp&s=c25ea5198e9e4bd65a72c9009fecee59e27b8a8d'),
    ('My boy ate the whole bin and the plastic too.', 'Dad, my stomach kinda hurts..', 'https://preview.redd.it/p1hv3wwsjyb31.jpg?width=640&crop=smart&auto=webp&s=10e99311e846f340141550e545ae0e8b4e26e766');

INSERT INTO comments (text, post_id) VALUES
    ('This is a really great post.', 1),
    ('I learned so much reading this.', 1);