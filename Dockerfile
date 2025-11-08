FROM ruby:3.2.3

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

RUN gem install 'rails:7.1.3' 'bundler:2.4.19'

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
