# Intro

a basic Twitter Style  platform with Laravel  for the BE and HTML for the front end for testing my knowledge about Laravel and finaly  startig working with bikeflip a basic Twitter Style  platform with Laravel  for the BE and HTML for the front end for testing my knowledge about Laravel and finally starting working with bikeflip.

# Install

Pre:

run the project through the wsl if you are on windows and i run the following command 

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

> MUST NEED: DOCKER

Install

```bash
composer install
```

copy the env file and run the following command

```bash
php artisan key:generate
```

Now you should be ready for running the project

1. Run:

```bash
sail up 
```

(You should have docker installed and WSL installed if you are on windows)

2. Run The Migrations

```bash
sail artisan migrate
```

3. (Optional) Run the Migrations

```bash
sail artisan db:seed
```
