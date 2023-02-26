# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory to /app
WORKDIR /app

# Copy all files of modern directory to the container
COPY . .

# Install dependencies
RUN apk add bash && \
    npm install --silent

#    npm run build && \
#    npm install -g serve

# Define the command to run when the container starts
CMD ["npm","start"]
