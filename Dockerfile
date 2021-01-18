# Build via docker:
# docker build -t blocknetdx/api-docs .

FROM ruby:2.6-slim

WORKDIR /srv/api-docs

VOLUME /srv/api-docs/build
VOLUME /srv/api-docs/source

EXPOSE 4567

COPY Gemfile .
COPY Gemfile.lock .

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        nodejs \
    && gem install bundler \
    && bundle install \
    && apt-get remove -y build-essential \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

COPY . /srv/api-docs

RUN chmod +x /srv/api-docs/slate.sh

ENTRYPOINT ["/srv/api-docs/slate.sh"]
CMD ["build"]