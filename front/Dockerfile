# Use an official Node.js runtime as a base image
FROM node:18

WORKDIR /app

# Copy only the package.json files
COPY ./life-insurance-front/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY life-insurance-front/ .

# Expose the port that the app will run on
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Define the command to run your application
CMD ["npm", "start"]
