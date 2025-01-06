# Use Node.js as the base image
FROM node:21.7.3-slim as base

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python3

# Copy application code
COPY . .

# Install node modules
COPY package.json ./
RUN npm install

WORKDIR /app/backend/node_modules/sqlite3

RUN npm install

WORKDIR /app

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]